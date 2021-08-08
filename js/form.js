import { photographer } from "./photographerPage.js";
/*
* show the form contact and print the data to the console
*
*@return{void}
*/
const form=()=>{
  const formModal=document.querySelector('.bground');
  const btnContact=document.querySelector(".btn");
  const btnClose=document.querySelector('.close-btn');
  btnContact.addEventListener('click',()=>{
    formModal.style.display="block";
  })
  btnClose.addEventListener('click',()=>{
    formModal.style.display="none";
  })

  const namePhotographer=document.querySelector('.name-cotact');
  namePhotographer.innerText=`Contactez-moi ${photographer.name}`;

  const allInput=document.querySelectorAll('input');
  const textMessage=document.querySelector("textarea");
  const btnSend=document.querySelector('.btn-submit');
  btnSend.addEventListener('click',(e)=>{
    e.preventDefault();
    console.log(`Prénom : ${allInput[0].value}`);
    console.log(`Nom : ${allInput[1].value}`);
    console.log(`Email : ${allInput[2].value}`);
    console.log(`Message : ${textMessage.value}`);
    formModal.style.display="none";
  })
}

export {form};