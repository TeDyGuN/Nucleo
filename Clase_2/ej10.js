function myfuncion(cadena) {
		var n_cadena = cadena;
		for (var i = cadena.length - 1; i >= 0; i--) {
				n_cadena = n_cadena + cadena[i];
		}
		return n_cadena;
}
console.log(myfuncion("mundo"));
