const url_origin = window.location.origin

async function doAjaxPostData(url, data) {
    return $.post(url, data)
}

async function onformsubmit(e) {
    try {
        e.preventDefault();
        var user = { password: $("#password").val(), username: $("#username").val(), email: $("#email").val() }
        if (isNewClient)
            user.clientName = $("#cln").val()

        await doAjaxPostData(url_origin + "/api/register", user);
        window.location = url_origin + "/mediaplayer/sign-in.html";
    } catch (error) {
        window.location.reload()
    }
}

$(function () {
    var isNewClient = false

    $("#cln").toggle();
    $("#clnl").toggle();
    $('#chk').click(function () {
        $("#cln").toggle(this.checked);
        $("#clnl").toggle(this.checked);
        isNewClient = !isNewClient
    });

    $("#signupform").submit(onformsubmit);

})