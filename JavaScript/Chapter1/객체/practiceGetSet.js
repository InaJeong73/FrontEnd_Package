const numbers={
    _a: 1,
    _b: 2,
    sum: 3,
     calculator(){
        console.log('calculator');
       this.sum=this._a+this._b;
    },
    get a(){
        return this._a;
    },
    set a(value){
        this._a=value;
        this.calculator();
    },
    get b(){
        return this._b;
    },
    set b(value){
        this._b=value;
        this.calculator();
    }
};

console.log(numbers.sum);
numbers.a=5;
numbers.b=7;
numbers.a=9;
console.log(numbers.sum);