const videos = []
var nbrv = 0
const url_origin = window.location.origin
var prevx = 2

async function doAjaxGet(url) {
    return $.ajax({
        url: url,
        dataType: "text",
    });
}

async function parse_media(dataProm) {
    var json = JSON.parse(await dataProm);
    for (var i = 0; i < json.length; ++i) {
        if (json[i].type == "Video") {
            videos[nbrv] = json[i]
            nbrv++
        }
    }
    genVideoSelectOptions()
}

async function doAjaxPostData(url, data) {
    return $.post(url, data)
}

function initView() {
    $("#nbr_video").val(2)
    for (var i = 0; i < 100; i++) {
        $("#videoDivs").append('<div class="col-3 col-xl-2" id="videoSelectDiv' + (i + 1) + '"><div class="row" ><div class="mb-3"><label class="form-label">Video ' + (i + 1) + '</label><select class="form-select videoS" name="media" id="videoSelect' + (i + 1) + '"></select></div></div></div>')
        if (i > 1) {
            $('#videoSelectDiv' + (i + 1)).hide()
        }
    }
}

function genVideoSelectOptions() {
    for (var i = 0; i < videos.length; ++i) {
        $(".videoS").append(new Option(videos[i].label, videos[i].idMedia));
    }
}

function on_nbr_video_change() {
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

async function onformsubmit(event) {
    event.preventDefault();
    const dataProm = doAjaxPostData(url, { label: label, userCreated: "Yes" })
    const url = window.location.origin + "/api/v1/playlists/"
    const label = $("#label").val()
    const nbrV = parseInt($("#nbr_video").val())
    const Playlist_idPlaylist = (await dataProm).data
    var promise_array = []
    for (let index = 0; index < nbrV; index++) {
        const url = window.location.origin + "/api/v1/phm/"
        let phmNew = { Playlist_idPlaylist: Playlist_idPlaylist, Media_idMedia: $("#videoSelect" + (index + 1)).val(), rang: (index + 1) }
        promise_array.push(doAjaxPostData(url, phmNew))
    }
    Promise.all(promise_array).then(() => window.open("./playlists.html", "_self"))
}

$(function () {
    initView()
    parse_media(doAjaxGet(url_origin + "/api/v1/medias/client/c/"))
    $("#nbr_video").on("change", () => on_nbr_video_change())
    $("#createMaqForm").submit(onformsubmit)
})