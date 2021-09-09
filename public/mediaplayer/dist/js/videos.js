const url_origin = window.location.origin

function editVideo(id) {
    localStorage.mediaId = id
    window.open("./editVideo.html");
}

async function deleteVideo(id) {
    await $.ajax({
        url: url_origin + '/api/v1/medias/' + id,
        type: 'DELETE',
    })
    location.reload()
}

async function doAjaxGet(url) {
    return $.ajax({
        url: url,
        dataType: "text",
    });
}

async function parse_media(url) {
    const data = await doAjaxGet(url)

    const json = JSON.parse(data);
    if (json[0]) {
        var html = "";
        for (var i = 0; i < json.length; ++i) {
            const { idMedia, label, lien, type } = json[i]
            if (type == 'Video') {
                if (html == "")
                    html = "<thead><tr><td>id</td><td>Nom</td><td>Lien</td><td></td></tr></thead>";
                const link = window.location.origin + '/video/' + json[i].Client_idClient + '/' + lien
                html += '<tr>';
                html += '<td>' + idMedia + '</td>' + '<td>' + label + '</td>' + '<td><a target="_blank" href="' + link + '" /a> ' + lien + '</td>';
                html += "<td class='text-end'><a href='#' class='btn btn - white' onclick=\"deleteVideo(" + idMedia + ")\">Supprimer</a > </td>"
                html += '</tr>';
            }
        }

        $('#usersTable').append(html);
    }
}

$(function () {
    $("#usernameH2").text(localStorage.username)

    var url = url_origin + "/api/v1/medias/client/c/"

    if (auth == 2)
        url = url_origin + "/api/v1/medias/"

    parse_media(url)
})


