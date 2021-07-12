import data from './data.js';

let photographerNames=document.querySelectorAll('.photographer-name');
let photoId=document.querySelectorAll('.IdPhoto');
let location=document.querySelectorAll('.city');
let description=document.querySelectorAll('.desc');
let prices=document.querySelectorAll('.price');
let article=document.querySelectorAll('.photographer');
window.onload=buildHomePage();
function buildHomePage(){
  for(let i=0; i<photographerNames.length; i++){
    photographerNames[i].innerHTML=data.photographers[i].name;
  }
  for(let i=0; i<photoId.length;i++){
    photoId[i].setAttribute('src',`./media/PhotographersIDPhotos/${data.photographers[i].portrait}`);
  }
  for(let i=0; i<location.length;i++){
    location[i].innerHTML=`${data.photographers[i].city},${data.photographers[i].country}`;
  }
  for(let i=0;i<description.length;i++){
    description[i].innerHTML=`${data.photographers[i].tagline}`;
  }
  for(let i=0; i<prices.length;i++){
    prices[i].innerHTML=`${data.photographers[i].price}/jour`;
  }
 
  console.log(article);
  for(let i=0; i<article.length;i++){
    let createTagesPhotographer=document.createElement('ul');
    createTagesPhotographer.setAttribute('class','tags');
    article[i].appendChild(createTagesPhotographer);
    let NumberOfTages=data.photographers[i].tags.length;
    console.log(NumberOfTages);
    // for(let y=0;i<NumberOfTages;y++){
    //   let creatTagItem=document.createElement('li');
    //   createTagesPhotographer.appendChild(creatTagItem);
    // }
  }
}