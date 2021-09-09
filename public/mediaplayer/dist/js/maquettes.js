const url_origin = window.location.origin

async function doAjaxGet(url) {
  return $.ajax({
    url: url,
    dataType: "text",
  });
}

function parse_maquette(data) {
  $("#userTableCont").show();
  const json = JSON.parse(data);
  if (json.length) {
    var html = "<thead><tr><td>id</td><td>Label</td><td>Grid Colonnes</td><td>Nombre de Colonne</td><td> </td></thead></tr>";
    for (var i = 0; i < json.length; ++i) {
      html += '<tr>';
      $.each(json[i], function (key, value) {
        if (!value)
          html += '<td></td>';
        else if (key != "Client_idClient")
          html += '<td>' + value + '</td>';
      });
      html += "<td class='text-end'><a href='#' class='btn btn - white' onclick='deleteMaq(" + json[i].idMaquette + ")'>Supprimer</a>"
      html += "<a href='#' class='btn btn - white' onclick='editMaq(" + json[i].idMaquette + ")'>Modifier</a>"
      html += "<a href='#' class='btn btn - white' onclick='detailMaq(" + json[i].idMaquette + ")'>Details</a></td></tr>"
    }
    $('#usersTable').append(html);
  }
}

function deleteMaq(id) {
  $.ajax({
    url: url_origin + '/api/v1/maquettes/' + id,
    type: 'DELETE',
  }).done(function (maqId) {
    location.reload()
  })
}

function editMaq(id) {
  localStorage.maqId = id
  window.open("./editMaq.html");
}

function detailMaq(id) {
  localStorage.maqId = id
  window.open("./detailMaq.html");
}

$(function () {

  $("#userTableCont").hide();
  $("#usernameH2").text(localStorage.username)

  var url = url_origin + "/api/v1/maquettes/client/id"

  if (auth == 2)
    url = url_origin + "/api/v1/maquettes/"

  doAjaxGet(url).then((data) => parse_maquette(data))

})

