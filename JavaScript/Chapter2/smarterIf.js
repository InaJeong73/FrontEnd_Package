const isAnimal=(text)=>['고양이','강아지','거북이','너구리'].includes(text);

// function isAnimal(text){
//     const animals=['고양이','강아지','거북이','너구리'];
//     return animals.includes(text);
// }


// function isAnimal(text){
//     return(
//         text==='고양이'||text==='강아지'||text==='거북이'||text==='너구리'
//     );
// }

console.log(isAnimal('고양이'));
console.log(isAnimal('노트북'));

function getSound(animal){
    const sounds={
        개:'멍멍',
        고양이:'야옹',
        참새:'짹짹',
        비둘기:'구구'
    }
    return sounds[animal]||'...?';
}

console.log(getSound('개'));
console.log(getSound('비둘기'));
console.log(getSound('인간'));



function makeSound(animal){
    const tasks={
        개:()=>{
            console.log('멍멍');
        },
        고양이:()=>{
            console.log('야옹');
        },
        비둘기:()=>{
            console.log('구구');
        }
    }
    const task=tasks[animal];
    if(!task){
        console.log('...?');
    }else{
    task();
    }
}

makeSound('개');
makeSound('고양이');
makeSound('비둘기');
makeSound('사람');