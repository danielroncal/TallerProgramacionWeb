
//Generar Header
document.write(`
	<header id="header">
		<div class="search-box">
			<a href="Index.html"><img src="Images/Logo.png" class="img-logo" alt="logo"></a>
			<button id="category"><div class="category-img"><img src="Images/Category.png"></div>Categorías</button>
			<input type="text" id="search" placeholder="¿Qué producto estás buscando?" onkeydown="handleEnter(event)">
			<button id="buscar" onclick="buscarProductos()"><img src="Images/MagnifyingGlass.png"></button>
			<button id="cuenta"><div class="cuenta-img"><img src="Images/Account.png"></div>Mi cuenta</button>
			<button id="carrito"><div class="carrito-img"><img src="Images/ShoppingCart.png"></div>Mi carrito</button>
		</div>
	</header>
	<div id="category-panel" class="category-panel">
		<ul>
			<a href="Televisores.html"><li>Televisores</li></a>
			<a href="Smartphones.html"><li>Smartphones</li></a>
			<a href="Laptops.html"><li>Laptops</li></a>
			<a href="Tablets.html"><li>Tablets</li></a>
		</ul>
	</div>
`);


//Generar Detalles del carrito
document.write(`
	<div class="cart-details">
		<p id="cart-title">Mis productos</p>
		<div class="cart-details-product">
			<img src="Images/Tablet2.jpg">
			<div class="details-info">
				<h2>iPad Wi-Fi</h2>
				<p>S/ 2,199.00</p>
			</div>
			<div class="cart-product-quantity"><p>1</p></div>
			<div class="details-buttons">
				<div class="plus"><button>+</button></div>
				<div class="minus"><button>-</button></div>
			</div>
		</div>
		<div class="cart-details-product">
			<img src="Images/Laptop2.jpg">
			<div class="details-info">
				<h2>Gamer Acer</h2>
				<p>S/ 2,999.00</p>
			</div>
			<div class="cart-product-quantity"><p>1</p></div>
			<div class="details-buttons">
				<div class="plus"><button>+</button></div>
				<div class="minus"><button>-</button></div>
			</div>
		</div>
		<div class="cart-details-product">
			<img src="Images/Smartphone4.jpg">
			<div class="details-info">
				<h2>Samsung Galaxy S23 Ultra 5G</h2>
				<p>S/ 3,979.00</p>
			</div>
			<div class="cart-product-quantity"><p>1</p></div>
			<div class="details-buttons">
				<div class="plus"><button>+</button></div>
				<div class="minus"><button>-</button></div>
			</div>
		</div>
		<button id="cart">Ir al Carrito</button>
	</div>
`);


//Generar Footer
document.write(`
	<footer>
		<nav>
			<a href="https://wa.me/1XXXXXXXXXX"><img src="Images/WhatsApp.png"></a>
			<a href="https://www.facebook.com/"><img src="Images/Facebook.png"></a>
			<a href="https://www.twitter.com/"><img src="Images/Twitter.png"></a>
			<a href="https://www.instagram.com/"><img src="Images/Instagram.png"></a>
			<br><br>
			<a href="https://wa.me/1XXXXXXXXXX">Contáctanos +51 --- --- ---</a>
		</nav>
		<br>
		&copy; Tech Store. Todos los derechos reservados.
	</footer>
`);


//Controlar scroll del header

let prevScrollPos = window.pageYOffset;
const header = document.getElementById('header');
const cartInfo = document.getElementById('carrito');
const cartDetails = document.querySelector('.cart-details');

window.onscroll = function() {
	const currentScrollPos = window.pageYOffset;
	const screenHeight = window.innerHeight;

	if (screenHeight < document.body.scrollHeight) {
		if (prevScrollPos > currentScrollPos) {
			header.style.transform = "translateY(0)";
			cartDetails.style.display = "none";
		} else {
			header.style.transform = "translateY(-100%)";
			cartDetails.style.display = "none";
		}
	}
	prevScrollPos = currentScrollPos;
};


//Panel de categorías

const categoryButton = document.getElementById("category");
const categoryPanel = document.getElementById("category-panel");
const overlay = document.createElement("div"); // Crea el fondo semi-transparente
overlay.className = "overlay";

let isCategoryPanelVisible = false;

categoryButton.addEventListener("click", () => {
	isCategoryPanelVisible = !isCategoryPanelVisible;
	if (isCategoryPanelVisible) {
		categoryPanel.style.display = 'block';
		overlay.style.display = "block";
		// Deshabilita el scroll de la página
		document.body.style.overflow = "hidden";
	} else {
		categoryPanel.style.display = 'none';
		overlay.style.display = "none";
		// Habilita el scroll de la página
		document.body.style.overflow = "auto";
	}
});

