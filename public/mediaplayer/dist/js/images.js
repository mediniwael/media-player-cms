const url_origin = window.location.origin

async function doAjaxGet(url) {
    return $.ajax({
        url: url,
        dataType: "text",
    });
}

function deleteImage(id) {
    $.ajax({
        url: url_origin + '/api/v1/medias/' + id,
        type: 'DELETE',
    }).done(function () {
        location.reload()
    })
}

async function parse_media(data) {
    var json = JSON.parse(await data);
    if (json[0]) {
        var html = "";
        for (var i = 0; i < json.length; ++i) {
            const { idMedia, label, lien, type } = json[i]
            if (type == 'Image') {
                if (html == "")
                    html = "<thead><tr><td>id</td><td>Nom</td><td>Lien</td><td></td></tr></thead>";
                const link = window.location.origin + '/image/' + json[i].Client_idClient + '/' + lien
                html += '<tr>';
                html += '<td>' + idMedia + '</td>' + '<td>' + label + '</td>' + '<td><a target="_blank" href="' + link + '" /a> ' + lien + '</td>';
                html += "<td class='text-end'><a href='#' class='btn btn - white' onclick=\"deleteImage(" + idMedia + ")\">Supprimer</a > </td>"
                html += '</tr>';
            }
        }
        $('#usersTable').append(html);
    }
}

$(function () {
    const url = auth == 2 ? url = url_origin + "/api/v1/medias/" : url_origin + "/api/v1/medias/client/c/"
    parse_media(doAjaxGet(url))
    $("#usernameH2").text(localStorage.username)
})
