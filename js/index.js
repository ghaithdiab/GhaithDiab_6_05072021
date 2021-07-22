
import dataJson from './fetchData.js';
import { getPhotographers } from './tagsfilter.js';
import photographerElt from './PhotographerElt.js';
let tagsSelected= new Array();

const buildSectionElt=(arr)=>{
  const sectionPhotographer= document.querySelector('.photographes');
      while(sectionPhotographer.firstChild){
        sectionPhotographer.firstChild.remove()
      }
      arr.forEach(element => {
      let createphoto=new photographerElt(`./media/PhotographersIDPhotos/${element.portrait}`,
      element.name,
      element.country,
      element.city,
      element.tagline,
      element.price,
      element.tags);
      createphoto.buildPhotographerElt();
    });
}
window.onload=buildSectionElt(getPhotographers());
document.querySelector('.tags').onclick=(event)=>{
  

  const name = event.target.dataset.name;
  if(event.target.className==="tags-item"){
    event.target.classList.add("selected");
      tagsSelected.push(name);
      buildSectionElt(getPhotographers());
  }else{
    event.target.classList.remove("selected");
    tagsSelected.splice(tagsSelected.indexOf(name),1);
    buildSectionElt(getPhotographers());
}}
export {tagsSelected};
