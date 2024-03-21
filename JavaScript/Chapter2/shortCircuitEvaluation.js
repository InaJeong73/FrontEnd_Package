const dog={
    name:'멍멍이'
};

function getName(animal){
    if(animal){
        return animal.name;
    }
    return undefined;
}

const name=getName();
console.log(name);


//and 연산자에서 앞 피연사자가 truthy하거나 true라면 뒤에 있는 값이 출력됌, 만약 앞에 있는 피연산자가 falsy하다면 falsy값 그대로 출력됌.
console.log(true&&'hello');
console.log(false&&'hello');
console.log('hello'&&'bye');
console.log(null&&'hello');
console.log(undefined&&'hello');
console.log(''&&'hello');
console.log(0&&'hello');
console.log(1&&'hello');
console.log(1&&1);




const object={name:'asdf'};
const name1=object&&object.name;
console.log(name1);





const nameLessDog={
    name2:'뭉뭉이',
};

function getAnimalName(animal){
const name=animal&&animal.name2;
return name||"이름이 없는 동물입니다.";

// if(!name){
//     return '이름이 없는 동물입니다.';
// }
// return name;
};

const name3=getAnimalName(nameLessDog);
console.log(name3);

//or연산자에서 앞 피연산자가 false거나 falsy한 값이면 뒤에 있는 피연산자가 그대로 출력된다. 만약 앞 피연산자가 true이거나 truthy 한 값이면 truthy 한 값이 그대로 출력된다. 
console.log(false||'hello');
console.log(''||'이름없다');
console.log(null||'널이다~');
console.log(undefined||'defined 되지 않았다!');
