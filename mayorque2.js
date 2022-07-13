let num1 = parseFloat(prompt("Ingrese un número: "))
let num2 = parseFloat(prompt("Ingrese un número: "))
let num3 = parseFloat(prompt("Ingrese un número: "))
if (num1 && num2<num3){
    document.write("El numero mayor es: ",num3)
} else if (num1<num2){
    document.write("El numero mayor es: ",num2)
}else{
    document.write("El numero mayor es: ",num1)
}