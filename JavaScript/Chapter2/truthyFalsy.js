//JS에서는 undefined, null,0,'',NaN 을 다 falsy한 값으로 인지한다. falsy 는 false 같은 것을 의미. 
//NaN은 Not a Number의 약자
function print(person){
    if(person===undefined||person===null){
        return;
    }
    console.log(person.name);
}

const person={
    name:"John"
};

print(person);

const value={a:1};
if(value){
    console.log('value가 Truthy하네요.');
}

const value1=null;
if(value1){
    console.log('value가 Truthy하네요.');
}

const value2=null;
const truthy=value2?true:false;
console.log(truthy);