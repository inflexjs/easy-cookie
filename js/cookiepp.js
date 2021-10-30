let cookieModal = document.querySelector('.modal');
let cookieAcceptBtn = document.querySelector('.modal__accept-btn');
let cookieCloseBtn = document.querySelector('.modal__close-btn');
let buttons = document.querySelectorAll('.button');
let leftBtn = document.querySelector('.left-modal');
let rightBtn = document.querySelector('.right-modal');
let mainWindow = document.querySelector('.main');

let isMobile =
	/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(
		navigator.userAgent
	);

if (isMobile && window.innerWidth <= 620) {
	const disabledText = document.createElement('p');

	leftBtn.disabled = true;
	rightBtn.disabled = true;

	disabledText.textContent =
		'*Некоторые кнопки не доступны на мобильной версии';
	disabledText.style.color = '#979797';
	disabledText.style.fontSize = '14px';
	disabledText.style.textAlign = 'center';
	disabledText.style.marginTop = '30px';
	disabledText.style.padding = '0 25px';

	mainWindow.appendChild(disabledText);
}

// let showCookie = function () {
// 	cookieModal.classList.add('cookie-bottom--active');
// 	cookieModal.classList.add('cookie-bottom');
// };

// window.onload = function () {
// 	setTimeout(showCookie, 1000);
// };

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

		function hideModal() {
			for (let d = 0; d < active.length; d++) {
				cookieModal.classList.remove(active[d]);
				cookieModal.classList.remove(position[d]);
				cookieModal.classList.remove(accepted[d]);
			}

			cookieModal.classList.add(accepted[i]);
			cookieModal.classList.add(active[i]);
			cookieModal.classList.add(position[i]);

			buttons.forEach((i) => i.classList.remove('button--current'));
		}

		for (let a = 0; a < buttons.length; a++) {
			cookieModal.classList.remove(active[a]);
			cookieModal.classList.remove(position[a]);
			cookieModal.classList.remove(accepted[a]);
			cookieModal.classList.remove('hidden');
		}

		buttons[i].classList.toggle('button--current');
		cookieModal.classList.add(active[i]);
		cookieModal.classList.add(position[i]);

		if (isMobile) {
			cookieModal.classList.add('modal-mobile');
		}

		cookieAcceptBtn.addEventListener('click', () => {
			hideModal();
		});

		cookieCloseBtn.addEventListener('click', () => {
			hideModal();
		});
	});
}
