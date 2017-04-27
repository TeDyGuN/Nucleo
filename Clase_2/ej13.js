function myfuncion(n) {
    var cadena = n.toString();
    var n_cadena = "";
    for (var i = 0; i < 5; i++) {
        n_cadena += cadena;
    }
    return n_cadena;
		// var array_min = [];
    // var bool = false;
		// for (var i = 0; i < array.length; i++) {
		// 		if(array[i] < n)
		// 		{
		// 				array_min.push(array[i]);
    //         bool = true;
		// 		}
		// }
    // if(!bool)
    // {
    //     return "NO HAY NUMEROS MENORES A "+n;
    // }
    // return array_min;
}
console.log(myfuncion(3));
console.log(myfuncion(10));
