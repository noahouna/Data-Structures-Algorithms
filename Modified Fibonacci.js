function solution(N) {
    if (N <= 1) {
        return N;
    }
    else{
        let numbersA = solution(N - 1).toString().split('').map(x => parseInt(x));
        let numbersB = solution(N - 2).toString().split('').map(x => parseInt(x));
        let sumA = 0;
        numbersA.forEach(element => sumA += element);
        sumB = 0;
        numbersB.forEach(element => sumB += element);
        return sumA + sumB;

        }

        
}

console.log('N = 10', solution(10));
console.log('N = 11', solution(11));