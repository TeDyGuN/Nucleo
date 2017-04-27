function myfuncion(numero) {
		if(numero % 3 == 0 || numero % 5 == 0 || numero % 7 == 0)
    {
        return (2 * numero) - 1;
    }
    return numero;
}
console.log(myfuncion(15));
