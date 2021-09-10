const videos = []
var nbrv = 0
const images = []
var nbri = 0
var animations = []
var nbra = 0
var playlists = []
var nbrp = 0
const url_origin = window.location.origin
var maqId = localStorage.maqId

async function doAjaxGet(url) {
    console.log("doAjaxGet start " + url)
    return $.ajax({
        url: url,
        dataType: "text",
    });
}

async function doAjaxPostData(url, data) {
    return $.post(url, data)
}

async function doAjaxPost(url) {
    return $.post(url)
}

async function doAjaxPutData(url, data) {
    return $.ajax({
        url: url,
        type: 'PUT',
        data: data
    })
}

async function parse_media(data, clid) {
    var json = JSON.parse(await data).filter((el) => { return el.Client_idClient == clid });
    for (var i = 0; i < json.length; ++i) {
        if (json[i].type == "Video") {
            videos[nbrv] = json[i]
            nbrv++
        }
        if (json[i].type == "Image") {
            console.log(json[i]);
            images[nbri] = json[i]
            nbri++
        }
    }
    for (var i = 0; i < videos.length; ++i) {
        $(".mediaS").append(new Option(videos[i].label, videos[i].idMedia));
    }
    console.log("parse_media done")
}

async function parse_animation(data) {
    console.log("parse_animation start")
    animations = JSON.parse(await data);
    nbra = animations.length
    console.log("parse_animation done")
}

async function parse_playlist(data, clid) {
    console.log("parse_playlist start")
    playlists = JSON.parse(await data).filter((el) => { return el.Client_idClient = clid });
    nbrp = playlists.length
    console.log("parse_playlist done")
}

function parseGridColumn(grid, nb) {
    var splitGrid = grid.replaceAll('%', '').split(' ')
    splitGrid.length = nb

    for (var i = 0; i < nb; i++) {
        if (splitGrid[i] != "auto") {
            let g = parseFloat(splitGrid[i])
            splitGrid[i] = g
        }
    }
    return splitGrid
}

function parse_maquette(data) {
    console.log("parse_maquette start")
    maquettes = JSON.parse(data);
    nbrmaq = maquettes.length
    if (maquettes[0]) {
        $("#label").val(maquettes[0].maquette_label)
        $("#nbrColSelect option[value=" + maquettes[0].nbrColonne + "]").prop('selected', true)
        switch (maquettes[0].nbrColonne) {
            case 12: $("#column12").show()
            case 11: $("#column11").show()
            case 10: $("#column10").show()
            case 9: $("#column9").show()
            case 8: $("#column8").show()
            case 7: $("#column7").show()
            case 6: $("#column6").show()
            case 5: $("#column5").show()
            case 4: $("#column4").show()
            case 3: $("#column3").show()
            case 2: $("#column2").show()
            default:
                break;
        }
        var gridarray = parseGridColumn(maquettes[0].grid_template_columns, maquettes[0].nbrColonne);
        for (var i = 0; i < maquettes[0].nbrColonne; i++) {
            var current_maquette = maquettes.filter((maq) => { return parseInt(maq.ColonneNbr) == (i + 1) })
            if (current_maquette[0]) {
                current_maquette = current_maquette[0]
                $("#mediat" + current_maquette.ColonneNbr + " option[value='" + current_maquette.Type + "']").prop('selected', true)
                if (current_maquette.Type != "Video") {
                    typeChange(current_maquette.ColonneNbr)
                }
                if (current_maquette.idPlaylist) {
                    if (current_maquette.Type == "Video" || current_maquette.Type == "Image" || current_maquette.Type == "Animation") {
                        $("#mediaSelect" + current_maquette.ColonneNbr + " option[value=" + current_maquette.idMedia + "]").prop('selected', true)
                    }
                    else if (current_maquette.Type == "Playlist") {
                        $("#mediaSelect" + current_maquette.ColonneNbr + " option[value='" + current_maquette.Playlist_idPlaylist + "']").prop('selected', true)
                    }
                }
                if (gridarray[current_maquette.ColonneNbr - 1] != "auto") {
                    $("#sizeg" + current_maquette.ColonneNbr).val(gridarray[current_maquette.ColonneNbr - 1])
                }
            }
        }
        x = $("#nbrColSelect").val()
        xx = parseInt(x)
        var gridtem = ""
        var gridsize = []
        const sizeid = "#sizeg"
        for (var i = 0; i < xx; i++) {
            if ($(sizeid + (i + 1)).val() == "default" || !$(sizeid + (i + 1)).val()) {
                gridsize[i] = "auto"
            } else {
                gridsize[i] = parseInt($(sizeid + (i + 1)).val())
            }
        }

        for (var i = 0; i < gridsize.length; i++) {
            if (gridsize[i] == "auto") {
                gridtem += "auto "
            } else {
                gridtem += gridsize[i] + "% "
            }
        }
        $("#gridt").val(gridtem)
    }
    console.log("parse_maquette done")
}

