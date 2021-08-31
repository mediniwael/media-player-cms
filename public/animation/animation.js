var url = window.location.href
var params = (new URL(url)).searchParams;
var anime1 = "../resources/animation/screensaver.best/"+params.get('anime1')+'.html'
var anime2 = "../resources/animation/screensaver.best/"+params.get('anime2')+'.html'
var left = document.querySelector("#left-animation");
var right = document.querySelector("#right-animation");
left.src = anime1
right.src = anime2