import { burgerOpen, burgerClose } from './js-components/burger';

burgerOpen();
burgerClose();

const addGame = document.querySelector('#addGame');
const gameName = document.querySelector('#name');

console.log(gameName);

addGame.addEventListener('click', async () => {
	const response = await fetch('./dist/*.json', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			title: gameName,
		}),
	});

	const data = await response.json();
	console.log(data);
});
