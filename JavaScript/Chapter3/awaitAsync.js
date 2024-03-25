function sleep(ms){
    return new Promise((resolve)=>setTimeout(resolve,ms));
    //특정 ms이후 resolve가 호출됌.
}

const getDog=async()=>{
    await sleep(1000);
    return '멍멍이';
}

const getRabbit=async()=>{
    await sleep(500);
    return '토끼';
}

const getTurtle=async()=>{
    await sleep(3000);
    return '거북이';
}

async function process(){
    const fastAnimal=await Promise.race([getDog(),getRabbit(),getTurtle()]);
    // race함수는 getDog(),getRabbit(),getTurtle() 중 가장 먼저 끝난 함수만 반환됌
    console.log(fastAnimal);
    
    // const [dog,rabbit,turtle]=await Promise.all([getDog(),getRabbit(),getTurtle()]);
    // console.log(dog);
    // console.log(rabbit);
    // console.log(turtle);

    // const results=await Promise.all([getDog(),getRabbit(),getTurtle()]);
    //console.log(results);

    // const dog=await getDog();
    // console.log(dog);
    // const rabbit=await getRabbit();
    // console.log(rabbit);
    // const turtle=await getTurtle();
    // console.log(turtle);

}
process();

//async를 사용하면 이 함수의 결과물은 Promise를 반환함. 
// async function process(){
//     console.log('안녕하세요');
//     await sleep(1000);
//     console.log('반갑습니다.');
//     return true;
// }

// process().then(value=>{
//     console.log(value);
// });




// async function makeError(){
//     await sleep(1000);
//     const error=new Error();
//     throw error;
//     }
    
//     async function process(){
//         try{
//             await makeError();
//         }catch(e){
//             console.error(e);
//         }
        
//     }