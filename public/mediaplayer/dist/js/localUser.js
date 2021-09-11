const url_origin = window.location.origin

async function doAjaxGet(url) {
    return $.ajax({
        url: url,
        dataType: "text",
    });
}

async function doAjaxPostData(url, data) {
    return $.post(url, data)
}

async function parse_isAuth(data) {
    const auth = JSON.parse(await data)
    localStorage.auth = auth.auth
    localStorage.userid = auth.userid
    window.location = '/mediaplayer/'
}

async function onformsubmit(e) {
    e.preventDefault();
    await doAjaxPostData(url_origin + "/api/login", { username: $("#username").val(), password: $("#password").val() })
    localStorage.username = $("#username").val();
    parse_isAuth(doAjaxGet(url_origin + "/api/isAuth"))
}


$("#loginForm").submit(onformsubmit)
