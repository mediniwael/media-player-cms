const url_origin = window.location.origin

async function doAjaxGet(url) {
    return $.ajax({
        url: url,
        dataType: "text",
    });
}

function logout() {
    localStorage.clear()

    var allCookies = document.cookie.split(';');
    console.log(allCookies);
    for (var i = 0; i < allCookies.length; i++)
        document.cookie = allCookies[i] + "=;expires=" + new Date(0).toUTCString();

    doAjaxGet(url_origin + "/api/logout").then(() => window.location = url_origin + "/mediaplayer/sign-in.html")
}