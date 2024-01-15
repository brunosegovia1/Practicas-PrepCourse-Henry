/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:
  /*
  var newArray = [];

  for (var elem in objeto)
  {
    newArray.push([elem.toString(), objeto[elem]]);
  }

  return newArray;
  */
}
/*
var arrPadre = 
{
  elem1: '1',
  elem2: '2',
  elem3: '3',
}
console.log(deObjetoAarray(arrPadre))
*/
  







function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:
  /*
  string = string.toLowerCase();
  string = string.split('');
  //El método .sort() ordena alfabéticamente un string
  string = string.sort();
  string = string.join('');



  var objeto = {};

  for (let i = 0; i<string.length; i++)
  {
    objeto[string[i]] = 0;  

    for (let e = 0; e<string.length; e++)
    {
      if (string[e] === string[i])
      {
        objeto[string[i]] ++;  
      }
    }
  }

  return objeto;
  */
}
/*
var cadena = 'HolaHolaalo';
console.log(numberOfCharacters(cadena));
*/









function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  /*
  string = string.split('');
  var comodin;
  
  for (let i=string.length-1; i>-1; i--)
  {
    console.log(string[i]);
    if (string[i] === string[i].toUpperCase())
    {
      comodin = string[i];
      string.splice(i, 1);
      string.unshift(comodin);
    }
  }
  string = string.join('');
  return string;
*/
}

//console.log(capToFront('HamzaI'));








function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  /*
  frase = frase.split(' ');

  for (let i=0; i<frase.length; i++)
  {
    frase[i] = frase[i].split('');

    frase[i] = frase[i].reverse();
    
    frase[i].push(' ');
    frase[i] = frase[i].join('');
  }

  frase = frase.join('');
  return frase;
  */
}
//console.log(asAmirror("Esta es la frase del millón."));










function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  /*
  if (numero[0] === numero[numero.length-1])
  {
    return "Es capicua.";
  }else return "No es capicua.";
  */
}
//console.log(capicua(1231));










function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  /*
  var newString = string.split('');

  var resultado = newString.filter(function(elemento)
  {
    return (elemento !== "a" && elemento !== "b" && elemento !== "c")
  })
  
  newString = resultado.join('');
  return newString;
  */
}

//console.log(deleteAbc('Laralirarairara'));








function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  /*
  var comodin;
  for (let i=0; i<arrayOfStrings.length; i++)
  {
    for (let e=0; e<arrayOfStrings.length - 1; e++)

    if (arrayOfStrings[e].length > arrayOfStrings[e + 1].length)
    {
      comodin = arrayOfStrings[e];
      arrayOfStrings[e] = arrayOfStrings[e+1];
      arrayOfStrings[e+1] = comodin;
    }
  }

  return arrayOfStrings;
  */
}
//console.log(sortArray(["You", "are", "beautiful", "looking"]))









function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  /*
  var nuevoArray = [];
  for (let i=0; i<array1.length; i++)
  {
    if (array2.includes(array1[i]))
    {
      nuevoArray.push(array1[i]);
    }
  }

  return nuevoArray;
  */
}

//console.log(buscoInterseccion([4,2,3], [1,3,4]))































/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
