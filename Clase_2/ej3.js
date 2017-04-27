function myfuncion(n) {
    var object = new Object();
    object.suma      = n + n;
    object.producto  = n * n;
    object.division  = n / n;
    object.resta     = n - n;
    return object;
}
p = myfuncion(5);
console.log(p.suma);
console.log(p.resta);
console.log(p.producto);
console.log(p.division);