async function createMaqSubmit(event) {
    event.preventDefault();

    const maqobj = { label: $("#label").val(), grid_template_columns: $("#gridt").val(), nbrColonne: parseInt($("#nbrColSelect").val()) }

    const maqputprom = doAjaxPutData(url_origin + "/api/v1/maquettes/" + maqId, maqobj)

    const nbrColonne = parseInt($("#nbrColSelect").val())
    const typeMedia = genTypeArray()

    await maqputprom

    var promise_array = []
    for (var i = 0; i < nbrColonne; i++) {
        if (typeMedia[i].id == 'x' || typeMedia[i].type == "Playlist") {
            var col = { ColonneNbr: typeMedia[i].colNbr, Maquette_idMaquette: maqId, Type: typeMedia[i].type }
            if (typeMedia[i].type == "Playlist") {
                col.Playlist_idPlaylist = typeMedia[i].id;
            }
            promise_array.push(doAjaxPostData(url_origin + "/api/v1/colonnes/", col))
        } else {
            const url = window.location.origin + "/api/v1/medias/add/" + typeMedia[i].id + "/" + maqId + "/" + typeMedia[i].colNbr + "/" + typeMedia[i].type
            promise_array.push(doAjaxPost(url));
        }
    }
    await Promise.all(promise_array)
    localStorage.removeItem('maqId');
    window.open("./maquettes.html", "_self")
}

function grid_gen() {
    const x = $("#nbrColSelect").val()
    const xx = parseInt(x)
    var gridtem = ""
    var gridsize = []
    const sizeid = "#sizeg"
    for (var i = 0; i < xx; i++) {
        if ($(sizeid + (i + 1)).val() == "default" || !$(sizeid + (i + 1)).val()) {
            gridsize[i] = "auto"
        } else {
            gridsize[i] = parseInt($(sizeid + (i + 1)).val())
        }
    }

    for (var i = 0; i < gridsize.length; i++) {
        if (gridsize[i] == "auto") {
            gridtem += "auto "
        } else {
            gridtem += gridsize[i] + "% "
        }
    }
    $("#gridt").val(gridtem)
}

const typeChange = function (y) {
    $("#mediaSelect" + y).empty()
    const typ = $("#mediat" + y).val()
    if (typ == "Video") {
        for (var i = 0; i < videos.length; ++i) {
            $("#mediaSelect" + y).append(new Option(videos[i].label, videos[i].idMedia));
        }
        if (!videos.length) {
            $("#mediaSelect" + y).append(new Option("No videos", "x"));
        }
    }
    if (typ == "Image") {
        console.log(images);
        for (var i = 0; i < images.length; ++i) {
            $("#mediaSelect" + y).append(new Option(images[i].label, images[i].idMedia));
        }
        if (!images.length) {
            $("#mediaSelect" + y).append(new Option("No images", "x"));
        }
    }
    if (typ == "Animation") {
        for (var i = 0; i < nbra; ++i) {
            $("#mediaSelect" + y).append(new Option(animations[i].label, animations[i].idMedia));
        }
        if (!animations.length) {
            $("#mediaSelect" + y).append(new Option("No animations", "x"));
        }
    }
    if (typ == "Playlist") {
        for (var i = 0; i < playlists.length; i++) {
            $("#mediaSelect" + y).append(new Option(playlists[i].label, playlists[i].idPlaylist));
        }
        if (!playlists.length) {
            $("#mediaSelect" + y).append(new Option("No Playlists", "x"));
        }
    }
    if (typ == "Vide") {
        $("#mediaSelect" + y).append(new Option("Vide", "x"));
    }
    if (typ == "Webcam") {
        $("#mediaSelect" + y).append(new Option("Webcam", "x"));
    }
}

