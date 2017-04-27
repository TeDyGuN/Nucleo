function myfuncion(atr) {
    if(typeof atr === "object")
    {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
myfuncion(null);
