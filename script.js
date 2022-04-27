/*Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión.
*/
//construyo array
//const cadenaTexto = ["pepe"];
//cars.length 
//The length property is always one more than the highest array index.
//let largoCadenaTexto = cadenaTexto.length
//console.log("Largo array cadenaTexto: " + largoCadenaTexto )
//let cadenaTexto = prompt("Escribi algo");
//let textoConcatenado = ""

// VERSION1
const arrayTexto = []
let i = 0
let captura
do {
    captura =prompt("Escribi algo")
    if (captura != null) 
        {
            arrayTexto[i] = captura
            i++
        } 
} while (captura != null)

console.log("cadenaTexto es: " + arrayTexto.join(" - "))

/*const arrayTexto = [];
let i = 0;
let captura
captura =prompt("Escribi algo")
arrayTexto[i] = captura;
i++
if (captura = null) {
    console.log("No pongas cancelar de una master")
} else {
    captura =prompt("Escribi algo")
    arrayTexto[i] = captura;
    i++
}
do {
    captura =prompt("Escribi algo")
    if (captura != null) 
        {
        arrayTexto[i] = captura;
        i++} 
        //else {console.log("No pongas cancelar de una master") }

} while (captura != null)

console.log("cadenaTexto es: " + arrayTexto.join(" - "))
*/
//console.log("cadenaTexto es: " + cadenaTexto)
//console.log("textoConcatenado es: " + textoConcatenado)
/*do {
    cadenaTexto = prompt("Escribi algo");
    textoConcatenado += cadenaTexto +"-";
    
}while (cadenaTexto != null) 
console.log(textoConcatenado)*/
/*
if (cadenaTexto != null) {
    cadenaTexto = prompt("Escribi algo");
    textoConcatenado += cadenaTexto +"-";
} else {
    console.log(textoConcatenado)
}*/
/*let guion = "-"
let textoConcatenado = ""
let i = 0

do {
    for (i = 0; i < cadenaTexto.length; index++) {
        cadenaTexto[i] = prompt("Escribi algo");
        textoConcatenado += cadenaTexto[index] + "-";
        
    }
} while (cadenaTexto [i] != null);

console.log(textoConcatenado)

*/
/*
do {
    cadenaTexto = prompt("Escribi algo");
    cadenaTextoLarga = cadenaTexto 
} while (cadenaTexto != null);

console.log(cadenaTexto);
console.log(cadenaTextoLarga);*/
/*function se() {
    var input;
    input = prompt('Do something?');
    if (input === null) {
        return; //break out of the function early
    }
    switch (input) {
    case 'fun':
        doFun();
        break;
    case 'boring':
        beBoring();
        break;
    }
}*/
/*
if(nota>=0 && nota<3)//0 1 2
    {
        document.getElementById("resultado").innerHTML = "Tu calificacion de  " + nota + " es: Muy deficiente";
    } 
else if(nota==3 || nota==4) //3 4
    {
        document.getElementById("resultado").innerHTML = "Tu calificacion de  " + nota + " es: Insuficiente";
    }
else if(nota==5)
    {
        document.getElementById("resultado").innerHTML = "Tu calificacion de  " + nota + " es: Suficiente";
    }
else if(nota==6)
    {
        document.getElementById("resultado").innerHTML = "Tu calificacion de  " + nota + " es: Bien";
    } 
else if(nota===7 || nota===8)
    {
        document.getElementById("resultado").innerHTML = "Tu calificacion de  " + nota + " es: Notable";
    } 
else if (nota===9 || nota===10)
    {
        document.getElementById("resultado").innerHTML = "Tu calificacion de  " + nota + " es: Sobresaliente";
    }
else if (nota<0 || nota>10)
    {
        document.getElementById("resultado").innerHTML = "Solo podes ingresar valores del 0 al 10";
    }

*/