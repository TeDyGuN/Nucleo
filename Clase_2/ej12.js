function myfuncion(cadena) {
    var n_cadena = "";
		for (var i = 0; i < cadena.length; i++) {
				if(i % 2 == 1)
        {
            n_cadena += cadena[i];
        }
		}
    console.log(n_cadena);
}
myfuncion("murcielago");
