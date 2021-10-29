let modalCookie = document.querySelector('.modal');
let cookieAcceptBtn = document.querySelector('.cookie__btn');
let leftModal = document.querySelector('.left-modal');
let topModal = document.querySelector('.top-modal');
let bottomModal = document.querySelector('.bottom-modal');
let rigthModal = document.querySelector('.right-modal');
let buttons = document.querySelectorAll('.button');

let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)
// let showCookie = function () {
// 	modalCookie.classList.add('cookie-bottom--active');
// };

// window.onload = function () {
// 	setTimeout(showCookie, 1000);
// };

// cookieAcceptBtn.addEventListener('click', () => {
// 	modalCookie.classList.add('cookie-bottom--accepted');
// 	modalCookie.classList.remove('ccookie-bottom--active');

// 	// function removeCookieBanner() {
// 	// 	modalCookie.remove();
// 	// }

// 	// setTimeout(removeCookieBanner, 1500);
// });

for (let i = 0; i < buttons.length; i++) {
	let active = [
		'cookie-left--active',
		'cookie-top--active',
		'cookie-bottom--active',
		'cookie-right--active',
	];

	let position = ['cookie-left', 'cookie-top', 'cookie-bottom', 'cookie-right'];

	let accepted = [
		'cookie-left--accepted',
		'cookie-top--accepted',
		'cookie-bottom--accepted',
		'cookie-right--accepted',
	];

	buttons[i].addEventListener('click', function () {
		buttons.forEach((i) => i.classList.remove('button--current'));

		for (let a = 0; a < buttons.length; a++) {
			modalCookie.classList.remove(active[a]);
			modalCookie.classList.remove(position[a]);
			modalCookie.classList.remove(accepted[a]);
		}

		buttons[i].classList.toggle('button--current');
		modalCookie.classList.add(active[i]);
		modalCookie.classList.add(position[i]);

		cookieAcceptBtn.addEventListener('click', () => {
			for (let d = 0; d < active.length; d++) {
				modalCookie.classList.remove(active[d]);
				modalCookie.classList.remove(position[d]);
				modalCookie.classList.remove(accepted[d]);
			}

			modalCookie.classList.add(accepted[i]);
			modalCookie.classList.add(active[i]);
			modalCookie.classList.add(position[i]);

			function removeActive() {
				modalCookie.classList.remove(accepted[i]);
				modalCookie.classList.remove(position[i]);
				modalCookie.classList.remove(active[i]);
			}

			if (window.innerHeight <= 1000) {
				setTimeout(removeActive, 400);
				console.log('mobile')
			} else {
				setTimeout(removeActive, 300);
				console.log('pc')
			}

			buttons.forEach((i) => i.classList.remove('button--current'));
		});
	});
}

// for (let button of buttons) {
// 	button.addEventListener('click', function () {
// 		buttons.forEach((i) => i.classList.remove('button--current'));

// 		button.classList.toggle('button--current');
// 		for
// 		if (buttons[button] == 'bottom-modal') {
// 			modalCookie.classList.add('cookie-bottom--active');
// 		}
// 	});
// }
