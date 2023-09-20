
//Boton buscar Productos

function handleEnter(event) {
	if (event.keyCode === 13) {
		buscarProductos();
	}
}

function buscarProductos() {
	var input = document.getElementById('search').value.toLowerCase();
	var productos = document.querySelectorAll('.product');
	productos.forEach(function(producto) {
		var nombreProducto = producto.querySelector('h2').textContent.toLowerCase();
		if (nombreProducto.includes(input)) {
			producto.style.display = 'block';
		} else {
			producto.style.display = 'none';
		}
	});
}


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
	} else if (valorSeleccionado === 'accesorios') {
		window.location.href = 'Accesorios.html';
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
		} else {
			document.getElementById("header").style.transform = "translateY(-100%)";
		}
	}
	prevScrollPos = currentScrollPos;
};
