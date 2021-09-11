const url_origin = window.location.origin
var clid = localStorage.clid
const affId = localStorage.affId

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

async function parse_maquette(data) {
    var json = JSON.parse(await data);
    console.log(clid)
    for (var i = 0; i < json.length; ++i) {
        if (json[0].Client_idClient == clid) {
            $("#maquetteSelect").append(new Option(json[i].label, json[i].idMaquette));
        }
    }
    $("#lienPrefix").text(window.location.host + "/affichage/" + json[0].Client_idClient + "/")
}

async function parse_affichage(data) {
    affichage = JSON.parse(await data);
    if (affichage[0]) {
        $("#label").val(affichage[0].label)
        $("#long").val(affichage[0].longueur)
        $("#larg").val(affichage[0].largeur)
        $("#lien").val(affichage[0].lien)
        $("#maquetteSelect").val(affichage[0].Maquette_idMaquette)
    }
}

async function render() {
    const url = auth == 2 ? url_origin + "/api/v1/maquettes/" : url_origin + "/api/v1/maquettes/client/id/"
    await parse_maquette(doAjaxGet(url))
    parse_affichage(doAjaxGet(url_origin + "/api/v1/affichages/" + affId))
}

async function onformsubmit(e) {
    e.preventDefault();
    const new_affichage = { label: $("#label").val(), longueur: $("#long").val(), largeur: $("#larg").val(), lien: $("#lien").val(), Maquette_idMaquette: $("#maquetteSelect").val() }
    await doAjaxPutData(url_origin + "/api/v1/affichages/" + affId, new_affichage)
    window.open("./affichage.html", "_self")
}

$(function () {
    render()
    localStorage.removeItem('affId');
    localStorage.removeItem('clid');
    $("#createAffForm").submit(onformsubmit);
})