// Cerrar el panel de categorías al hacer clic fuera de él
document.addEventListener("click", (event) => {
	if (isCategoryPanelVisible && event.target !== categoryButton && event.target !== categoryPanel && !categoryPanel.contains(event.target)) {
		isCategoryPanelVisible = false;
		categoryPanel.style.display = 'none';
		overlay.style.display = "none";
		// Habilita el scroll de la página
		document.body.style.overflow = "auto";
	}
});

document.body.appendChild(overlay);


//Boton buscar Productos

function handleEnter(event) {
	if (event.keyCode === 13) {
		buscarProductos();
	}
}

function buscarProductos() {
	var input = document.getElementById('search').value.toLowerCase();
	if (input !== "") {
		var productos = document.querySelectorAll('.product');
		productos.forEach(function(producto) {
			var nombreProducto = producto.querySelector('h2').textContent.toLowerCase();
			if (nombreProducto.includes(input)) {
				producto.style.display = 'block';
			} else {
				producto.style.display = 'none';
			}
		});
		var productosOcultos = document.querySelectorAll('.hidden-product');
		productosOcultos.forEach(function (producto) {
			var nombreProducto = producto.querySelector('h2').textContent.toLowerCase();
			if (nombreProducto.includes(input)) {
				producto.style.display = 'block';
			}
		});
		var slider = document.querySelector('.container-slideshow');
		var h2 = document.querySelector('.most');
		slider.style.display = 'none';
		h2.textContent = "Resultados de la búsqueda '" + input + "'";
	} else {

	}
}


//Boton mi Cuenta

const account = document.getElementById('cuenta');
account.addEventListener('click', function() {
	window.location.href = "Cuenta.html";
});


//Boton mi Carrito

cartInfo.addEventListener('click', function(event) {
	if (cartDetails.style.display === "none" || cartDetails.style.display === "") {
		cartDetails.style.display = "block";
	} else {
		cartDetails.style.display = "none";
	}
	// Evitar que el clic en el botón cierre el panel inmediatamente
	event.stopPropagation();
});

// Cerrar el panel cuando se hace clic fuera de él
document.addEventListener('click', function(event) {
	if (event.target !== cartInfo && !cartDetails.contains(event.target)) {
		cartDetails.style.display = "none";
	}
});

// Evitar que el clic en el panel se propague y lo cierre
cartDetails.addEventListener('click', function(event) {
	event.stopPropagation();
});

//Ir al carrito
const cart = document.getElementById('cart');
cart.addEventListener('click', function() {
	window.location.href = "Carrito.html";
});


// Obtén los elementos de los botones de aumento y disminución
const incrementButtonsCart = document.querySelectorAll('.plus button');
const decrementButtonsCart = document.querySelectorAll('.minus button');

// Agrega event listeners para los botones de aumento y disminución
incrementButtonsCart.forEach(button => {
	button.addEventListener('click', incrementQuantity);
});

decrementButtonsCart.forEach(button => {
	button.addEventListener('click', decrementQuantity);
});

// Función para aumentar la cantidad
function incrementQuantity(event) {
	const product = event.target.closest('.cart-details-product'); // Obtén el elemento del producto actual
	const quantityElement = product.querySelector('.cart-product-quantity p');

	let quantity = parseInt(quantityElement.textContent);

	if (quantity < 10) {
		quantity++; // Aumenta la cantidad si es menor que 10
		quantityElement.textContent = quantity; // Actualiza la cantidad en el elemento
	}
}

// Función para disminuir la cantidad
function decrementQuantity(event) {
	const product = event.target.closest('.cart-details-product'); // Obtén el elemento del producto actual
	const quantityElement = product.querySelector('.cart-product-quantity p');

	let quantity = parseInt(quantityElement.textContent);

	if (quantity > 1) {
		quantity--; // Disminuye la cantidad si es mayor que 1
		quantityElement.textContent = quantity; // Actualiza la cantidad en el elemento
	}
}


//Página Detalle del Producto (Galería)

var productos = document.querySelectorAll('.product');
productos.forEach(function(producto) {
	producto.addEventListener("click", function(event) {
	// Verifica si el clic fue en el botón "Agregar al carrito"
		if (event.target.matches('img') || event.target.matches('h2')) {
			window.open("DetalleProducto.html", "_blank"); // Abre en una nueva pestaña
		}
	});
});


//Página Detalle del Producto (Detalles del carrito)

var productos = document.querySelectorAll('.cart-details-product');
productos.forEach(function(producto) {
	producto.addEventListener("click", function(event) {
	// Verifica si el clic fue en el botón "Agregar al carrito"
		if (event.target.matches('img') || event.target.matches('h2')) {
			window.open("DetalleProducto.html", "_blank"); // Abre en una nueva pestaña
		}
	});
});
