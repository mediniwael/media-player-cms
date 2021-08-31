const url_origin = window.location.origin

async function doAjaxGet(url) {
  return $.ajax({
    url: url,
    dataType: "text",
  });
}

function parse_users(data) {
  $("#userTableCont").show();

  const json = JSON.parse(data);

  var html = "";
  for (var i = 0; i < json.length; ++i) {
    if (i === 0) {
      html += '<thead><tr>';
      $.each(json[i], function (key, value) {
        if (key == "admin")
          html += '<td>' + 'Client Admin?' + '</td>';
        else if (!(key == "salt" || key == "password"))
          html += '<td>' + key + '</td>';
      });
      html += '<td></td>';
      html += '</thead></tr>';
    }

    html += '<tr>';
    $.each(json[i], function (key, value) {
      if (!value && key != "admin")
        html += '<td></td>';
      else if (key == "admin" && value == "1")
        html += '<td>' + 'Yes' + '</td>';
      else if (key == "admin" && value == "0")
        html += '<td>' + 'No' + '</td>';
      else if (key == "admin" && value == "2")
        html += '<td>' + 'Site Admin' + '</td>';
      else if (!(key == "salt" || key == "password"))
        html += '<td>' + value + '</td>';
    });
    html += "<td class='text-end'><span class='dropdown'><button class='btn dropdown-toggle align-text-top' data-bs-boundary='viewport' data-bs-toggle='dropdown'>Actions</button><div class='dropdown-menu dropdown-menu-end'><a class='dropdown-item' href='#'>Action</a><a class='dropdown-item' href='#'>Another action</a></div></span></td>"

    html += '</tr>';
  }
  html += '<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>'
  $('#usersTable').append(html);
}

$(function () {
  $("#userTableCont").hide();
  $("#usernameH2").text(localStorage.username)

  doAjaxGet(url_origin + "/api/v1/users/").then((data) => parse_users(data))
})
