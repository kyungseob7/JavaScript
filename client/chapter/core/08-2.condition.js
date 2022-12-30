/* ---------------------------------------------------------------------- */
/* Logical Operators                                                      */
/* ---------------------------------------------------------------------- */
/* 
let age = prompt('나이를 입력하세요','')

if (age >= 14 && age <= 90) {
  console.log('맞다');
} else {
  console.log('그럼 몇살이야?');
}
 */









let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !value;


// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {thisIsFalsy:false};



// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {thisIsFalsy:true};

/* 
let userName = prompt('아이디를 입력해주세요','admin');

let pw = prompt('비밀번호 입력해주세요','1')

  if (userName == 'admin' && pw == '1') {
    alert('접속되었씁니다')
  } else {
    alert('취소되었습니다.')
  } */



  let userName = prompt('사용자 아이디를 입력해주세요.','');

  if(userName?.toLowerCase() == String('admin')){
    let pw = prompt('비밀번호를 입력해주세요.','');

    if(pw?.toLowerCase() == 'themaster'){
    console.log(`확인됐습니다`)
    } else {
      console.log(`취소됐습니다.`);
    }

  }else if(userName == ' ' || userName == null){
    console.log('취소했습니다.');
  } else {
    console.log('인증되지 않은 사용자 입니다.');
  }

  console.log(userName);