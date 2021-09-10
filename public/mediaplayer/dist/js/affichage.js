const url_origin = window.location.origin

function deleteAff(id) {
  $.ajax({
    url: window.location.origin + '/api/v1/affichages/' + id,
    type: 'DELETE',
  }).done(function (id) {
    location.reload()
  })
}

function editAff(id, clid) {
  localStorage.affId = id
  localStorage.clid = clid
  window.open("./editAff.html");
}

function detailMaq(id) {
  localStorage.maqId = id
  window.open("./detailMaq.html");
}

async function doAjaxGet(url) {
  return $.ajax({
    url: url,
    dataType: "text",
  });
}

function parse_affichage(dataProm) {
  var lien = window.location.origin + "/affichage/"
  $("#userTableCont").show();
  const json = $.parseJSON(await dataProm);
  lien += json[0].Client_idClient + "/"
  var html = "<thead><tr><td>id</td><td>Label</td><td>Longuere</td><td>Largeure</td><td>Lien</td><td>Maquette Id</td><td> </td></thead></tr>";
  for (var i = 0; i < json.length; ++i) {
    html += '<tr>';
    $.each(json[i], function (key, value) {
      if (!value)
        html += '<td></td>';
      else if (value == "")
        html += '<td></td>';
      else if (key != "Client_idClient") {
        if (key == "Maquette_idMaquette")
          html += "<td><a href='#' onclick='detailMaq(" + value + ")'>" + value + '</a></td>';
        else if (key == "lien")
          html += "<td><a target='_blank' href='" + lien + value + "'>" + value + "</a></td>";
        else
          html += '<td>' + value + '</td>';
      }
    });
    html += "<td class='text-end'><a href='#' class='btn btn - white'  onclick='deleteAff(" + json[i].idAffichage + ")'>Supprimer</a>"
    html += "<a href='#' class='btn btn - white' onclick='editAff(" + json[i].idAffichage + "," + json[0].Client_idClient + ")'>Modifier</a></td></tr>"
  }
  $('#usersTable').append(html);
}

$(function () {
  $("#userTableCont").hide();
  $("#usernameH2").text(localStorage.username)

  const url = auth == 2 ? url_origin + "/api/v1/affichages/" : url_origin + "/api/v1/affichages/client/id"

  parse_affichage(doAjaxGet(url))

})