const videos = []
var nbrv = 0
var prevx
const url_origin = window.location.origin
const playId = localStorage.playId

async function doAjaxGet(url) {
    return $.ajax({
        url: url,
        dataType: "text",
    });
}

async function doAjaxPostData(url, data) {
    return $.post(url, data)
}

async function doAjaxPutData(url, data) {
    return $.ajax({
        url: url,
        type: 'PUT',
        data: data
    })
}

async function doAjaxPut(url) {
    return $.ajax({
        url: url,
        type: 'PUT',
    })
}

async function doAjaxDelete(url) {
    return $.ajax({
        url: url,
        type: 'DELETE',
    })
}

function parse_media(data, data2) {

    const clid = (JSON.parse(data2))[0].Client_idClient
    for (var i = 0; i < 100; i++) {
        $("#videoDivs").append('<div class="col-3 col-xl-2" id="videoSelectDiv' + (i + 1) + '"><div class="row" ><div class="mb-3"><label class="form-label">Video ' + (i + 1) + '</label><select class="form-select videoS" name="media" id="videoSelect' + (i + 1) + '"></select></div></div></div>')
    }

    var json = JSON.parse(data);

    //fill videos[] from response
    for (var i = 0; i < json.length; ++i) {
        if (json[i].type == "Video" && clid == json[i].Client_idClient) {
            videos[nbrv] = json[i]
            nbrv++
        }
    }

    //create options in video select inputs
    for (var i = 0; i < videos.length; ++i) {
        $(".videoS").append(new Option(videos[i].label, videos[i].idMedia));
    }
}

function parse_playlists(data) {
    var json = JSON.parse(data);
    if (json[0]) {//number of videos in playlist
        prevx = json.length
        $("#nbr_video").val(prevx)
        $("#label").val(json[0].playlist_label);

        //set value of active selects
        for (let i = 0; i < prevx; ++i) {
            var byRang = json.filter((el) => {
                return parseInt(el.rang) == i + 1
            })
            if (byRang[0])
                $("#videoSelect" + (i + 1)).val(byRang[0].idMedia)
        }

        //hide inactive selects
        for (let index = prevx; index < 100; index++) {
            $('#videoSelectDiv' + (index + 1)).hide()
        }
    }
}

function nbrVideoOnChange() {
    if (!prevx)
        prevx = 2
    var nbrV = parseInt($("#nbr_video").val())
    if (prevx > nbrV) {
        for (var i = nbrV + 1; i < prevx + 1; i++) {
            $('#videoSelectDiv' + i).hide()
        }
        prevx = nbrV
    } else if (prevx < nbrV) {
        for (var i = prevx + 1; i < nbrV + 1; i++) {
            $('#videoSelectDiv' + i).show()
        }
        prevx = nbrV
    }
}

function new_phm_gen() {
    var phmarray = []
    const nbrV = parseInt($("#nbr_video").val())
    for (let index = 0; index < nbrV; index++) {
        phmarray.push({ Playlist_idPlaylist: localStorage.playId, Media_idMedia: $("#videoSelect" + (index + 1)).val(), rang: (index + 1) })
    }
    return phmarray
}

async function onFormSubmit(event) {
    event.preventDefault();

    const data = await doAjaxPostData(url_origin + "/api/v1/playlists/", { label: $("#label").val(), userCreated: "Yes" })
    const newplayId = data.data
    localStorage.playId = newplayId
    doAjaxDelete(url_origin + "/api/v1/playlists/" + playId)
    await doAjaxPut(url_origin + "/api/v1/colonnes/" + playId + "/" + newplayId)
    var phmarray = new_phm_gen()
    await Promise.all(phmarray.map((phm) => { return doAjaxPostData(url_origin + "/api/v1/phm/", phm) }))
    window.open("./detailPlay.html");
}

$(function () {
    localStorage.removeItem('playId');

    var url = url_origin + "/api/v1/medias/client/c/"
    if (auth == 2)
        url = url_origin + "/api/v1/medias/";

    (async () => {

        const data = doAjaxGet(url_origin + "/api/v1/playlists/client/detail/" + playId)
        const proms = await Promise.all([
            doAjaxGet(url),
            doAjaxGet(url_origin + "/api/v1/playlists/" + playId)
        ])
        parse_media(proms[0], proms[1])

        parse_playlists(await data)

    })();

    $("#nbr_video").on("change", nbrVideoOnChange);

    $("#editPlaylistForm").submit(onFormSubmit)
})