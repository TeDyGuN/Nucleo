function myfuncion(cadena) {
    var object = new Object();
		for (var i = 0; i < cadena.length; i++) {
				if(!object.hasOwnProperty(cadena[i]))
        {
            object[cadena[i]] = 0;
        }
		}
    for (var i = 0; i < cadena.length; i++) {
				if(object.hasOwnProperty(cadena[i]))
        {
            object[cadena[i]] += 1;
        }
		}
    // for (var i = 0; i < object.length; i++) {
    //     console.log(object[i]);
    // }
    console.log(object);
}
myfuncion("abababeededeffghi");
