var deviceIds;
navigator.mediaDevices.enumerateDevices()
    .then((devices) => {
        deviceIds = devices.filter(d => d.kind === "videoinput")
            .map(d => d.deviceId);
    })
