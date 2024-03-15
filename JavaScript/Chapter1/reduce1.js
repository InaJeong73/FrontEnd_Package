const numbers=[1,2,3,4,5];

const sum=numbers.reduce((accumulator,current)=>accumulator+current,0);//reduce 괄호 안에 화살표 함수(매개변수){논리식}를 표현,그리고 매개변수 기본값 마지막에 지정
console.log(sum);

const avg=numbers.reduce((accumulator,current,index,array)=>{
    if(index===array.length-1){
        return (accumulator+current)/array.length;
    }
     return accumulator+current;
    
},0);

console.log(avg);