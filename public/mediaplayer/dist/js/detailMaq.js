const url_origin = window.location.origin

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

function editMaq(id) {
    localStorage.maqId = id
    window.open("./editMaq.html");
}

function detailPlay(id) {
    localStorage.playId = id
    window.open("./detailPlay.html");
}

async function doAjaxGet(url) {
    return $.ajax({
        url: url,
        dataType: "text",
    });
}

function parse_maquette(data) {
    maquettes = JSON.parse(data);
    if (maquettes[0]) {
        $("#idMaq").text("id: " + maquettes[0].idMaquette)
        $("#label").text("Label: " + maquettes[0].maquette_label)
        $("#Colmnbr").text(maquettes[0].nbrColonne + " Colonnes")
        const nbrcol = parseInt(maquettes[0].nbrColonne)

        var html = "<thead><tr><td>Colonne #</td><td>Grid Taille</td><td>Type</td><td>Media Label</td></thead></tr>";

        var gridTab = parseGridColumn(maquettes[0].grid_template_columns, maquettes[0].nbrColonne)
        for (var i = 0; i < nbrcol; ++i) {
            var current_maquette = maquettes.filter((maq) => { return parseInt(maq.ColonneNbr) == (i + 1) })
            if (current_maquette[0]) {
                const { ColonneNbr, Type, playlist_label, media_label, anim_label, Client_idClient, media_link, Playlist_idPlaylist } = current_maquette[0]
                var gridCol = gridTab[i]
                if (gridCol != "auto")
                    gridCol += "%"
                var label
                if (Type == "Image")
                    label = media_label
                else if (Type == "Video")
                    label = '<a target="_blank" href="' + url_origin + '/video/' + Client_idClient + '/' + media_link + '" /a> ' + media_label
                else if (Type == "Animation")
                    label = anim_label
                else if (Type == "Playlist")
                    label = '<a target="_blank" href="#" onclick="detailPlay(' + Playlist_idPlaylist + ')" /a> ' + playlist_label
                else
                    label = " "
                html += '<tr>';
                html += '<td>' + ColonneNbr + '</td>' + '<td>' + gridCol + '</td>' + '<td>' + Type + '</td>' + '<td>' + label + '</td>';

                html += '</tr>';
                //}
            }
        }
        $('#usersTable').append(html);
    }
}

$(function () {
    const maqId = localStorage.maqId
    localStorage.removeItem('maqId');

    $("#usernameH2").text(localStorage.username)
    $("#modifyButt").attr("onclick", "editMaq(" + maqId + ")")

    const maquette_get_res = doAjaxGet(url_origin + "/api/v1/maquettes/find/detail/" + maqId).then((data) => parse_maquette(data))

})

