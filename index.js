  
const numbers = [6,9,-2,92,15,11];
const stats = seqStats(numbers);

function seqStats(numbers) {
  let minValue = numbers[0];
  let maxValue = numbers [0];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    minValue = Math.min(minValue, numbers [i]);
    maxValue = Math.max(maxValue, numbers [i]);
    sum += numbers [i];
  }
  return {
    minValue: minValue,
    maxValue: maxValue,
    sumElements: numbers.length,
    avgValue: sum / numbers.length
  };
}

console.log(stats);
