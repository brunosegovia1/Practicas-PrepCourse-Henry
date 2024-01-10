function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // NOTA: no debes retornar nada.
  // Tu código:

  console.log(cb());
}

function callback ()
{
  return 'Hola';
}

invocarCallback(callback);

module.exports = invocarCallback;
