const numbers = [6, 9, 15, -2, 92, 11];
const stats = sequenceStats(numbers);

function sequenceStats(numbers) {
    let minValue = Number.MAX_SAFE_INTEGER;
    let maxValue = Number.MIN_SAFE_INTEGER;
    let sum = 0;
  
    for (let i = 0; i < numbers.length; i++) {
      minValue = Math.min(minValue, numbers[i]);
      maxValue = Math.max(maxValue, numbers[i]);
      sum += numbers[i];
    }
  
    return {
      minValue: minValue,
      maxValue: maxValue,
      numElements: numbers.length,
      avgValue: sum / numbers.length
    };
  }

  console.log(stats);

//  Este código define uma array de números [6, 9, 15, -2, 92, 11] e chama a função sequenceStats passando esse array como argumento.

//      A função sequenceStats recebe como argumento um array de números e calcula as estatísticas pra esse array.

//      Ela inicializa as variáveis minValue, maxValue, e sum:

//          minValue é inicializado com o valor máximo ddo array (Number.MAX_SAFE_INTEGER), 
//          o que representa o maior valor inteiro do array. 
//          Isso é feito para garantir que o primeiro elemento da array irá substituir esse valor pelo seu próprio valor na primeira iteração do loop.


//      maxValue é inicializado com o valor mínimo do array (Number.MIN_SAFE_INTEGER), 
//      o que representa o menor valor inteiro representável.
//      Isso é feito para garantir que o primeiro elemento da array irá substituir esse valor pelo seu próprio valor na primeira iteração do loop.


//      sum é inicializado com zero, pois representa a soma dos elementos da array.
//      Em seguida, o loop 'for' itera sobre todos os elementos da array. Em cada iteração,
//                                  o valor de minValue é atualizado com o mínimo entre o seu valor atual e o valor do elemento da array na posição i.
//      O valor de maxValue é atualizado com o máximo entre o seu valor atual e o valor do elemento da array na posição i. 
//      O valor de sum é atualizado adicionando o valor do elemento da array na posição i.
//
//      Após o loop, a função sequenceStats retorna um objeto com as seguintes propriedades:
//
//  minValue, que representa o valor mínimo do array.
//  maxValue, que representa o valor máximo do array.
//  numElements, que representa o número de elementos da array.
//  avgValue, que representa a média dos valores da array.


//  Por fim, o valor retornado pela função é armazenado na variável stats e é exibido no console com a instrução console.log(stats).