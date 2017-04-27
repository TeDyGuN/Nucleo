function myfuncion(array) {
		var array_pares = [];
		for (var i = 0; i < array.length; i++) {
				if(array[i] % 2 == 0)
				{
						array_pares.push(array[i]);
				}
		}
		for (var i = 0; i < array_pares.length; i++) {
				console.log(array_pares[i]);
		}
}
myfuncion([5,7,3,8,9,4,2,2]);
