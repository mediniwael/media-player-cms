var video = document.querySelector("#webcam-video");

const constraints = {
  audio: false,
  //video: true
  video: { width: 1920, height: 1080 }
};

function getStream(idn) {
  var constr = constraints
  
  if (navigator.mediaDevices.getUserMedia) {
    console.log(deviceIds != undefined)
    if(deviceIds != undefined)
    constr.video.deviceId = { exact: deviceIds[idn] }
    const myPromise = navigator.mediaDevices.getUserMedia(constr)
    myPromise.then(function (stream) {
      video.srcObject = stream;
    })
      .catch(function (err0r) {
        console.log("Something went wrong!" + err0r);
      });
  }
}
var deviceIds;
navigator.mediaDevices.getUserMedia(constraints)
navigator.mediaDevices.enumerateDevices()
  .then(function (devices) {
    devices.forEach(function (device) {
      if(device.kind === "videoinput")
        console.log(device.kind + ": " + device.label +
        " id = " + device.deviceId);
    });
    deviceIds = devices.filter(d => d.kind === "videoinput").map(d => d.deviceId);
    //console.log(deviceIds)
  })
  .catch(function (err) {
    console.log(err.name + ": " + err.message);
  });

$(function () {
  getStream(0)
  console.log(deviceIds)
  var current = 0;
  $(".webcam-container").click(function () {
    current++
    current = current % 3
    getStream(current)
    console.log(deviceIds[current])
  });
})

