function saludo(idioma) {
  // Retornar un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!".
  // Si "idioma" es "mandarin", devuelve "Ni Hao!".
  // Si "idioma" es "ingles", devuelve "Hello!".
  // Si "idioma" no es ninguno de los anteriores o es `undefined`, devuelve "Hola!".
  // Tu código:
  const language = ['aleman', "Guten Tag!", 'mandarin', "Ni Hao!", 'ingles', "Hello!"];
  for (let i=0; i<language.length; i++)
  {
    if (language[i] === idioma)
    {
      return language[i+1];
    }
  }
  return "Hola!";
}
console.log(saludo('mandarin'));
module.exports = saludo;
