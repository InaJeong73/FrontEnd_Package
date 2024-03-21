//node comparatorOperator.js

const a=1;
const b=1;
//두값을 비교할 때 equals 부호를 세번 사용한다. '=='를 이용해도 되지만 type을 비교하지 않기 때문에 나중에 원치 않은 결과가 나올 수 있음. 왠만하면 '==='을 쓰자.

const equals=a===b;
console.log(equals);//true

const c='c';
const d='d';

const notEquals=c!==d;
console.log(notEquals);//true

const num1=10;
const num2=15;
const num3=15;

console.log(num1<num2);
console.log(num1>num2);
console.log(num3<=num2);

const str1="안녕";
const str2="하세요";


console.log(str1+str2);
