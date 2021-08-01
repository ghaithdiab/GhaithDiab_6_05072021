import dataJson from "./fetchData.js";
import {creatEltWithClassName,creatimgElt,creatLinkElt,creatVideoElt} from './createElt.js';
import factoryOrder from "./sortMedia.js";
import buildGalleryItem from "./buildGalleryItem.js";
import mediaFactory from "./factoryMedia.js";

  const url=new URL(window.location.href);
  const idphotographer=url.searchParams.get("id");
  const photographer=dataJson.photographers.find(x=>x.id==idphotographer);
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
const phototgrapherMedia=dataJson.media.filter(x=>x.photographerId==idphotographer);
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
orderbtn.addEventListener('click', ()=>{
  if(orderByList.style.display==="none"){
    orderbtn.style.display="none";
    orderByList.style.display="block";
  }
});

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
  })
  
}


const totalLikes=document.querySelector('.total-likes');
const likebtn=document.querySelectorAll('.likes');
const price=document.querySelector('.price');
let likesSum=0;
phototgrapherMedia.forEach(element=>{
  likesSum+=element.likes;
});
totalLikes.innerText=likesSum;


likebtn.forEach(element=>{
  element.addEventListener('click',()=>{
    let mediaID=element.dataset.id;
    const mediaElt=dataJson.media.find(x=>x.id==mediaID);
    mediaElt.likes++;
    totalLikes.innerText++;
    element.previousSibling.innerText=mediaElt.likes;
  })
})
price.innerText=`${photographer.price}€/jour`;
/////////form
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

// light box

const galleryItem=document.querySelectorAll('.item');
const galleryLink=document.querySelectorAll('.linksourc');
const lightBox=document.querySelector('#lightBox-modal');
const containerItem=document.querySelector('.container-gallery');
const btnNext=document.querySelector(".right-side");
const btnPrivous=document.querySelector(".left-side");

galleryLink.forEach(element=>{
  element.addEventListener('click', (event)=>{
    lightBox.style.display="block";
    const idItem=element.getAttribute("data-id");
    const itemElt=dataJson.media.find(x=>x.id==idItem);
    let type= "image";
    typeof itemElt.image==="undefined"?type="video":type="image";
    while(containerItem.firstChild){
      containerItem.firstChild.remove();
    }
    const item=new mediaFactory(itemElt,type);
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
})