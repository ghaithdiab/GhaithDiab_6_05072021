import dataJson from "./fetchData.js";
import {creatEltWithClassName,creatLinkElt} from "./createElt.js";
import factoryOrder from "./sortMedia.js";
import buildGalleryItem from "./buildGalleryItem.js";
import likeCounter from "./likes.js";
import { form } from "./form.js";
import { openGallery ,closeLightBox,NextItem,PrivousItem} from "./lightBox.js";

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
  document.querySelector(".photographer-name").innerText=photographer.name;
  document.querySelector(".city").innerText=`${photographer.city},${photographer.country}`;
  document.querySelector(".desc").innerText=photographer.tagline;
  const tags=document.querySelector(".tags");
  photographer.tags.forEach(element => {
    const tagItem=creatEltWithClassName("li","tags-item");
    tags.appendChild(tagItem);
    const linkTags=creatLinkElt(`index.html?tag=${element}`,"linkTags");
    tagItem.appendChild(linkTags);
    linkTags.innerText=`#${element}`;
  });
  const imgPhotographer=document.querySelector(".user");
  imgPhotographer.setAttribute("src",`./media/PhotographersIDPhotos/${photographer.portrait}`);
  imgPhotographer.setAttribute("alt", photographer.name);
};

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


const orderbtn=document.querySelector(".sort-btn");
const orderByList=document.querySelector(".sort-list");

// show /hide listbox on click
orderbtn.addEventListener("click", ()=>{
  if(orderByList.style.display==="none"){
    orderbtn.style.display="none";
    orderByList.style.display="block";
  }
});
orderByList.addEventListener("keydown",(e)=>{
  const keyCode=e.keyCode ? e.keyCode : e.which;
  if(keyCode===27){
    orderByList.style.display="none";
    orderbtn.style.display="flex"; 
  }else if(keyCode===13){
    build(e);
  }
});
const build=(event)=>{
  const btnText=document.querySelector(".btn-text");
  orderByList.style.display="none";
  let orderSelected=event.target.dataset.order;
  typeof(orderSelected)=="undefined" ? btnText.innerHTML="Popularité" : btnText.innerHTML=orderSelected;
  orderbtn.style.display="flex";
  const section=document.querySelector(".gallery");
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
  const galleryLink=document.querySelectorAll(".linksourc");

  galleryLink.forEach(element=>{
    element.addEventListener("click",()=>{
      openGallery(element);
    });
  });
};
// rebuild gallary media after user select order
orderByList.onclick=(event)=>build(event);



const price=document.querySelector(".price");

window.onload=likeCounter();

// add the price to DOM 
price.innerText=`${photographer.price}€/jour`;
/////////form
window.onload=form();
// light box



const btnNext=document.querySelector(".right-side");
const btnPrivous=document.querySelector(".left-side");
const close=document.querySelector(".close-lightBox");
const galleryLink=document.querySelectorAll(".linksourc");

galleryLink.forEach(element=>{
  element.addEventListener("click",()=>{
    openGallery(element);
  });
});
close.addEventListener("click", closeLightBox);



// const itemTage=document.querySelectorAll(".tags-item");
// itemTage.forEach(element=>{
//   element.addEventListener("click",()=>{
//     location.href="index.html";
//   })
// })


btnNext.addEventListener("click",NextItem);

btnPrivous.addEventListener("click",PrivousItem);
export {phototgrapherMedia,photographer} ;