//비동기적 처리
function work(callback){
    setTimeout(()=>{
        const start=Date.now();
        for(let i=0;i<100000000;i++){
    
        }
        const end=Date.now();
        console.log(end-start+'ms');
        callback(end-start);
    },0);
    //setTimeout 괄호 안의 마지막 매개변수에 들어가는 수치는 그 수치만큼의 시간이 지난 후 해당 작업을 수행하겠다는 의미임. 
    //초기값을 0으로 설정하지만 실제로 브라우저에서는 4ms 만큼 후에 수행됌.
    //setTimeout함수는 background에서 실행되므로 다른 작업을 동시에 수행할 수 있음. 

}

//work()함수를 수행하는 동안 다른 작업은 준비상태임. 
//만약 work()함수를 수행하면서 다른 작업도 수행하고 싶다면 setTimeout()함수를 이용하면 됌. 
console.log('작업 시작');
work(ms=>{
    console.log('작업이 끝났어요');
    console.log(`${ms}ms 걸렸다고 해요`);
});
console.log('다음 작업');