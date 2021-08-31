const videos = []
var nbrv = 0
const images = []
var nbri = 0
var animations = []
var nbra = 0
var playlists = []
var nbrp = 0

const url_origin = window.location.origin

function typeChange(y) {
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

async function doAjaxGet(url) {
    return $.ajax({
        url: url,
        dataType: "text",
    });
}

function parse_media(data) {
    var json = JSON.parse(data);
    for (var i = 0; i < json.length; ++i) {
        if (json[i].type == "Video") {
            videos[nbrv] = json[i]
            nbrv++
        }
        if (json[i].type == "Image") {
            images[nbri] = json[i]
            nbri++
        }
    }
    for (var i = 0; i < videos.length; ++i) {
        $(".mediaS").append(new Option(videos[i].label, videos[i].idMedia));
    }
}

function parse_animation(data) {
    animations = JSON.parse(data);
    nbra = animations.length
}

function parse_playlist(data) {
    playlists = JSON.parse(data);
    nbrp = playlists.length
}

async function doAjaxPostData(url, data) {
    return $.post(url, data)
}

async function doAjaxPost(url) {
    return $.post(url)
}

function getFormData() {
    const label = $("#label").val();
    const nbrColonne = parseInt($("#nbrColSelect").val())
    const grid_template_columns = $("#gridt").val();
    return { label: label, grid_template_columns: grid_template_columns, nbrColonne: nbrColonne }
}

function maquette_post_callback(maqId) {
    const Maquette_idMaquette = maqId.data
    const typeMedia = genTypeArray()

    for (var i = 0; i < typeMedia.length; i++) {
        if (typeMedia[i].id == 'x' || typeMedia[i].type == "Playlist") {
            var col = { ColonneNbr: typeMedia[i].colNbr, Maquette_idMaquette: Maquette_idMaquette, Type: typeMedia[i].type }
            if (typeMedia[i].type == "Playlist") {
                col.Playlist_idPlaylist = typeMedia[i].id;
            }
            doAjaxPostData(url_origin + "/api/v1/colonnes/", col)
        } else {
            const url = url_origin + "/api/v1/medias/add/" + typeMedia[i].id + "/" + Maquette_idMaquette + "/" + typeMedia[i].colNbr + "/" + typeMedia[i].type
            doAjaxPost(url)
        }
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

$(function () {

    const media_get_res = doAjaxGet(url_origin + "/api/v1/medias/client/c/").then((data) => parse_media(data))
    const animation_get_res = doAjaxGet(url_origin + "/api/v1/animations/media/id/").then((data) => parse_animation(data))
    const playlist_get_res = doAjaxGet(url_origin + "/api/v1/playlists/client/pl/").then((data) => parse_playlist(data))

    on_nbr_col_change()

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

    $("#createMaqForm").submit(function (event) {
        event.preventDefault();

        const url = url_origin + "/api/v1/maquettes/"
        const new_maquette = getFormData()

        const affichage_post_res = doAjaxPostData(url, new_maquette)
            .then((data) => maquette_post_callback(data))
            .then(() => window.open("./maquettes.html", "_self"))

    })
})