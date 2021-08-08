import dataJson from "./fetchData.js";
import {creatEltWithClassName,creatimgElt,creatLinkElt,creatVideoElt} from './createElt.js';
import factoryOrder from "./sortMedia.js";
import buildGalleryItem from "./buildGalleryItem.js";
import mediaFactory from "./factoryMedia.js";
import likeCounter from "./likes.js";
import { form } from "./form.js";
  // put the id of photographer Selected in URL
  const url=new URL(window.location.href);
  const idphotographer=url.searchParams.get("id");
  const photographer=dataJson.photographers.find(x=>x.id==idphotographer);
  /*
  * take information photographer from json file and assigne it to DOM
  *
  * @return {void}
  */
const getPhotographerInfo=()=>{
  document.querySelector('.photographer-name').innerText=photographer.name;
  document.querySelector('.city').innerText=`${photographer.city},${photographer.country}`;
  document.querySelector('.desc').innerText=photographer.tagline;
  const tags=document.querySelector('.tags');
  photographer.tags.forEach(element => {
    const tagItem=creatEltWithClassName("li","tags-item");
    tags.appendChild(tagItem);
    tagItem.innerText=`#${element}`;
  });
  const imgPhotographer=document.querySelector('.user');
  imgPhotographer.setAttribute("src",`./media/PhotographersIDPhotos/${photographer.portrait}`);
  imgPhotographer.setAttribute("alt", photographer.name);
}

window.onload=getPhotographerInfo();

// Array of media of photographer
const phototgrapherMedia=dataJson.media.filter(x=>x.photographerId==idphotographer);

// creat DOM elements for media photographer
const media=new factoryOrder("Popularité",phototgrapherMedia);
media.forEach(element => {
  let type= "image";
    if(typeof(element.image)=="undefined"){
      type="video";
    }
  new buildGalleryItem(element,type).buildItem();
});


const orderbtn=document.querySelector('.sort-btn');
const orderByList=document.querySelector('.sort-list');

// show /hide listbox on click
orderbtn.addEventListener('click', ()=>{
  if(orderByList.style.display==="none"){
    orderbtn.style.display="none";
    orderByList.style.display="block";
  }
});
// rebuild gallary media after user select order
orderByList.onclick=(event)=>{
  const btnText=document.querySelector('.btn-text');
  orderByList.style.display="none";
  let orderSelected=event.target.dataset.order;
  typeof(orderSelected)=="undefined" ? btnText.innerHTML="Popularité" : btnText.innerHTML=orderSelected;
  orderbtn.style.display="flex";
  const section=document.querySelector('.gallery');
  while(section.firstChild){
    section.firstChild.remove();
  }
  const media=new factoryOrder(orderSelected,phototgrapherMedia);
  
  media.forEach(element=>{
    let type= "image";
    if(typeof(element.image)=="undefined"){
      type="video";
    }
    new buildGalleryItem(element,type).buildItem();
  });
  likeCounter();
}



const price=document.querySelector('.price');

window.onload=likeCounter();

// add the price to DOM 
price.innerText=`${photographer.price}€/jour`;
/////////form
window.onload=form();
// light box

const galleryLink=document.querySelectorAll('.linksourc');
const lightBox=document.querySelector('#lightBox-modal');
const containerItem=document.querySelector('.container-gallery');
const btnNext=document.querySelector(".right-side");
const btnPrivous=document.querySelector(".left-side");

galleryLink.forEach(element=>{
  element.addEventListener('click', ()=>{
    lightBox.style.display="block";
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
  })
})
const close=document.querySelector('.close-lightBox');
close.addEventListener('click', ()=>{
  lightBox.style.display="none";
});
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
      btnNext.style.pointerEvents="auto";
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
}
btnNext.addEventListener("click",NextItem);
btnNext.addEventListener("Keydown",(e)=>{
  if(e.key=="ArrowRight"){
    NextItem;
  }
})
btnPrivous.addEventListener("click",()=>{
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
      btnNext.style.pointerEvents="auto";
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
});
export {phototgrapherMedia,photographer} ;