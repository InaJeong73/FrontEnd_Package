const purpleCuteSlime={
    name:'슬라임',
    attribute:'cute',
    color:'purple'
}
console.log(purpleCuteSlime);
const {color,...cuteSlime}=purpleCuteSlime;
console.log(color);
console.log(cuteSlime);

const {attribute,...slime}=cuteSlime;
console.log(attribute);
console.log(slime);

const numbers=[0,1,2,3,4,5,6];
const[one,two,...rest]=numbers;
console.log(one);
console.log(two);
console.log(rest);

//rest는 객체나 배열 안에 퍼져있는 속성들을 모아오는 역할을 한다. 