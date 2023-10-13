
// Obtén la cantidad y los elementos de los botones de aumento y disminución
const quantityElement = document.querySelector('.buttons p');
const incrementButton = document.querySelector('.buttons button:nth-child(3)');
const decrementButton = document.querySelector('.buttons button:nth-child(1)');

// Agrega event listeners para los botones de aumento y disminución
incrementButton.addEventListener('click', incrementQuantity);
decrementButton.addEventListener('click', decrementQuantity);

// Función para actualizar el estado de los botones
function updateButtonState(quantity) {
	if (quantity === 1) {
		decrementButton.setAttribute('disabled', 'disabled');
		decrementButton.classList.remove('button-enabled');
		decrementButton.classList.add('button-disabled');
	} else {
		decrementButton.removeAttribute('disabled');
		decrementButton.classList.remove('button-disabled');
		decrementButton.classList.add('button-enabled');
	}

	if (quantity === 10) {
		incrementButton.setAttribute('disabled', 'disabled');
		incrementButton.classList.remove('button-enabled');
		incrementButton.classList.add('button-disabled');
	} else {
		incrementButton.removeAttribute('disabled');
		incrementButton.classList.remove('button-disabled');
		incrementButton.classList.add('button-enabled');
	}
}

// Función para aumentar la cantidad
function incrementQuantity(event) {
	let quantity = parseInt(quantityElement.textContent);
	if (quantity < 10) {
		quantity++; // Aumenta la cantidad si es menor que 10
		quantityElement.textContent = quantity; // Actualiza la cantidad en el elemento
		updateButtonState(quantity);
	}
}

// Función para disminuir la cantidad
function decrementQuantity(event) {
	let quantity = parseInt(quantityElement.textContent);
	if (quantity > 1) {
		quantity--; // Disminuye la cantidad si es mayor que 1
		quantityElement.textContent = quantity; // Actualiza la cantidad en el elemento
		updateButtonState(quantity);
	}
}

// Inicialmente, actualiza el estado de los botones
updateButtonState(1);


//Mensaje al Agregar al Carrito

const agregarBtn = document.querySelector('.cart');
const mensaje = document.getElementById('message');

agregarBtn.addEventListener('click', () => {
	mensaje.style.display = "block";
	overlay.style.display = "block";
	setTimeout(() => {
		mensaje.style.display = "none";
		overlay.style.display = "none";
	}, 3000); // 3 segundos
});
document.body.appendChild(overlay);
