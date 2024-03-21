// for(let i=10;i>0;i--){
//     console.log(i);
// }


// const names=["멍뭉이","멍멍이","야옹이"];



// for(let i=0;i<names.length;i++){
//     console.log(names[i]);
// }

// const numbers=[10,20,30,40,50];
// for(let number of numbers){
//     console.log(number);
// }

const doggy={
    name:'멍멍이',
    sound:'멍멍',
    age: 2,
};

console.log(Object.keys(doggy));
console.log(Object.entries(doggy));
console.log(Object.values(doggy));

for(let key in doggy){
    console.log(`${key}:${doggy[key]}`);
}


