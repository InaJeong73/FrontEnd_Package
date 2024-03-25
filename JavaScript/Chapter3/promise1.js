function increaseAndPrint(n){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const value=n+1;
            if(value===5){
            const error=new Error();
            error.name='valueIsFiveError';
            reject(error);
            return;
        }
        console.log(value);
        resolve(value);
        },1000);
    });
} 

increaseAndPrint(4).then(n=>{
    console.log(`result:${n}`);
}).catch(e=>{
    console.log(`${e.name} 오류가 발생했습니다.`);
});

increaseAndPrint(0)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.then(increaseAndPrint)
.catch(e=>{
    console.log(`${e.name}+ 오류가 발생했습니다.`);
});