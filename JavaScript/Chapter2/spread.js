const slime={
    name: '슬라임'
}
//...자리에 기존에 있던 속성들이 들어오는 개념임. 
const cuteSlime={
    //name: '슬라임',
    ...slime,
    attribute:'cute'
}

const purpleCuteSlime={
    // name: '슬라임',
    // attribute:'cute',
    ...cuteSlime,
    color:'purple'
}

const greenCuteSlime={
    ...purpleCuteSlime,
    color: 'green'
}

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
console.log(greenCuteSlime);


const animals=['개','고양이','참새'];
const anotherAnimals=[...animals,'비둘기'];

console.log(animals);
console.log(anotherAnimals);



const numbers=[1,2,3,4,5];
const spreadNumbers=[...numbers,1000,...numbers];
console.log(spreadNumbers);

//spread 는 객체나 배열 안에 다른 객체나 배열을 퍼뜨리는 역할을 수행한다. 