


import photographerElt from './PhotographerElt.js';
import {tagsSelected} from './index.js';
import dataJson from './fetchData.js'
let photograherToDisplay=new Array();


const getPhotographers=()=>{
  photograherToDisplay=[];
    for(let i in dataJson.photographers){
      if(tagsSelected.length==0){
        photograherToDisplay.push(dataJson.photographers[i]);
      }else if(tagsSelected.every(item=>dataJson.photographers[i].tags.includes(item))){
        photograherToDisplay.push(dataJson.photographers[i]);
      }
    }
    
    return photograherToDisplay;

}
export { getPhotographers};