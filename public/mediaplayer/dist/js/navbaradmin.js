const auth = localStorage.auth

$(function () {
    console.log("auth " + auth)
    $(".adminnavitem").hide();
    $(".admin" + auth).show();

})