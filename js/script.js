'use strict';

const filterBox = document.querySelectorAll('.box');
const nav = document.querySelector('.nav__list');
const navBox = document.querySelectorAll('.nav__item');

if (window.location.hash) {
	const hash = window.location.hash.slice(1);

	filterElements(hash);
}

nav.addEventListener('click', (event) => {
	const clickedElement = event.target;

	if (!clickedElement.classList.contains('nav__item')) {
		return;
	}

	const filterItem = clickedElement.dataset.filter;
	filterElements(filterItem);

	window.location.hash = filterItem;
});

function filterElements(filterItem) {
	filterBox.forEach((item) => {
		item.classList.remove('hidden');

		if (!item.classList.contains(filterItem) && filterItem !== 'all') {
			item.classList.add('hidden');
		}
	});

	navigationActive(filterItem);
}

function navigationActive(filterItem) {
	navBox.forEach((item) => {
		item.classList.remove('active');
	});

	const active = document.querySelector(`[data-filter="${filterItem}"]`);
	active.classList.add('active');
}
