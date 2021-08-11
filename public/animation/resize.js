var resised = false
var resizeTimer = 100

function updateLayout() {
  var wdth = screen.width
  var hght = screen.height
  var gridWdth = wdth / 3
  var gridWdthextra = wdth % 3 == 0 ? gridWdth : gridWdth + 3 - wdth % 3
  var marglft = (gridWdth / hght) > 16 / 9 ? 0 : -(((hght / 9) * 16) - gridWdth) / 2
  var margtop = (gridWdth / hght) > 16 / 9 ? -((9 / 16) * gridWdth - hght) / 2 : 0
  var grid_columns = gridWdth + "px " + gridWdth + "px " + gridWdth + "px"
  var videoH = (gridWdth / hght) > 16 / 9 ? gridWdthextra * (9 / 16) : hght
  var videoW = (gridWdth / hght) > 16 / 9 ? gridWdthextra : hght * (16 / 9)

  $("body").height(hght)
  $("body").width(wdth)
  $("video").css({ "margin-left": marglft, "margin-top": margtop })
  $("video").height(videoH)
  $("video").width(videoW)
  $("iframe").height(videoH)
  $("iframe").width(videoW)
  $(".container-grid").css({ "grid-template-columns": grid_columns, "grid-template-rows": hght + "px" })
  $("#video-left-div").css("overflow", "hidden")
  $("#video-right-div").css("overflow", "hidden")
  $(".webcam-container").css("overflow", "hidden")
}

function checkSize() {
  if (resised) {
    resised = false
    updateLayout()
  } else {
    resizeTimer = resizeTimer > 2000 ? resizeTimer : resizeTimer + 100
  }
  setTimeout(checkSize, resizeTimer);
}

$(function () {
  updateLayout()
  $(window).resize(function () {
    resizeTimer = 100
    resised = true
  }
  )
  checkSize()
});