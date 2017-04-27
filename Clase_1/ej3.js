function myfuncion() {
    var array = [1, 2, 3, 4];
    var suma = 0, prod = 1;
    for (var i = 0; i < array.length; i++) {
        suma = suma + array[i];
        prod = prod * array[i];
    }
    console.log(suma);
    console.log(prod);
}
myfuncion();
