var video = document.querySelector("#webcam-video");

const constraints = {
  audio: false,
  //video: true
  video: { width: 1920, height: 1080 }
};

function getStream(idn) {
  var constr = constraints

  if (navigator.mediaDevices.getUserMedia) {
    if (deviceIds != undefined)
      constr.video.deviceId = { exact: deviceIds[idn] }
    const myPromise = navigator.mediaDevices.getUserMedia(constr)
    myPromise.then(function (stream) {
      video.srcObject = stream;
    })
      .catch(function (err0r) {
        console.error("Something went wrong!" + err0r);
      });
  }
}
var deviceIds;
navigator.mediaDevices.getUserMedia(constraints)
navigator.mediaDevices.enumerateDevices()
  .then(function (devices) {
    deviceIds = devices.filter(d => d.kind === "videoinput").map(d => d.deviceId);
  })
  .catch(function (err) {
    console.error(err)
  });

$(function () {
  getStream(0)
  var current = 0;
  $(".webcam-container").click(function () {
    current++
    current = current % 3
    getStream(current)
  });
})

