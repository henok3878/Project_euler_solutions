function findSumOfMultipliesOf3And5(num){
    let result = 0;
    for(let i = 0; i < num;i++){
        if(i%3 === 0 || i%5 ===0){
            result += i;
        }
    }
    return result;
}

console.log("The sum of all multiplies of 3 or 5 below 1000 is: " +
        findSumOfMultipliesOf3And5(1000)
);