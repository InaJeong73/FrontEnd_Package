const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
    reject(new Error());
    }, 1000)
});

//promise가 끝나고 어떤 작업을 하고 싶다면 then()이라는 함수를 이용하면 됌.
myPromise.then(result => {
    console.log(result);
}).catch(e=>{
    console.error(e);
});







//setTimeout 함수의 단점-> 복잡해짐
// function increaseAndPrint(n, callback) {
//     setTimeout(() => {
//         const increased = n + 1;
//         console.log(increased);
//         if (callback) {
//             callback(increased);
//         }
//     }, 1000)
// }

// increaseAndPrint(0, n => {
//     increaseAndPrint(n,n=>{
//         increaseAndPrint(n,n=>{
//             increaseAndPrint(n,n=>{
//                 increaseAndPrint(n,n=>{
//                     console.log('작업 끝!');
//                 })
//             })
//         })
//     })
// });