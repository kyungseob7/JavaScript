
import {  insertLast, getInputValue, getNode, getRandom, clearContents, refError, isNumbericString, showAlert, addClass, removeClass } from "./lib/index.js";

import { jujeobData } from "./data/data.js";





const submit = getNode('#submit')
const resultArea = getNode('.result')


function clickSubmitHandler(e){

  e.preventDefault();

  let name = getInputValue('#nameField')
  let list = jujeobData(name)
  let pick = list[getRandom(list.length-1)];


/*   if (!name) {
    showAlert('.alert-error', '제대로된 이름을 입력해주세요.','1500');
    return 
  }

  if(isNumbericString(name)){
    showAlert('.alert-error', '제대로된 이름을 입력해주세요.','1500');
    return 
  } */

  if (!name || isNumbericString(name) ) {
    showAlert('.alert-error', '제대로된 이름을 입력해주세요.','1500');
    return 
  }



  clearContents(resultArea)
  insertLast(resultArea,pick)

 }

 function clickResultHandler(){
  
 }


submit.addEventListener('click', clickSubmitHandler)