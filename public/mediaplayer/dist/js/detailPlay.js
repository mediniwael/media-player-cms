const url_origin = window.location.origin
var playId = localStorage.playId

function editplay(id) {
    localStorage.playId = id
    window.open("./editPlaylist.html");
}

async function parse_playlist(data) {
    var json = JSON.parse(await data);
    $("#nbrVideos").text("Taille du Playlist: " + json.length)
    $("#label").text("Nom du Playlist: " + json[0].playlist_label);
    $("#idPlay").text("id: " + json[0].idPlaylist)

    var html = "<thead><tr><td>Rang</td><td>id</td><td>Nom</td><td>Lien</td></tr></thead>";
    for (var i = 0; i < json.length; ++i) {
        var byRang = json.filter((el) => {
            return parseInt(el.rang) == i + 1
        })
        if (byRang[0]) {
            const { media_label, lien, idMedia, rang, Client_idClient } = byRang[0]
            html += '<tr>';
            html += '<td>' + rang + '</td>' + '<td>' + idMedia + '</td>' + '<td>' + media_label + '</td>' + '<td><a target="_blank" href="' + url_origin + '/video/' + Client_idClient + '/' + lien + '" /a> ' + lien + '</td>';

            html += '</tr>';
        }
    }
    $('#usersTable').append(html);
}

async function doAjaxGet(url) {
    return $.ajax({
        url: url,
        dataType: "text",
    });
}

$(function () {
    parse_playlist(doAjaxGet(url_origin + "/api/v1/playlists/client/detail/" + playId))
    localStorage.removeItem('playId');
    $("#usernameH2").text(localStorage.username)
    $("#modifyButt").attr("onclick", "editplay(" + playId + ")")
})