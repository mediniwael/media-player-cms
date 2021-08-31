const url_origin = window.location.origin

async function doAjaxGet(url) {
    return $.ajax({
        url: url,
        dataType: "text",
    });
}

async function doAjaxPostData(url, data) {
    return $.post(url, data)
}

function parse_maquette(data) {
    const json = JSON.parse(data);
    for (var i = 0; i < json.length; ++i) {
        $("#maquetteSelect").append(new Option(json[i].label, json[i].idMaquette));
    }
    $("#lienPrefix").text(window.location.host + "/affichage/" + json[0].Client_idClient + "/")
}

function getFormData() {
    const label = $("#label").val();
    const long = $("#long").val();
    const larg = $("#larg").val();
    const maquetteId = $("#maquetteSelect").val();
    const lien = $("#lien").val();
    return { label: label, longueur: long, largeur: larg, lien: lien, Maquette_idMaquette: maquetteId }
}


$(function () {
    const maquette_get_res = doAjaxGet(url_origin + "/api/v1/maquettes/client/id/").then((data) => parse_maquette(data))

    $("#createAffForm").submit(function (event) {
        event.preventDefault();
        const url = url_origin + "/api/v1/affichages"
        const new_affichage = getFormData()
        const affichage_post_res = doAjaxPostData(url, new_affichage).then(() => window.open("./affichage.html", "_self"))
    })
})