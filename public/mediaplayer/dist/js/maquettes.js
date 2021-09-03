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

      //html += "<td class='text-end'><span class='dropdown'><button class='btn dropdown-toggle align-text-top' data-bs-boundary='viewport' data-bs-toggle='dropdown'>Actions</button><div class='dropdown-menu dropdown-menu-end'><a class='dropdown-item' href='#'  onclick='deleteMaq(" + json[i].idMaquette + ")'>Supprimer</a><a class='dropdown-item' href='#' onclick='editMaq(" + json[i].idMaquette + ")'>Modifier</a><a class='dropdown-item' href='#' onclick='detailMaq(" + json[i].idMaquette + ")'>Details</a></div></span></td>"
      //html += '</tr>';
    }
    //const addd = '<tr><td></td><td></td><td></td><td></td><td></td></tr>'
    //html += addd + addd + addd + addd
    $('#usersTable').append(html);
  }
}

function deleteMaq(id) {
  $.ajax({
    url: 'http://localhost:5000/api/v1/maquettes/' + id,
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

