
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

    doAjaxGet(window.location.origin + "/api/logout").then(() => window.location = window.location.origin + "/mediaplayer/sign-in.html")
}