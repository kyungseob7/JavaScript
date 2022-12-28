/* ---------------------------------------------------------------------- */
/* Type Conversion                                                        */
/* ---------------------------------------------------------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2002;

console.log(typeof String(YEAR));

// undefined -> 'undefined'
// null -> 'null'

let days = null;
console.log(String(days));

// boolean
let isKind = true;
console.log((isKind + ''));


/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
console.log(Number(undefined));

// null
let money = null;
console.log(Number(money));


// boolean -> true = 1, false = 0
let cutie = true;
console.log(+cutie);


// string 숫자형 문자

let num = '   123'
console.log(num * 1);

// numeric string
let width = '320.4554px'
console.log(parseFloat(width,10)); 

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(Boolean(123));
console.log(!!null);