function on_nbr_col_change() {
    grid_gen()

    const x = $("#nbrColSelect").val()

    switch (x) {
        case '1': $("#column2").hide()
        case '2': $("#column3").hide()
        case '3': $("#column4").hide()
        case '4': $("#column5").hide()
        case '5': $("#column6").hide()
        case '6': $("#column7").hide()
        case '7': $("#column8").hide()
        case '8': $("#column9").hide()
        case '9': $("#column10").hide()
        case '10': $("#column11").hide()
        case '11': $("#column12").hide()
        default:
            break;
    }
    switch (x) {
        case '12': $("#column12").show()
        case '11': $("#column11").show()
        case '10': $("#column10").show()
        case '9': $("#column9").show()
        case '8': $("#column8").show()
        case '7': $("#column7").show()
        case '6': $("#column6").show()
        case '5': $("#column5").show()
        case '4': $("#column4").show()
        case '3': $("#column3").show()
        case '2': $("#column2").show()
        default:
            break;
    }
}

function genTypeArray() {
    const nbrColonne = parseInt($("#nbrColSelect").val())
    var typeMedia = []
    for (var i = 0; i < nbrColonne; i++) {
        let media = {}
        media.id = $("#mediaSelect" + (i + 1)).val()
        media.colNbr = i + 1
        media.type = $("#mediat" + (i + 1)).val()
        if (media.id == 'x' && media.type != "Webcam")
            media.type = "Vide"
        typeMedia[i] = media
    }
    return typeMedia
}

async function fillform() {
    const play_url = auth == 2 ? url_origin + "/api/v1/playlists/" : url_origin + "/api/v1/playlists/client/pl/"
    const media_url = auth == 2 ? url_origin + "/api/v1/medias/" : url_origin + "/api/v1/medias/client/c/"

    const animationdata = parse_animation(doAjaxGet(url_origin + "/api/v1/animations/media/id/"))
    const maquettedata = doAjaxGet(url_origin + "/api/v1/maquettes/find/detail/" + maqId)

    const client_id_data = await doAjaxGet(url_origin + "/api/v1/maquettes/" + maqId)
    const clid = (JSON.parse(client_id_data))[0].Client_idClient

    await Promise.all([maquettedata, parse_media(doAjaxGet(media_url), clid), parse_playlist(doAjaxGet(play_url), clid), animationdata])

    parse_maquette(await maquettedata)
}

function onchanges() {
    $("#mediat1").on("change", () => { typeChange(1) })
    $("#mediat2").on("change", () => { typeChange(2) })
    $("#mediat3").on("change", () => { typeChange(3) })
    $("#mediat4").on("change", () => { typeChange(4) })
    $("#mediat5").on("change", () => { typeChange(5) })
    $("#mediat6").on("change", () => { typeChange(6) })
    $("#mediat7").on("change", () => { typeChange(7) })
    $("#mediat8").on("change", () => { typeChange(8) })
    $("#mediat9").on("change", () => { typeChange(9) })
    $("#mediat10").on("change", () => { typeChange(10) })
    $("#mediat11").on("change", () => { typeChange(11) })
    $("#mediat12").on("change", () => { typeChange(12) })

    $("#nbrColSelect").on("change", () => on_nbr_col_change())
    $(".size-perc").on("change", () => grid_gen())
}

$(function () {
    fillform()
    on_nbr_col_change();
    onchanges()
    $("#createMaqForm").submit(createMaqSubmit)
})

