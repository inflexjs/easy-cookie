let modalCookieBottom = document.querySelector(".modal__cookie-bottom")


let showCookie = function() {
	modalCookieBottom.classList.add("modal__cookie-bottom-active")
}


window.onload = function() {
	setTimeout(showCookie, 3000)
}
