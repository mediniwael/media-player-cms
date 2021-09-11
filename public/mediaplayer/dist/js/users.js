const url_origin = window.location.origin
const userid = localStorage.userid

async function doAjaxGet(url) {
  return $.ajax({
    url: url,
    dataType: "text",
  });
}

async function doAjaxDelete(url) {
  return $.ajax({
    url: url,
    type: 'DELETE',
  })
}

async function parse_users(data) {
  $("#userTableCont").show();

  const json = JSON.parse(await data);

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
    if (userid == json[i].idUser)
      html += "<td class='text-end'>Utilisateur Courant</td>"
    else
      html += "<td class='text-end'><a href='#' class='btn btn - white' onclick=\"deleteuser(" + json[i].idUser + ")\">Supprimer</a > </td>"

    html += '</tr>';
  }
  $('#usersTable').append(html);
}

async function deleteuser(id) {
  await doAjaxDelete(url_origin + "/api/v1/users/" + id)
  window.location.reload()
}

$(function () {
  $("#userTableCont").hide();
  $("#usernameH2").text(localStorage.username)

  parse_users(doAjaxGet(url_origin + "/api/v1/users/"))
})
