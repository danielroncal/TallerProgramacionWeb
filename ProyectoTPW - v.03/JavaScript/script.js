
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


//Página Detalle del Producto

var productos = document.querySelectorAll('.product');
productos.forEach(function(producto) {
	producto.addEventListener("click", function(event) {
	// Verifica si el clic fue en el botón "Agregar al carrito"
		if (event.target.matches('img') || event.target.matches('h2')) {
			window.location.href = "DetalleProducto.html";
		}
	});
});


//Boton mi Carrito

var boton = document.getElementById("carrito");
boton.addEventListener("click", function() {
	window.location.href = "Carrito.html";
});


//Boton mi Cuenta

var boton = document.getElementById("cuenta");
boton.addEventListener("click", function() {
	window.location.href = "Cuenta.html";
});


//Cambiar pagina desde una option del select

document.getElementById('category').addEventListener('change', function() {
	// Obtén el valor seleccionado
	var valorSeleccionado = this.value;
	// Redirige a la página correspondiente
	if (valorSeleccionado === 'televisores') {
		window.location.href = 'Televisores.html';
	} else if (valorSeleccionado === 'smartphones') {
		window.location.href = 'Smartphones.html';
	} else if (valorSeleccionado === 'laptops') {
		window.location.href = 'Laptops.html';
	} else if (valorSeleccionado === 'tablets') {
		window.location.href = 'Tablets.html';
	}
});


//Controlar scroll del header

let prevScrollPos = window.pageYOffset;

window.onscroll = function() {
	const currentScrollPos = window.pageYOffset;
	const screenHeight = window.innerHeight;

	if (screenHeight < document.body.scrollHeight) {
		if (prevScrollPos > currentScrollPos) {
			document.getElementById("header").style.transform = "translateY(0)";
			//document.querySelector('body').style.marginTop = "120px";
		} else {
			document.getElementById("header").style.transform = "translateY(-100%)";
			//document.querySelector('body').style.marginTop = "20px";
		}
	}
	prevScrollPos = currentScrollPos;
};

