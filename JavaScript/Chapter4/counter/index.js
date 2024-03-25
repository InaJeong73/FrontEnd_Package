const number=document.getElementById('number');
//tag 에 id가 설정되지 않았을 때는 querySelectorAll()함수를 이용하여 tag명으로 탐색한다. 
const buttons=document.querySelectorAll('button');
console.log(buttons);
const[increase,decrease]=buttons;


//tag에 대한 id가 존재할 때는 getElementById()로 요소를 탐색한다. 
// const increase=document.getElementById('increase');
// const decrease=document.getElementById('decrease');

increase.onclick=()=>{
    const current=parseInt(number.innerText,10);
    //number변수에 들어있는 데이터를 10진수 정수형태로 변환시킨다.
    number.innerText=current+1;
    console.log('increase가 클릭됌');
}

decrease.onclick=()=>{
    const current=parseInt(number.innerText,10);
    number.innerText=current-1;
    console.log('decrease가 클릭됌');

}

// console.log(number.innerText);
// console.log(increase.offsetTop);
// console.log(decrease.id);