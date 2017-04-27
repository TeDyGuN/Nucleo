function myfuncion(array, n) {
		var array_min = [];
    var bool = false;
		for (var i = 0; i < array.length; i++) {
				if(array[i] < n)
				{
						array_min.push(array[i]);
            bool = true;
				}
		}
    if(!bool)
    {
        return "NO HAY NUMEROS MENORES A "+n;
    }
    return array_min;
}
console.log(myfuncion([5,7,3,8,9,4,2,2], 6));
console.log(myfuncion([5,7,3,8,9,4,2,2], 1));
