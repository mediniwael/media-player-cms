var url = window.location.href
//console.log(url)
var params = (new URL(url)).searchParams;
var anime1 = "../resources/animation/screensaver.best/"+params.get('anime1')+'.html'
var anime2 = "../resources/animation/screensaver.best/"+params.get('anime2')+'.html'
//console.log("anime1 = "+anime1)
//console.log("anime2 = "+anime2)
var left = document.querySelector("#left-animation");
var right = document.querySelector("#right-animation");
left.src = anime1
right.src = anime2