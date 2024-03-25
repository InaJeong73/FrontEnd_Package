const numbers={
    a:1,
    b:2,
    get sum(){
        console.log("sum 함수가 실행됩니다. ");
        return this.a+this.b;
    }
};


console.log(numbers.sum);
numbers.b=5;
console.log(numbers.sum);

//numbers.sum()이라는 함수를 안쓰고 numbers.sum으로 조회만 하더라도 콘솔창에 결과가 출력된다. 

const dog={
   _name:'멍멍이' ,
   _age:3,
   get name(){
    console.log(`_name을 조회합니다...`);
    return this._name;
   },
   get age(){
    const age=this._age+1;
    console.log(`_age의 다음 나이를 계산합니다...`);
    return age;
   },
   set name(value){
    console.log(`이름이 바뀝니다...${value}`);
    this._name=value;
   },
   set age(value){
    console.log(`나이가 바뀝니다...${value}`);
    this._age=value;
   }
};

console.log(dog.name);
console.log(dog.age);//4
dog.name='뭉뭉이';
dog.age=10;
console.log(dog.name);
console.log(dog.age);//10