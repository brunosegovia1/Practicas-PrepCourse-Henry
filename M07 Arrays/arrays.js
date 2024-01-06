/*
var listaDeCompras = [];
listaDeCompras[3] = 'Lechuga';
listaDeCompras[1] = 'Tomates cherry';
console.log(listaDeCompras.length);


var colores = [];
//El método .push() agrega un elemento al final del array
colores.push('rojo', 'amarillo', 'verde', 'azul');
//.unshift() agrega elemento al principio del array
colores.unshift('blanco');
//.pop() elimina el último elemento del array
colores.pop();
//.shift() elimina el primer elemento del array
colores.shift();
console.log(colores);


var pintores = ['Picasso', 'Caravaggio', 'Hitler', 'Van Gogh'];
//El método .includes() verifica si existe el elemento en el arreglo.
var incluyeHitler = pintores.includes('Hitler');
console.log(incluyeHitler);


var numeros = [1, 6, 8, 9];
//El método .every() verifica si todos los elementos del array cumplen con la condición que ponemos dentro del paréntesis
var cumpliendoCondicion = numeros.every((num) => {return num > 5;});
console.log(cumpliendoCondicion);


var palabra = 'Henri';
//El método .split('') separa letra por letra una palabra. Funciona solamente con strings. Además, si especificamos uno de los caracteres, separará la palabra desde donde está este, omitiéndolo (por ej: H, enri).
var palabraSeparada = palabra.split('');
palabraSeparada.pop();
palabraSeparada.push('y');
//console.log(palabraSeparada);
//.join('') funciona al reves de .split(''), junta los caracteres en un string.
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);


var numeros = [1, 2, 3, 4];
//El método forEach() nos permite recorrer un arreglo, realizando alguna acción en para cada elemento.
numeros.forEach((num) => console.log(num));
numeros.forEach((num) => 
{
    if (num == 3)
    {
        console.log(num);
    }
})


var numeros = [1, 2, 3, 4];
//El método map() también nos permite recorrer un arreglo y realizar una acción por cada elemento. La diferencia es que este método devuelve un nuevo arreglo los elementos modificados, por lo que sí o sí debemos crear una nueva variable para verlo funcionar.
var masUno = numeros.map(num =>
{
    return num + 1;
})
console.log(masUno);


var arr = [1, 2, 3, 4, 5];
for (var  i = 0; i < arr.length; i++)
{
    console.log(arr[i]);
}


function encontrarLetraP(string)
{
    //con el método .split('') convertimos la variable string en un array
    var letras = string.split('');
    var cont = 0;

    for (let i = 0; i < letras.length; i++)
    {
        if (letras[i] === 'p')
        {
            cont++
        }
    }
    
    if (cont >=1)
    {
        console.log(string + ' sí contiene la P.');
    }
    else
    {
        console.log(string + ' no contiene la P.');

    }
}
encontrarLetraP('JavaScript');
encontrarLetraP('Henry') 


var arr = [];
while (arr.length < 5)
{
    arr.push ('BOOM');
}
console.log(arr);


var arr = [];
var n = 1;

while (n < 3)
{
    arr.push(Math.random())
}
*/
