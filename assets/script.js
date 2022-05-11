window.onload = function () {
	fetch('assets/pets.json').then((response) => {
		return response.json();
	}).then((data) => {
		const PETS = [...data];
		function createCard(img_src, pets_name) {
			const div = document.createElement('div'); //Создаёт новый элемент с заданным тегом
			div.classList.add('card'); //Добавляет елементу класс
			const photo = document.createElement('img');
			photo.src = img_src;
			const description = document.createElement('h1');
			description.classList.add('card__name');
			description.textContent = pets_name;
			const button = document.createElement('button');
			button.classList.add('card__button');
			button.textContent = "Learn more";
			div.append(photo);
			div.append(description);
			div.append(button);
			return div;
		}

		PETS.forEach(function (element) {
			const card = createCard(cutWay(element.img), element.name);
			document.querySelector('.container').appendChild(card); // Чтобы наш div появился, нам нужно вставить его где-нибудь
		});

		function cutWay(imageSrc) {
			return imageSrc.replace('../../', '');
		}
	})
}


