const sumAll = function(num1, num2) {
  // 1. Verificações de erro
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
  if (num1 < 0 || num2 < 0) return "ERROR";

  // 2. Garantir a ordem (o menor primeiro)
  const menor = Math.min(num1, num2);
  const maior = Math.max(num1, num2);

  // 3. O Acumulador
  let soma = 0;

  // 4. O Laço que percorre o intervalo
  for (let i = menor; i <= maior; i++) {
    soma += i;
  }

  return soma;
};

// Do not edit below this line
module.exports = sumAll;
