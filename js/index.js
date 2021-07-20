
// fetch('js/data.json')
// .then((response)=> response.json())
// .then((data)=>{
//   for(let i in data){
    
//   }
// });




































// import data from './data.js';
import { getPhotographers, tagsSelected} from './tagsFilter.js';

// console.log(tagsSelected);
// import {buildPhotographerElt} from './buildPhotographerElt.js';
// import {buildHomePage} from './buildHomePage.js';
// import {tagesFilter} from './tagsFilter.js';

// window.onload=getTagsSelected;
// getPhotographers();

// let photographerNames=document.querySelectorAll('.photographer-name');
// let photoId=document.querySelectorAll('.IdPhoto');
// let location=document.querySelectorAll('.city');
// let description=document.querySelectorAll('.desc');
// let prices=document.querySelectorAll('.price');
// let article=document.querySelectorAll('.photographer');
// const creatTags=(parentElm,eltText,hrefElm)=>{
//   const liElm=document.createElement('li');
//   const linkElm=document.createElement('a');
//   linkElm.setAttribute('class', 'fliter-tag');
//   linkElm.setAttribute('href',hrefElm);
//   linkElm.setAttribute('title',eltText);
//   liElm.setAttribute('class','tags-item');
//   linkElm.setAttribute('class','fliter-tag');
//   linkElm.textContent=eltText;
//   liElm.appendChild(linkElm);
//   parentElm.appendChild(liElm);
//   return liElm;
// }
// window.onload=buildHomePage();

// function buildHomePage(){
//   for(let i=0; i<photographerNames.length; i++){
//     photographerNames[i].innerHTML=data.photographers[i].name;
//   }
//   for(let i=0; i<photoId.length;i++){
//     photoId[i].setAttribute('src',`./media/PhotographersIDPhotos/${data.photographers[i].portrait}`);
//   }
//   for(let i=0; i<location.length;i++){
//     location[i].innerHTML=`${data.photographers[i].city},${data.photographers[i].country}`;
//   }
//   for(let i=0;i<description.length;i++){
//     description[i].innerHTML=`${data.photographers[i].tagline}`;
//   }
//   for(let i=0; i<prices.length;i++){
//     prices[i].innerHTML=`${data.photographers[i].price}/jour`;
//   }

//   /*-----------get tages photographer-----------*/
//   for(let i=0; i<data.photographers.length;i++){
//     let creatul=document.createElement('ul');
//     creatul.setAttribute('class','tags');
//     article[i].appendChild(creatul);
//     for(let y=0;y<data.photographers[i].tags.length;y++){
//       creatul.appendChild(creatTags(article[i],`#${data.photographers[i].tags[y]}`,'#'));
//     }
//   }


// }
