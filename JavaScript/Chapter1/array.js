const array1=[1,2,3,4,5];
console.log(array1);

const array2=[1,"blabla",{},4];
console.log(array2);
console.log(array2[0]);
console.log(array2[1]);
console.log(array2[2]);
console.log(array2[3]);
console.log(array2[4]);

const objects=[
    {name:'멍멍이'},
    {name:'야옹이'}
];

console.log(objects);
console.log(objects[0].name);
console.log(objects.length);

// 배열에 새로운 항목을 추가한다. push
objects.push({
    name:'멍뭉이'
}
)

console.log(objects);
console.log(objects.length);