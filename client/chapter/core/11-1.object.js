/* ---------------------------------------------------------------------- */
/* Object                                                                 */
/* ---------------------------------------------------------------------- */


/* Primitives vs. Object ------------------------------------------------ */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = `
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
/* let cssMap = {
  position: "fixed";
  z-index: 10000;
  top: "50%";
  left: "50%";
  width: "60vw";
  max-width: 800
  height: "40vh";
  min-height: 280
  transform: "translate(-50%, -50%)";
}; */


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
  uid: 'user-id-asdA12k3klf',
  name : 'kindtiger',
  email: 'senbeom2@gmail.com',
  isSignIn:true,
  permission: 'paid', //free | paid
};


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.
console.log(authUser.uid);
console.log(authUser.name);
console.log(authUser.email);
console.log(authUser.isSignIn);
console.log(authUser.permission);


// 대괄호([]) 표기법
console.log(authUser["uid"]);
console.log(authUser["name"]);
console.log(authUser["email"]);
console.log(authUser["isSignIn"]);
console.log(authUser["premission"]);

// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.


// 계산된 프로퍼티 (calcurate property)
let calculateProperty = 'phone'; // phone | tel

function createUser(computedProp = calculateProperty){

  return {
    name: 'unknown',
    email: 'unknown@company.io',
    [computedProp]: '010-6400-9178'
  }

}

const user = createUser()


// 프로퍼티 포함 여부 확인

Object.prototype.SIGN = true;

for(let key in authUser) {

  if({}.hasOwnProperty.call(authUser,key)){

    // console.log(key);
  }


}



// 프로퍼티 나열 authUser : 객체  ---> 배열로 만들기

// let keyArray = Object.keys(authUser)
// let valueArray = Object.values(authUser)

// console.log(keyArray);


// let result = getPropertiesList = object => Object.keys(object)



        // remove  delete
// 프로퍼티 제거 or 삭제 

// 1. 함수 이름 정하기
// 2. 인수(arguments)와 인자(parameter) 정하기
// 3. 확인하기 (validation)
// 4. 리턴값 (return)


function removeProperty (object,key) {

  if(!(typeof object === 'object'))
  object[key] = null;
}

removeProperty(authUser,'uid')

function deleteProperty(object,key){
  delete object[key]
}

deleteProperty(authUser,'uid')

// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

const student = {name,email,authorization,isLogin}


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject(object) {
  
  // return Object.keys[object].length === 0 ? true : false;
  return Object.keys[object].length === 0 ? true : false;
  
}


let salarties = {
  john : 100,
  ann : 160,
  pete : 430
}

let total = 0
for(let keyValue of Object.entries(salarties)){
  let key = keyValue[0];
  let value = keyValue[1];

  total += value;
}

// console.log(total);


let color = ['#ff0000', '#2b00ff', '#00ff2f'];
/* const COLOR_RED = color[0];
const COLOR_BLUE = color[1];
const COLOR_GREEN = color[2];
 */


const [ , , COLOR_GREEN] = color 


//발췌 

console.log(COLOR_GREEN);
console.log(COLOR_GREEN);