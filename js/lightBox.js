import { phototgrapherMedia,photographer } from "./photographerPage.js";
import mediaFactory from "./factoryMedia.js";
import { creatEltWithClassName } from "./createElt.js";

/*
*DOM Elements
*/
const lightBox=document.querySelector('#lightBox-modal');
const containerItem=document.querySelector('.container-gallery');
const main=document.querySelector("main");
const close=document.querySelector('.close-lightBox');
/*
*Open Gallery dialog
*
*@param{element} element of media selected on photgrapher page
*
*@return {void}
*/
const openGallery=(element)=>{
    lightBox.style.display="block";
    main.setAttribute("aria-hidden","true");
    lightBox.setAttribute("aria-hidden","false");
    const idItem=element.getAttribute("data-id");
    const itemElt=phototgrapherMedia.find(x=>x.id==idItem);
    let type= "image";
    typeof itemElt.image==="undefined"?type="video":type="image";
    while(containerItem.firstChild){
      containerItem.firstChild.remove();
    }
    const item=new mediaFactory(itemElt,type);
    item.setAttribute("data-id",idItem);
    if(type==="video"){
      item.setAttribute("controls","");
      item.setAttribute("autoplay","");
    }
    item.classList.add("media-Item");
    containerItem.appendChild(item);
    const titleItem=creatEltWithClassName("p","title");
    containerItem.appendChild(titleItem);
    titleItem.innerText=`${itemElt.title}`;
    close.focus();
    lightBox.addEventListener("keydown",(e)=>{
      const keyCode=e.keyCode ? e.keyCode : e.which;
      if(keyCode===27 && lightBox.getAttribute("aria-hidden")=="false"){
        closeLightBox();
      }else if(keyCode==39 && lightBox.getAttribute("aria-hidden")=="false"){
        NextItem();
      }else if(keyCode==37 && lightBox.getAttribute("aria-hidden")=="false"){
        PrivousItem();
      }
    });
}
/*
*close Gallery dialog
*
*@return {void}
*/
const closeLightBox=()=>{
  lightBox.style.display="none";
  main.setAttribute("aria-hidden","false");
  lightBox.setAttribute("aria-hidden","true");
}
/*
*Move to Next media in gallery 
*
*@retuen {void}
*/
const NextItem=()=>{
  const eleMedia=document.querySelector('.media-Item');
  const getIDMedia=eleMedia.getAttribute('data-id');
  let getIndexEle=phototgrapherMedia.indexOf(phototgrapherMedia.find(x=>x.id==getIDMedia));
  if(getIndexEle>=0 && getIndexEle<phototgrapherMedia.length-1){
    getIndexEle++;
  }else{
    getIndexEle=0;
  }
    const newElt=phototgrapherMedia[getIndexEle];
      while(containerItem.firstChild){
        containerItem.firstChild.remove();
      }
    let type="image";
    typeof newElt.image==="undefined"?type="video":type="image";
    const item=new mediaFactory(newElt,type);
    item.setAttribute("data-id", newElt.id);
    if(type==="video"){
      item.setAttribute("controls","");
      item.setAttribute("autoplay","");
    }
    item.classList.add("media-Item");
    containerItem.appendChild(item);
    const titleItem=creatEltWithClassName("p","title");
    containerItem.appendChild(titleItem);
    titleItem.innerText=`${newElt.title}`;
}
/*
* Move to privous media in gallery
*
*@return {void}
*/
const PrivousItem=()=>{
  const eleMedia=document.querySelector('.media-Item');
  const getIDMedia=eleMedia.getAttribute('data-id');
  let getIndexEle=phototgrapherMedia.indexOf(phototgrapherMedia.find(x=>x.id==getIDMedia));
  if(getIndexEle>0 && getIndexEle<=phototgrapherMedia.length-1){
    getIndexEle--;
  }else{
    getIndexEle=phototgrapherMedia.length;
    getIndexEle--;
  }
    const newElt=phototgrapherMedia[getIndexEle];
      while(containerItem.firstChild){
        containerItem.firstChild.remove();
      }
    let type="image";
    typeof newElt.image==="undefined" ? type="video" :type="image";
    const item=new mediaFactory(newElt,type);
    item.setAttribute("data-id", newElt.id);
    if(type==="video"){
      item.setAttribute("controls","");
      item.setAttribute("autoplay","");
    }
    item.classList.add("media-Item");
    containerItem.appendChild(item);
    const titleItem=creatEltWithClassName("p","title");
    containerItem.appendChild(titleItem);
    titleItem.innerText=`${newElt.title}`;
}

export {openGallery,closeLightBox ,NextItem,PrivousItem};