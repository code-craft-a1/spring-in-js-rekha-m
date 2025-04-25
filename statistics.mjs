
export function computeStatistics(numbers){
    
    // implement the computation of statistics here
    const total = numbers.reduce((sum, num) => sum + num, 0);
    const average = total / numbers.length;
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);

    return { average, min, max };

}
