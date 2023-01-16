/* global gsap */

import {  copy, insertLast, getInputValue, getNode, getRandom, clearContents, refError, isNumbericString, showAlert, addClass, removeClass } from "./lib/index.js";

import { jujeobData } from "./data/data.js";





const submit = getNode('#submit')
const resultArea = getNode('.result')


function clickSubmitHandler(e){

  e.preventDefault();

  let name = getInputValue('#nameField')
  let list = jujeobData(name)
  let pick = list[getRandom(list.length-1)];


  if (!name) {
    showAlert('.alert-error', '잘못된 정보입니다.','2000');
    gsap.fromTo(resultArea, 0.01, {x:-5}, {x:5, clearProps:"x", repeat:20})


/*     addClass(resultArea,'shake')
    setTimeout(() => {
      removeClass(resultArea,'shake')
    }, 1000); */

    return 
  }

  if(isNumbericString(name)){
    showAlert('.alert-error', '정확한 이름을 입력해주세요.','1500');
    return 
  }

/*   if (!name || isNumbericString(name) ) {
    showAlert('.alert-error', '제대로된 이름을 입력해주세요.','1500');
    return 
  } */



  clearContents(resultArea)
  insertLast(resultArea,pick)

 }

 function clickResultHandler(){
  
 }

 function clickCopyHandler(){
  let text = resultArea.textContent
  // navigator.clipboard.writeText(text)
  copy(text).then(()=>{
    showAlert('.alert-success','클립보드 복사가 완료됐습니다',1500)
  })
  
 }



submit.addEventListener('click', clickSubmitHandler)
resultArea.addEventListener('click', clickCopyHandler)