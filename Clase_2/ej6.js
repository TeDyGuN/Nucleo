function myfuncion(cadena) {
    var numeros = "";
		for (var i = 0; i < cadena.length; i++) {
		    if(parseInt(cadena[i]))
        {
            numeros = numeros + cadena[i];
        }
		}
    return numeros;
}
console.log(myfuncion("hola9que123tal"));
