/* ---------------------------------------------------------------------- */
/* Array's Methods                                                        */
/* ---------------------------------------------------------------------- */

// Array.isArray
const arr = [10,100,1000,10000]

console.log(typeof arr);
console.log(Array.isArray(arr));

function isArray(data) {
  Object.prototype.toString.call([]).slice(8,-1).toLowerCase() === 'array'
}

function isNull(data) {
  Object.prototype.toString.call([]).slice(8,-1).toLowerCase() == 'null'
}

console.log();

/* 요소 순환 -------------------------------------------------------------- */

// forEach

const user = {}

arr.forEach(function(item,index){
  this[index] = item
},user)


/* 원형 파괴 -------------------------------------------------------------- */

// push
// pop
// unshift
// shift


// reverse
// splice
// sort

/* 새로운 배열 반환 --------------------------------------------------------- */

// concat
// slice
// map

let todo = ['밥먹기', '미용실가기', '코딩공부하기']

let newArray = arr.map( item=> item * 2)

console.log(newArray);

/* 요소 포함 여부 확인 ------------------------------------------------------ */

// indexOf
// lastIndexOf
// includes

/* 요소 찾기 -------------------------------------------------------------- */

const users = [
  {id:1,name:'로운'},
  {id:2,name:'승택'},
  {id:3,name:'연주'},
]
// find

const find = users.find((item,index)=>{
             return item.id < 5
             })

console.log(find);
// findIndex
const findIndex = users.findIndex((item,index) => {
  return item.id === 3
})

console.log(findIndex);



/* 요소 걸러내기 ----------------------------------------------------------- */

// filter

/* 요소별 리듀서(reducer) 실행 ---------------------------------------------- */

const friends = [
  {
    name: '윤보라',
    age: 28,
    job: '작꼬져',
  },
  {
    name: '이로운',
    age: 23,
    job: '배고픈 개발자',
  },
  {
    name: '오승택',
    age: 21,
    job: '물음표살인마',
  }
];
// reduce

let age = friends.reduce((acc,cur)=>{
  return acc + cur.age

},0)

console.log(age);




let template2 = todo.reduce((acc,cur,index)=>{
  return /* html */acc + `<li>할일${index + 1} : ${cur}</li>` + '\n'
},'')

console.log(template2);
// reduceRight

/* string ←→ array 변환 ------------------------------------------------- */
let str = '성찬 보경 일범 세민 형진 주현';

// split
let nameArray = str.split(' ')

console.log(nameArray);

console.log(nameArray.join(' / '));


// join