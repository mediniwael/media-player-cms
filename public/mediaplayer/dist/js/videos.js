const url_origin = window.location.origin

function editVideo(id) {
    localStorage.mediaId = id
    window.open("./editVideo.html");
}

function deleteVideo(id) {
    $.ajax({
        url: 'http://localhost:5000/api/v1/medias/' + id,
        type: 'DELETE',
    }).done(function () {
        location.reload()
    })
}

async function doAjaxGet(url) {
    return $.ajax({
        url: url,
        dataType: "text",
    });
}

function parse_media(data) {
    const json = JSON.parse(data);
    if (json[0]) {
        var html = "<thead><tr><td>id</td><td>Nom</td><td>Lien</td><td></td></tr></thead>";
        for (var i = 0; i < json.length; ++i) {
            const { idMedia, label, lien, type } = json[i]
            if (type == 'Video') {
                const link = window.location.origin + '/video/' + json[i].Client_idClient + '/' + lien
                html += '<tr>';
                html += '<td>' + idMedia + '</td>' + '<td>' + label + '</td>' + '<td><a target="_blank" href="' + link + '" /a> ' + lien + '</td>';
                //html += "<td class='text-end'><span class='dropdown'><button class='btn dropdown-toggle align-text-top' data-bs-boundary='viewport' data-bs-toggle='dropdown'>Actions</button><div class='dropdown-menu dropdown-menu-end'><a class='dropdown-item' href='#'  onclick=\"deleteVideo(" + idMedia + ",'" + Client_idClient + "','" + lien + "')\">Supprimer</a><a class='dropdown-item' href='#' onclick='editVideo(" + idMedia + ")'>Modifier</a></div></span></td>"
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

    doAjaxGet(url).then((data) => parse_media(data))
})


