//인자에서 spread를 사용할 수 있음.

function substract(x,y) {
    return x-y;
}

const numbers=[1,2];
const result=substract(...numbers);
console.log(result);