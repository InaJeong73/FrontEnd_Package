//node logicalOperator.js
//NOT !
//AND &&
//OR ||
//우선순위: NOT>AND>OR

const a=!true;
console.log(a);

const b=true&&false;
console.log(b);

const c=true||false;
console.log(c);

const value=!(true&&false||true&&false||!false);
console.log(value);