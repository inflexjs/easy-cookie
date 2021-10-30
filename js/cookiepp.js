let cookieModal = document.querySelector('.modal');
let cookieAcceptBtn = document.querySelector('.modal__accept-btn');
let cookieCloseBtn = document.querySelector('.modal__close-btn');
let cookieCleareBtn = document.querySelector('.clear-cookie');
let cookieStatusText = document.querySelector('.cookie-status');
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

if (window.innerWidth <= 400) {
	cookieStatusText.textContent = '<br> Привет';
}

function setCookie(name, value, days) {
	var expires = '';
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
		expires = '; expires=' + date.toUTCString();
	}
	document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

function getCookie(name) {
	var nameEQ = name + '=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}

function deleteCookie(name) {
	setCookie(name, '', {
		'max-age': -1,
	});
}

// let showCookie = function () {
// 	cookieModal.classList.add('cookie-bottom--active');
// 	cookieModal.classList.add('cookie-bottom');
// };

let cookieStatus = getCookie('easycookie');

if (cookieStatus) {
	cookieStatusText.textContent = 'accepted';
	cookieStatusText.classList.add('accepted');
} else {
	cookieStatusText.classList.add('none');
	cookieStatusText.textContent = 'none';
}

cookieCleareBtn.addEventListener('click', () => {
	deleteCookie('easycookie');
	cookieStatusText.classList.add('none');
	cookieStatusText.textContent = 'none';
	window.location.reload();
});

for (let i = 0; i < buttons.length; i++) {
	let position = ['cookie-left', 'cookie-top', 'cookie-bottom', 'cookie-right'];

	let active = [
		'cookie-left--active',
		'cookie-top--active',
		'cookie-bottom--active',
		'cookie-right--active',
	];

	let accepted = [
		'cookie-left--accepted',
		'cookie-top--accepted',
		'cookie-bottom--accepted',
		'cookie-right--accepted',
	];

	buttons[i].addEventListener('click', function () {
		buttons.forEach((i) => i.classList.remove('button--current'));

		cookieStatusText.classList.remove('skipped');
		cookieStatusText.classList.remove('accepted');
		cookieStatusText.classList.add('none');
		cookieStatusText.textContent = 'none';

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

		cookieAcceptBtn.addEventListener('click', () => {
			hideModal();
			setCookie('easycookie', 'testeasycookie', 3);
			cookieStatusText.textContent = 'accepted';
			cookieStatusText.classList.remove('none');
			cookieStatusText.classList.add('accepted');
		});

		cookieCloseBtn.addEventListener('click', () => {
			hideModal();
			cookieStatusText.textContent = 'skipped';
			cookieStatusText.classList.remove('none');
			cookieStatusText.classList.add('skipped');
		});
	});
}
