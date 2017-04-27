function myfuncion(a, b, c) {
    if(a > b && a > c)
    {
        if(b > c)
        {
            console.log(b);
        }
        else {
            console.log(c);
        }
    }
    else if (b > c) {
        if(a > c)
        {
            console.log(a);
        }
        else {
            console.log(c);
        }
    }
    else {
        if(a > b)
        {
            console.log(a);
        }
        else {
            console.log(b);
        }
    }
}
myfuncion(1, 2, 3);
myfuncion(3, 2, 1);
myfuncion(2, 3, 1);
