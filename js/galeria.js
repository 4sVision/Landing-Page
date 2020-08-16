function mostrar(){
	var x = document.getElementById('mostrarme');
	var y = document.getElementById('boton1');
	var z = document.getElementById('boton2');

	if (x.style.display === 'none') {
		x.style.display = 'block';
		z.style.display = 'block';
		y.style.display = 'none';
	} else {
		x.style.display = 'none';
		y.style.display = 'block';
		z.style.display = 'none';
	}
}