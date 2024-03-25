function max(...rest){
const maxNumber=rest.reduce((acc,current)=>{
    if(acc<=current){
        return current;
    }else{
        return acc;
    }
},0);
return maxNumber;
}


console.log(max(1,2,3,4,10,5,6,7));