function myfuncion(number) {
    if(typeof number === "number")
    {
        console.log("Es Numero");
        console.log(number & 2);
        console.log(number | 2);
    }
    else {
        console.log("No se puede realizar operaciones con este tipo de datos");
    }
}
myfuncion(6);
