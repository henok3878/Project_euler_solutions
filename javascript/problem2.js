
function findSumOfEvenValuedFibonacciTerms(max){
    let prevTerm = 1;
    let currentTerm = 2;
    let result = 0;
    while(currentTerm < max){
        console.log(currentTerm);
        if(currentTerm %2 ===0){
            result += currentTerm;
        }
        let temp = currentTerm;
        currentTerm = prevTerm + currentTerm;
        prevTerm = temp;
    
    }
    return result;
}

console.log('The sum of the even-valued terms: ' , findSumOfEvenValuedFibonacciTerms(4000000));