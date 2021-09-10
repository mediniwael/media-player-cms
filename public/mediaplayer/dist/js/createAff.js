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

async function parse_maquette(dataProm) {
    const data = await dataProm
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

async function onformsubmit(event) {
    event.preventDefault();
    const url = url_origin + "/api/v1/affichages"
    const new_affichage = getFormData()
    await doAjaxPostData(url, new_affichage)
    window.open("./affichage.html", "_self")
}

$(function () {
    parse_maquette(doAjaxGet(url_origin + "/api/v1/maquettes/client/id/"))
    $("#createAffForm").submit(onformsubmit)
})