class Food{
    constructor(name){
        this.name=name;
        this.brands=[];
    }

    addBrand(brand) {
        this.brands.push(brand);
    }

    print(){
        console.log(`${this.name}을/를 파는 음식점들`);
        console.log(this.brands.join(', '));
    }
}

const pizza=new Food('피자');
pizza.addBrand("도미노피자");
pizza.addBrand("파파존스");
pizza.addBrand("피자헛");

pizza.print();

const chicken=new Food('치킨');
chicken.addBrand('bhc');
chicken.addBrand('교촌치킨');
chicken.addBrand('굽네치킨');

chicken.print();

