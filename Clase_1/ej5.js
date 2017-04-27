function myfuncion(cadena) {
    var vocales = "AEIOUaeiou";
    //var vocales = "aeiou";
    //console.log(vocales);
    for (var i = 0; i < cadena.length; i++) {
        for (var j = 0; j < vocales.length; j++) {
            if(cadena[i] === vocales[j])
            {
                console.log(vocales[j]);
            }
        }
    }
}
myfuncion("hola mundo");
