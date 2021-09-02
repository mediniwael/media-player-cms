const url_origin = window.location.origin
const userid = localStorage.userid
var currDemande = 0

async function doAjaxGet(url) {
  return $.ajax({
    url: url,
    dataType: "text",
  });
}

async function doAjaxPostData(url, data) {
  return $.post(url, data)
}

async function doAjaxDelete(url) {
  return $.ajax({
    url: url,
    type: 'DELETE',
  })
}

function parse_users(data) {
  $("#userTableCont").show();

  const json = JSON.parse(data);

  let html = "<thead><tr><td>id</td><td>username</td><td>email</td><td>Date de Creation</td><td>Privilege</td><td>Nom du Client</td><td></td></tr></thead>";
  for (var i = 0; i < json.length; ++i) {

    html += '<tr>';
    $.each(json[i], function (key, value) {
      if (!value && key != "admin" && key != "Client_idClient" && key != "idClient")
        html += '<td></td>';
      else if (key == "admin" && value == "1")
        html += '<td>Administrateur du Client</td>';
      else if (key == "admin" && value == "0")
        html += '<td>Utilisateure Normal</td>';
      else if (key == "admin" && value == "2")
        html += '<td>Administrateur du site</td>';
      else if (key == "admin" && value == "9")
        html += '<td>Utilisateure non affecter</td>';
      else if (key == "create_time")
        html += '<td>' + (new Date(value)).toLocaleString() + '</td>';
      else if (!(key == "salt" || key == "password" || key == "Client_idClient" || key == "idClient"))
        html += '<td>' + value + '</td>';
    });
    html += "<td class='text-end'><a href='#' class='btn btn - white' onclick=\"deleteuser(" + json[i].idUser + ")\">Supprimer</a > </td>"

    html += '</tr>';
  }
  $('#usersTable').append(html);
}

function parse_clients(data) {
  $("#userTableCont").show();
  const json = JSON.parse(data);
  let html = "<thead><tr><td>Nom du Client</td><td></td></thead>";
  for (var i = 0; i < json.length; ++i) {
    html += "<tr><td>" + json[i].nom + "</td><td class='text-end' ><a href='#' id='dbutt" + json[i].idClient + "' class='btn btn-white deletedemande' onclick=\"deleteDemande(" + json[i].idClient + ")\">Supprimer la Demande</a><a href='#' id='butt" + json[i].idClient + "' class='btn btn-white' onclick=\"sendDemande(" + json[i].idClient + ")\">Demander affectation</a> </td>"


  }
  $('#usersTable').append(html);
}

function sendDemande(id) {
  if (id != currDemande) {
    const url = url_origin + "/api/v1/demandes/"
    doAjaxDelete(url + userid)
      .then(() => {
        doAjaxPostData(url, { Client_idClient: id, User_idUser: userid })
          .then(console.log)
      });

    enable_button(currDemande)
    currDemande = id
    disable_button(currDemande)
  }
}
function deleteDemande(id) {
  if (id == currDemande) {
    const url = url_origin + "/api/v1/demandes/"
    doAjaxDelete(url + userid)

    enable_button(currDemande)
    currDemande = 0
  }
}

function disable_button(i) {
  $("#butt" + i).text("Demander envoyé")
  $("#butt" + i).addClass('disabled');
  $("#dbutt" + i).show();
}

function enable_button(i) {
  $("#butt" + i).text("Demander affectation")
  $("#butt" + i).removeClass('disabled');
  $("#dbutt" + i).hide();
}


$(function () {
  $("#userTableCont").hide();
  $("#usernameH2").text(localStorage.username)
  doAjaxGet(url_origin + "/api/v1/demandes/user/id/" + userid).then((data1) => {
    const json = JSON.parse(data1)
    if (json[0])
      currDemande = json[0].Client_idClient
  }).then(() => {
    doAjaxGet(url_origin + "/api/v1/clients/")
      .then(parse_clients)
      .then(() => {
        $(".deletedemande").hide();
        disable_button(currDemande)
      })
  })


})
