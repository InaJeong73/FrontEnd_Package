const dog={
    name:'멍멍이',
    sound:'멍멍!',
    say:function(){
        console.log(this.sound);
    },
};

const cat={
    name:'냐옹이',
    sound: '야옹~',
};

// 객체 내에서 함수를 정의할 때 this 키워드를 이용한다면 화살표 함수 사용 금지
cat.say=dog.say;
dog.say();
cat.say();

const catSay=cat.say;
catSay();//catSay에는 this가 정의되지 않았기 때문에 오류가 발생할 것임. 원하는 결과를 얻으려면 cat.say.bind(cat);과 같이 cat 객체를 바인딩하여 컨텍스트를 제공해야 함. 

