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
   get name(){
    console.log(`_name을 조회합니다...`);
    return this._name;
   },
   set name(value){
    console.log(`이름이 바뀝니다...${value}`);
    this._name=value;
   }
};

console.log(dog.name);
dog.name='뭉뭉이';
console.log(dog.name);