import dataJson from "./fetchData.js";
import {creatEltWithClassName,creatimgElt,creatLinkElt,creatVideoElt} from './createElt.js';
import factoryOrder from "./sortMedia.js";
import buildGalleryItem from "./buildGalleryItem.js";

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

