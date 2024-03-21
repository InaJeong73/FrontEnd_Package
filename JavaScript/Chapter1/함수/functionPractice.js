function getGrade(score){
    if(score===100){
        return 'A+';
    }
    else if(score>=90){
        return 'A0';
    }
    else if(score>=80){
        return 'B+';
    }
    else if(score>=70){
        return 'B0';
    }
    else if(score>=65){
        return 'C+';
    }
    else if(score>=60){
        return 'C0';
    }
    else if(score>=55){
        return 'D+'
    }
    else if(score>=50){
        return 'D0'
    }
    else {
        return 'F';
    }
}

const stdGrade=getGrade(65);
console.log(`학생의 등급은 ${stdGrade} 입니다.`);