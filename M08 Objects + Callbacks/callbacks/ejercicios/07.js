function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  var newArr = [];

  arrayOfStrings.forEach(element => 
    {
      var newElem;
      newElem = element.split('');
      if (newElem[0] === 'A')
      {
        newArr.push(element);
      }
    });
  
  return newArr;
}

var pintores = ['Picasso', 'Caravaggio', 'Hitler', 'Van Gogh', 'Aalto'];

console.log(filter(pintores));

module.exports = filter;
