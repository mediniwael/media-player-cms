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

async function parse_playlists(data) {
  $("#playlist_table").show();
  const json = JSON.parse(await data);
  if (json[0])
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

      html += "<td class='text-end'><a href='#' class='btn btn - white' onclick='deletePlay(" + json[i].idPlaylist + ")'>Supprimer</a>"
      html += "<a href='#' class='btn btn - white' onclick='editPlay(" + json[i].idPlaylist + ")'>Modifier</a>"
      html += "<a href='#' class='btn btn - white' onclick='detailPlay(" + json[i].idPlaylist + ")'>Details</a></td></tr>"
    }
  }
  $('#playlist_table').append(html);
}

$(function () {
  $("#playlist_table").hide();
  var url = auth == 2 ? url_origin + "/api/v1/playlists/" : url_origin + "/api/v1/playlists/client/pl/"

  parse_playlists(doAjaxGet(url))
})

