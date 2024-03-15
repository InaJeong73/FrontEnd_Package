//10보다 큰 숫자의 갯수를 반환하는 함수
function countBiggerThanTen(numbers){
    return numbers.filter(n=>n>10).length;
    }
    
    const count=countBiggerThanTen([1,2,3,5,10,20,30,40,50,60]);
    console.log(count);