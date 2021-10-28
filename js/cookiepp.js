let modalCookieBottom = document.querySelector('.modal__cookie-bottom');
let cookieAcceptBtn = document.querySelector('.cookie__btn');

let showCookie = function () {
	modalCookieBottom.classList.add('modal__cookie-bottom-active');
};

window.onload = function () {
	setTimeout(showCookie, 1000);
};

cookieAcceptBtn.addEventListener('click', () => {
	modalCookieBottom.classList.add('modal__cookie-bottom-accepted');
	modalCookieBottom.classList.remove('modal__cookie-bottom-active');

	function removeCookieBanner() {
		modalCookieBottom.remove();
	}

	setTimeout(removeCookieBanner, 1500);
});
