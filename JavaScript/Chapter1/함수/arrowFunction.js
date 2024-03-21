//화살표로 함수 생성법
// const 함수명=(매개변수)=>{
// 로직 구현
// }
const add1=(a,b)=>{
return a+b;
}
const add2=(a,b)=>a+b;

//add1 과 add2는 논리적으로 동일한 코드임
console.log(add1(1,2));
console.log(add2(3,4));


const hello=(name)=>{
    console.log(`Hello ${name}`);
}
hello("정인아");