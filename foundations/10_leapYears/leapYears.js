const leapYears = function(ano) {
  // Traduzindo a lógica:
  // É bissexto se (divisível por 4 E NÃO for divisível por 100)
  // OU se for divisível por 400.
  
  const divisivelPorQuatro = ano % 4 === 0;
  const divisivelPorCem = ano % 100 === 0;
  const divisivelPorQuatrocentos = ano % 400 === 0;

  if (divisivelPorQuatro && (!divisivelPorCem || divisivelPorQuatrocentos)) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
