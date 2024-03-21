function biggerThanThree(numbers){
    const numberList=[];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>3){
            numberList.push(numbers[i]);
        }
    }
    return numberList;
}

const result=biggerThanThree([1,2,3,4,5,6,7]);
console.log(result);