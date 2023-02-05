  
  
  const numbers = [1,33,-40, 123,65];
  const stats = seqStats(numbers);
  
  function seqStats(numbers) {
    let minValue = numbers[0];
    let maxValue = numbers[0];
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      minValue = Math.min(minValue, numbers[i]);
      maxValue = Math.max(maxValue, numbers[i]);
      sum += numbers[i];
    }
  
    return {
      minValue: minValue,
      maxValue: maxValue,
      sumElements: numbers.length,
      avgValue: sum / numbers.length
    };
  }
  
  console.log(stats);


  /*

  1° A constante `numbers` é um array de números inteiros.

  2° A constante `stats` é igual ao resultado da chamada da função `seqStats` com o array numbers como argumento.

  3° A função `seqStats` é declarada com o objetivo de retornar algumas estatísticas básicas sobre o array de números.

  4° A variável `minValue` é inicializada com o valor do primeiro elemento do array de entrada.

  5° A variável `maxValue` é inicializada com o valor do primeiro elemento do array de entrada.

  6° A variável `sum` é inicializada com zero.

  7° O loop `for` é executado para cada elemento no array de entrada, começando do primeiro elemento.

  8° Dentro do loop `for`, a variável `minValue` é atualizada para ser o menor valor entre ela mesma e o elemento atual do array.

  9° Dentro do loop `for`, a variável `maxValue` é atualizada para ser o maior valor entre ela mesma e o elemento atual do array.

  10° Dentro do loop `for`, a variável `sum` é atualizada para ser a soma dela mesma e o elemento atual do array.

  11° Depois do loop `for`, a função `seqStats` retorna um objeto com as seguintes propriedades: minValue, maxValue, sumElements e avgValue.

  12° O resultado da função seqStats é então impresso no console.


  */