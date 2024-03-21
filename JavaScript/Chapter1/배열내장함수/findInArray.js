const superheros=["아이언맨","캡틴 아메리카","토르","닥터 스트레인지"];
const index1=superheros.indexOf("닥터 스트레인지");
console.log(index1);

const todos=[
    {
        id:1,
        text:"JavaScript 입문",
        done: true,
    },
    {
        id:2,
        text:"HTML 입문",
        done: true,
    },
    {
        id:3,
        text:"JAVA 입문",
        done: true,
    },
    {
        id:4,
        text:"CSS 입문",
        done: false,
    },
];

//find, findIndex, indexOf는 첫번째로 찾은 요소를 반환한다. 
const index2=todos.findIndex(todo=>todo.id===3);
const todoObject=todos.find(todo=>todo.done===true);
console.log(index2);
console.log(todoObject);

const tasksNotDone=todos.filter(todo=>todo.done);
console.log(tasksNotDone);
