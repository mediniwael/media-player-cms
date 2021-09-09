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

function parse_isAuth(data) {
    const auth = JSON.parse(data)
    localStorage.auth = auth.auth
    localStorage.userid = auth.userid
    window.location = '/mediaplayer/'
}

$(function () {
    $("#loginForm").submit(function (e) {
        e.preventDefault();

        doAjaxPostData(url_origin + "/api/login", { username: $("#username").val(), password: $("#password").val() })
            .then((data) => {
                localStorage.username = $("#username").val();

                doAjaxGet(url_origin + "/api/isAuth")
                    .then((data) => parse_isAuth(data))
            })
    })
})