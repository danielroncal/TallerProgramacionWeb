
//Página Detalle del Producto desde Carrito

var productos = document.querySelectorAll('.product-cart');
productos.forEach(function(producto) {
	producto.addEventListener("click", function(event) {
	// Verifica si el clic fue en el botón "Agregar al carrito"
		if (event.target.matches('img') || event.target.matches('h2')) {
			window.open("DetalleProducto.html", "_blank"); // Abre en una nueva pestaña
		}
	});
});


// Obtén los elementos de los botones de aumento y disminución
const incrementButtons = document.querySelectorAll('.buttons button:nth-child(3)');
const decrementButtons = document.querySelectorAll('.buttons button:nth-child(1)');

// Agrega event listeners para los botones de aumento y disminución
incrementButtons.forEach(button => {
	button.addEventListener('click', incrementQuantity);
});

decrementButtons.forEach(button => {
	button.addEventListener('click', decrementQuantity);
});

// Función para aumentar la cantidad
function incrementQuantity(event) {
	const product = event.target.closest('.product-cart'); // Obtén el elemento del producto actual
	const quantityElement = product.querySelector('.buttons p');
	const priceElement = product.querySelector('.product-cart-price p');
	const subtotalElement = product.querySelector('.product-cart-subtotal p');

	let quantity = parseInt(quantityElement.textContent);
	const price = parseFloat(priceElement.textContent.replace('S/', '').replace(',', '')); // Obtén el precio

	if (quantity < 10) {
		quantity++; // Aumenta la cantidad si es menor que 10
		quantityElement.textContent = quantity; // Actualiza la cantidad en el elemento

		const subtotal = (quantity * price).toLocaleString('es-PE', { style: 'currency', currency: 'PEN' }); // Calcula el subtotal
		subtotalElement.textContent = subtotal; // Actualiza el subtotal en el elemento

		updateTotalPrice(); // Actualiza el precio total
	}
}

// Función para disminuir la cantidad
function decrementQuantity(event) {
	const product = event.target.closest('.product-cart'); // Obtén el elemento del producto actual
	const quantityElement = product.querySelector('.buttons p');
	const priceElement = product.querySelector('.product-cart-price p');
	const subtotalElement = product.querySelector('.product-cart-subtotal p');

	let quantity = parseInt(quantityElement.textContent);
	const price = parseFloat(priceElement.textContent.replace('S/', '').replace(',', '')); // Obtén el precio

	if (quantity > 1) {
		quantity--; // Disminuye la cantidad si es mayor que 1
		quantityElement.textContent = quantity; // Actualiza la cantidad en el elemento

		const subtotal = (quantity * price).toLocaleString('es-PE', { style: 'currency', currency: 'PEN' }); // Calcula el subtotal
		subtotalElement.textContent = subtotal; // Actualiza el subtotal en el elemento

		updateTotalPrice(); // Actualiza el precio total
	}
}

// Función para actualizar el precio total
function updateTotalPrice() {
	const subtotalElements = document.querySelectorAll('.product-cart-subtotal p');
	let totalPrice = 0;

	subtotalElements.forEach(subtotalElement => {
		const subtotal = parseFloat(subtotalElement.textContent.replace('S/', '').replace(',', '')); // Obtén el subtotal
		totalPrice += subtotal; // Suma los subtotales
	});

	const totalPriceElement = document.querySelector('.total-price p');
	totalPriceElement.textContent = 'Precio total: ' + totalPrice.toLocaleString('es-PE', { style: 'currency', currency: 'PEN' });
}


//Mensaje al Comprar

const comprarBtn = document.querySelector('.total-price button');
const mensaje = document.getElementById('message');

comprarBtn.addEventListener('click', () => {
	mensaje.style.display = "block";
	overlay.style.display = "block";
	setTimeout(() => {
		mensaje.style.display = "none";
		overlay.style.display = "none";
	}, 3000); // 3 segundos
});
document.body.appendChild(overlay);
