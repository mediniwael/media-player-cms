const url_origin = window.location.origin

async function doAjaxPostData(url, data) {
    return $.post(url, data)
}

$(function () {
    var isNewClient = false

    $("#cln").toggle();
    $('#chk').click(function () {
        $("#cln").toggle(this.checked);
        isNewClient = !isNewClient
    });

    $("#signupform").submit(function (e) {
        e.preventDefault();

        const user = { password: $("#password").val(), username: $("#username").val(), email: $("#email").val() }
        if (isNewClient)
            user.clientName = $("#cln").val()

        doAjaxPostData(url_origin + "/api/register", user)
            .then(() => window.location = url_origin + "/mediaplayer/sign-in.html")
            .catch(() => window.location.reload())

    });

})