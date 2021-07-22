
import dataJson from './fetchData.js';
import { getPhotographers } from './tagsfilter.js';
const sectionPhotographer=document.querySelector(".photographes");
let tagsSelected= new Array();
document.querySelector('.tags').onclick=(event)=>{
  

  const name = event.target.dataset.name;
  if(event.target.className==="tags-item"){
    event.target.className+=" selected";
      tagsSelected.push(name);
      console.log(getPhotographers());
  }else{
    event.target.className="tags-item";
    tagsSelected.splice(tagsSelected.indexOf(name),1);
    getPhotographers();
}}
export {tagsSelected};
