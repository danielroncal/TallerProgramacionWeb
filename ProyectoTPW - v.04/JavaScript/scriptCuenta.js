
//Mensaje al Iniciar sesión

document.addEventListener('DOMContentLoaded', function () {
	const formulario = document.querySelector('form[name="frmIniciar"]');
	const mensaje = document.getElementById('message');

	formulario.addEventListener('submit', function (event) {
		event.preventDefault(); // Evita que se envíe el formulario de manera predeterminada
		// Muestra el mensaje de registro
		mensaje.style.display = "block";
		// Restablece el formulario después de 3 segundos
		setTimeout(function () {
			mensaje.style.display = "none";
			formulario.reset();
		}, 3000);
	});
});


//Mensaje al Registrar cuenta

document.addEventListener('DOMContentLoaded', function () {
	const formulario = document.querySelector('form[name="frmRegistrar"]');
	const mensaje = document.getElementById('message');

	formulario.addEventListener('submit', function (event) {
		event.preventDefault(); // Evita que se envíe el formulario de manera predeterminada
		// Muestra el mensaje de registro
		mensaje.style.display = "block";
		// Restablece el formulario después de 3 segundos
		setTimeout(function () {
			mensaje.style.display = "none";
			formulario.reset();
		}, 3000);
	});
});