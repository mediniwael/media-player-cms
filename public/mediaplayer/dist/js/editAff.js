const url_origin = window.location.origin
var clid

async function doAjaxGet(url) {
    return $.ajax({
        url: url,
        dataType: "text",
    });
}

async function doAjaxPutData(url, data) {
    return $.ajax({
        url: url,
        type: 'PUT',
        data: data
    })
}

function parse_maquette(data) {
    var json = JSON.parse(data);
    console.log(clid)
    for (var i = 0; i < json.length; ++i) {
        if (json[0].Client_idClient == clid) {
            $("#maquetteSelect").append(new Option(json[i].label, json[i].idMaquette));
        }
    }
    $("#lienPrefix").text(window.location.host + "/affichage/" + json[0].Client_idClient + "/")
}

function parse_affichage(data) {
    affichage = JSON.parse(data);
    if (affichage[0]) {
        $("#label").val(affichage[0].label)
        $("#long").val(affichage[0].longueur)
        $("#larg").val(affichage[0].largeur)
        $("#lien").val(affichage[0].lien)
        $("#maquetteSelect").val(affichage[0].Maquette_idMaquette)
    }
}

$(function () {
    const affId = localStorage.affId
    localStorage.removeItem('affId');
    console.log(localStorage.clid)
    clid = localStorage.clid
    localStorage.removeItem('clid');

    var url = url_origin + "/api/v1/maquettes/client/id/"
    if (auth == 2)
        url = url_origin + "/api/v1/maquettes/"

    doAjaxGet(url).then((data) => {
        parse_maquette(data)
        return doAjaxGet(url_origin + "/api/v1/affichages/" + affId)
    }).then((data) => parse_affichage(data))


    $("#createAffForm").submit(function (e) {
        e.preventDefault();

        const new_affichage = { label: $("#label").val(), longueur: $("#long").val(), largeur: $("#larg").val(), lien: $("#lien").val(), Maquette_idMaquette: $("#maquetteSelect").val() }
        doAjaxPutData(url_origin + "/api/v1/affichages/" + affId, new_affichage).then(() => window.open("./affichage.html", "_self"))
    });
})


