const repeatString = function(texto, num) {
    // 1. Verificar se oo numero e negativo
    if (num < 0) {
        return 'ERROR';
    }
    
    let resultado = '';

    for (let i = 0; i < num; i++) {
        resultado += texto;
    }

    return resultado;
};

// Do not edit below this line
module.exports = repeatString;
