


import photographerElt from './PhotographerElt.js';
import {tagsSelected} from './index.js';
let photograherToDisplay=new Array();


let getPhotographers=()=>{
  photograherToDisplay=[];
    for(let i in dataJson.photographers){
      if(tagsSelected.length==0){
        photograherToDisplay.push(dataJson.photographers[i]);
      }else if(tagsSelected.every(item=>dataJson.photographers[i].tags.includes(item))){
        photograherToDisplay.push(dataJson.photographers[i]);
      }
    }
    
    return photograherToDisplay;
    // photograherToDisplay.forEach(element => {
    //   let createphoto=new photographerElt(`./media/PhotographersIDPhotos/${element.portrait}`,
    //   element.name,
    //   element.country,
    //   element.city,
    //   element.tagline,
    //   element.price,
    //   element.tags);
    //   createphoto.buildPhotographerElt();
    // });
}
export { getPhotographers};