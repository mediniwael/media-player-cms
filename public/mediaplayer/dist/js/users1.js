const url_origin = window.location.origin
var clientid = 0
const userid = localStorage.userid

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
async function doAjaxDelete(url) {
  return $.ajax({
    url: url,
    type: 'DELETE',
  })
}

function parse_users(data) {
  const json = JSON.parse(data);
  var admin_arr = [], user_arr = [], unaff_arr = []
  for (let i = 0; i < json.length; ++i) {
    if (json[i].admin == '0')
      user_arr.push(json[i])
    if (json[i].admin == '1')
      admin_arr.push(json[i])
    if (json[i].admin == '9')
      unaff_arr.push(json[i])
  }

  if (user_arr.length) {
    $("#userTableCont").show();
    let html = "<thead><tr><td>idUser</td><td>username</td><td>email</td><td></td></tr></thead>";
    for (let i = 0; i < user_arr.length; ++i) {
      html += '<tr><td>' + user_arr[i].idUser + '</td><td>' + user_arr[i].username + '</td><td>' + user_arr[i].email + '</td>';
      html += "<td class='text-end'><a href='#' class='btn btn - white' onclick=\"removeuser(" + user_arr[i].idUser + ")\">Supprimer du Client</a>"
      html += "<a href='#' class='btn btn - white' onclick=\"grantadmin(" + user_arr[i].idUser + ")\">Accorder admin</a></td></tr>"
    }
    $('#usersTable').append(html);
  }
  if (admin_arr.length) {
    clientid = admin_arr[0].Client_idClient
    $("#adminTableCont").show();
    let html = "<thead><tr><td>idUser</td><td>username</td><td>email</td><td></td></tr></thead>";
    for (let i = 0; i < admin_arr.length; ++i) {
      html += '<tr><td>' + admin_arr[i].idUser + '</td><td>' + admin_arr[i].username + '</td><td>' + admin_arr[i].email + '</td>';
      if (admin_arr[i].idUser == userid) {
        html += "<td class='text-end'>Utilisateur Courant</td>"
      } else {
        html += "<td class='text-end'><a href='#' class='btn btn - white' onclick=\"removeuser(" + admin_arr[i].idUser + ")\">Supprimer du Client</a>"
        html += "<a href='#' class='btn btn - white' onclick=\"revokeadmin(" + admin_arr[i].idUser + ")\">Révoquer admin</a></td></tr>"
      }
    }
    $('#adminTable').append(html);
  }
  if (unaff_arr.length) {
    $("#unaffTableCont").show();
    let html = "<thead><tr><td>idUser</td><td>username</td><td>email</td><td></td></tr></thead>";
    for (let i = 0; i < unaff_arr.length; ++i) {
      html += '<tr><td>' + unaff_arr[i].idUser + '</td><td>' + unaff_arr[i].username + '</td><td>' + unaff_arr[i].email + '</td>';
      html += "<td class='text-end'><a href='#' class='btn btn - white' onclick=\"adduser9(" + unaff_arr[i].idUser + ")\">Ajouter au Client</a> "
      html += "<a href='#' class='btn btn - white' onclick=\"addadmin9(" + unaff_arr[i].idUser + ")\">Ajouter comme admin</a></td></tr>"
    }
    $('#unaffTable').append(html);
  }

}

function parse_demandes(data) {
  const json = JSON.parse(data);
  if (json[0]) {
    $("#demandeTableCont").show();
    let html = "<thead><tr><td>id</td><td>Date</td><td>username</td><td>email</td><td></td></tr></thead>";
    for (let index = 0; index < json.length; index++) {
      const element = json[index];
      html += '<tr><td>' + element.idDemande + '</td><td>' + (new Date(element.create_time)).toLocaleString() + '</td><td>' + element.username + '</td><td>' + element.email + '</td>'
      html += "<td class='text-end'><a href='#' class='btn btn - white' onclick=\"adduser9d(" + element.idUser + ")\">Ajouter au Client</a> "
      html += "<a href='#' class='btn btn - white' onclick=\"addadmin9d(" + element.idUser + ")\">Ajouter comme admin</a>"
      html += "<a href='#' class='btn btn - white' onclick=\"deletedemande(" + element.idUser + ")\">Supprimer la demande</a></td></tr>"
    }
    console.log(html)
    $('#demandeTable').append(html);
  }

}

async function removeuser(id) {
  if (userid != id) {
    const user = { admin: 9 }
    await Promise.all([doAjaxPutData(url_origin + "/api/v1/users/admin/" + id, user), doAjaxPutData(url_origin + "/api/v1/users/client/setNull/" + id, user)])
    window.location.reload()
  }
}

async function deletedemande(id) {
  await doAjaxDelete(url_origin + "/api/v1/demandes/" + id)
  window.location.reload()
}

async function revokeadmin(id) {
  if (userid != id) {
    const user = { admin: 0 }
    await doAjaxPutData(url_origin + "/api/v1/users/admin/" + id, user)
    window.location.reload()
  }
}

async function grantadmin(id) {
  if (userid != id) {
    const user = { admin: 1 }
    await doAjaxPutData(url_origin + "/api/v1/users/admin/" + id, user)
    window.location.reload()
  }
}

async function adduser9(id) {
  if (userid != id) {
    const user = { Client_idClient: clientid, admin: 0 }
    await Promise.all([doAjaxPutData(url_origin + "/api/v1/users/admin/" + id, user), doAjaxPutData(url_origin + "/api/v1/users/client/" + id, user)])
    window.location.reload()
  }
}

async function addadmin9(id) {
  if (userid != id) {
    const user = { Client_idClient: clientid, admin: 1 }
    await Promise.all([doAjaxPutData(url_origin + "/api/v1/users/admin/" + id, user), doAjaxPutData(url_origin + "/api/v1/users/client/" + id, user)])
    window.location.reload()
  }
}

function adduser9d(id) {
  adduser9(id)
  deletedemande(id)
}

function addadmin9d(id) {
  addadmin9(id)
  deletedemande(id)
}

async function render() {
  const data1 = doAjaxGet(url_origin + "/api/v1/users/cl/un/")
  const data2 = doAjaxGet(url_origin + "/api/v1/demandes/" + clientid)
  parse_users(await data1)
  parse_demandes(await data2)
}

$(function () {
  $("#adminTableCont").hide();
  $("#userTableCont").hide();
  $("#unaffTableCont").hide();
  $("#demandeTableCont").hide();

  $("#usernameH2").text(localStorage.username)

  render()

})
