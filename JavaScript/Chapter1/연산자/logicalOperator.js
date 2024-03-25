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

//피연산자가 두개일때,,
//AND연산자는 앞에 false가 나오면 뒤에는 볼 필요도 없이 결과값이 false임. 만약 앞이 true이면 결과값은 뒷피연산자의 결과를 따름.
//OR연산자는 앞에 true가 나오면 뒤에는 볼 필요도 없이 결과값이 true 임. 만약 앞이 false이면 결과값은 뒷피연산자의 결과를 따름. 