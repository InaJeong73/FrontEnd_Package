//비구조화 할당은 필요할 때 쓰되 너무 과하게 쓰진 말자.
const object={a:1};
const {a,b=2}=object;
console.log(a);
console.log(b);

function print({a,b=2}){
    console.log(a);
    console.log(b);
}

print(object);


const animal={
    name:'멍멍이',
    type:'개',
};

const{name:nickname}=animal;
console.log(nickname);


const array=[1];
const [one,two=2]=array;
console.log(one);
console.log(two);



const deepObject={
    state:{
        information:{
            name1:'velopert',
            language:['korean','english','chinese']
        }
    },
    value:5,
};

const {name1,
    language:[first,second]}=deepObject.state.information;
const {value}=deepObject;

const extracted={
    name1,
    first,
    second,
    value,
};

console.log(extracted);
