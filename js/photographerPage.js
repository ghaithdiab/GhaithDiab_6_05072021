import dataJson from "./fetchData.js";
import {creatEltWithClassName,creatimgElt,creatLinkElt} from './createElt.js'
// class buildPhotographerPage{
//   constructor(idPhotographer){
//     this.idPhotographer=idPhotographer;
//   }

//   getPohtographerInfo(){
//     for(const i in dataJson.photographers){
//       if(dataJson.photographers[i].id===this.idPhotographer){
//         const photographer=photographers[i];
//       }
//     }
//     const photographerPhoto=document.querySelector('.user');
//     photographerPhoto.setAttribute("src", `../media/`);
//   }
// }

const getPhotographerInfo=()=>{
  const getUrl=window.location.href;
  const url=new URL(getUrl);
  const idphotographer=url.searchParams.get("id");
  const photographer=dataJson.photographers.find(x=>x.id==idphotographer);
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
  imgPhotographer.setAttribute("src",`../media/PhotographersIDPhotos/${photographer.portrait}`);
  imgPhotographer.setAttribute("alt", photographer.name);
}

window.onload=getPhotographerInfo();
// document.querySelector(".linkPhotographer").onclick=(e)=>{
//   // const link=e.target.dataset.id;
//   // console.log(link);
  
// }