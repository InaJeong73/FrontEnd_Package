//객체를 만들어보자. 객체의 정보를 나타내는 변수를 '키워드'라고 한다. 
// 각 키워드 사이에 구분자로 쉼표(,)를 붙이고 공백이 있는 키워드명을 이용하려면 키워드를 따옴표로 감싸준 후 표현하면 된다. 
//const 객체명={키워드명: 데이터값,...};
//끝에 세미콜론 붙이기 

const dog={
    name: '멍멍이',
    age: 2,
    'key with space':'asdf',
};
const ironMan={
    name:'토니 스타크',
    actor:'로버트 다우니 주니어',
    alias:'아이언맨'
};
const captainAmerica={
    name: "스티븐 로저스",
    actor:'크리스 에반스',
    alias:"캡틴 아메리카"
};
console.log(dog);
console.log(dog.age);
console.log(dog.name);

function print1(hero){
console.log(`${hero.alias}(${hero.name})역할을 맡은 배우는 ${hero.actor} 입니다.`);
}

//비구조 할당, 객체 구조 분해:함수 내에서 매개변수로 받은 객체의 참조변수를 이용하기 위해 '객체.'을 매번 쓰기 번거로움으로 미리 매개변수로 받은 객체에 대해 구조화를 해둔 다음 참조 없이 참조변수들을 이용할 수 있다. 
function print2(hero){
    const{alias, name, actor}=hero;
    console.log(`${alias}(${name})역할을 맡은 배우는 ${actor} 입니다.`);
}

//아래처럼 함수의 매개변수 내에서 비구조 할당을 사용할 수도 있음
function print3({alias,name,actor}){
    console.log(`${alias}(${name})역할을 맡은 배우는 ${actor}입니다.`);
}

print1(ironMan);
print2(captainAmerica);

const {name}=ironMan;
console.log(name);


