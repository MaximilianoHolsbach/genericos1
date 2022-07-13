let heladoSinTopping = 1.90
let Oreo = 1
let Kitkat = 1.50
let Brownie = 0.75
let Lacasitos = 0.95

document.write("heladoSinTopping : ",heladoSinTopping + "<br/>Oreo : ",Oreo + "<br/>Kitkat : ",Kitkat + "<br/>Brownie : ",Brownie + "<br/>Lacasitos : ",Lacasitos + "<br/>",)

let topping = window.prompt("Que topping elije: ")

if (topping == "Oreo"){
    topping = (Oreo)
    document.write("Su helado cuesta: ",heladoSinTopping + topping)
}else if (topping == "Kitkat"){
    topping = (Kitkat)
    document.write("Su helado cuesta: ",heladoSinTopping + topping)
}else if (topping == "Brownie"){
    topping = (Brownie)
    document.write("Su helado cuesta: ",heladoSinTopping + topping)    
}else if (topping == "Lacasitos"){
    topping = (Lacasitos)
    document.write("Su helado cuesta: ", heladoSinTopping + topping)
}else{
    document.write("No contamos con ese topping, el valor de su heado es: ", heladoSinTopping)
}

