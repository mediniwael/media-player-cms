const url_origin = window.location.origin

function deletePlay(id) {
  $.ajax({
    url: window.location.origin + '/api/v1/playlists/' + id,
    type: 'DELETE',
  }).done(function (playId) {
    location.reload()
  })
}

function editPlay(id) {
  localStorage.playId = id
  window.open("./editPlaylist.html");
}


function detailPlay(id) {
  localStorage.playId = id
  window.open("./detailPlay.html");
}

async function doAjaxGet(url) {
  return $.ajax({
    url: url,
    dataType: "text",
  });
}

function parse_playlists(data) {
  $("#playlist_table").show();
  const json = JSON.parse(data);
  var html = "<thead><tr><td>id</td><td>Label</td><td></td></tr></thead>";
  for (var i = 0; i < json.length; ++i) {
    if (json[i].userCreated == "Yes") {
      html += '<tr>';
      $.each(json[i], function (key, value) {
        if (!value)
          html += '<td></td>';
        else if (key == "label" || key == "idPlaylist")
          html += '<td>' + value + '</td>';
      });
      html += "<td class='text-end'><span class='dropdown'><button class='btn dropdown-toggle align-text-top' data-bs-boundary='viewport' data-bs-toggle='dropdown'>Actions</button><div class='dropdown-menu dropdown-menu-end'><a class='dropdown-item' href='#'  onclick='deletePlay(" + json[i].idPlaylist + ")'>Supprimer</a><a class='dropdown-item' href='#' onclick='editPlay(" + json[i].idPlaylist + ")'>Modifier</a><a class='dropdown-item' href='#' onclick='detailPlay(" + json[i].idPlaylist + ")'>Details</a></div></span></td>"
      html += '</tr>';
    }
  }
  const addd = '<tr><td></td><td></td><td></td></tr>'
  html += addd + addd + addd + addd
  $('#playlist_table').append(html);
}

$(function () {
  $("#playlist_table").hide();
  //$("#usernameH2").text(localStorage.username)
  var url = url_origin + "/api/v1/playlists/client/pl/"

  if (auth == 2)
    url = url_origin + "/api/v1/playlists/"

  doAjaxGet(url).then((data) => parse_playlists(data))
})

