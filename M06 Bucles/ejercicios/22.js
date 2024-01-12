function diasEnMes(mes) {
  // La función recibe un mes(número) por argumento.
  // Determine cuántos días tiene el mes correspondiente a ese número.
  // PISTA: Usa un bucle do-while para validar que el mes ingresado sea válido.
  // Tu código:
  do
  {
    if (mes >= 1 && mes <= 12)
    {
      if (mes === 1 || mes === 4 || mes === 6 || mes === 9 || mes === 11)
      {
        return 31;
      }
      else if (mes === 2)
      {
        return 28;
      }
      else
      {
        return 30;
      }  
    }
    else
      {
        return "Por favor, ingrese un mes válido (entre 1 y 12):";
      }

  } while (mes >= 1 && mes <= 12);
}
console.log(diasEnMes(3));
module.exports = diasEnMes;
