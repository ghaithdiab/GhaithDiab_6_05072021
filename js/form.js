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
  const allInput=document.querySelectorAll('input');
  const textMessage=document.querySelector("textarea");
  const main=document.querySelector("main");


  /**Open from dialog */
  btnContact.addEventListener('click',()=>{
    formModal.style.display="block";
    formModal.setAttribute("aria-hidden","false");
    main.setAttribute("aria-hidden","true");
    allInput.forEach(ele=>{
      ele.value="";
    });
    textMessage.value="";
    btnClose.focus();
    formModal.addEventListener("keydown",(e)=>{
      const keyCode=e.keyCode ? e.keyCode : e.which;
      if(keyCode===27 && formModal.getAttribute("aria-hidden")=="false"){
        formModal.style.display="none";
      }
    });
    });

    /**close form dialog */
  btnClose.addEventListener('click',()=>{
    formModal.style.display="none";
  });

  const namePhotographer=document.querySelector('.name-cotact');
  namePhotographer.innerText=`Contactez-moi ${photographer.name}`;


  const btnSend=document.querySelector('.btn-submit');
  /**print the data on the console */
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