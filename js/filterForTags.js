import dataJson from "./fetchData.js";
import {buildSectionElt} from "./index.js";

let photograherToDisplay=new Array();

let tagsSelected= new Array();
/*
* search in photographer tags 
*
*@return {array} contain the photographers has same tags selected by user 
*/
const getPhotographers=()=>{
    photograherToDisplay=[];
    
    for(let i in dataJson.photographers){
        if(tagsSelected.length==0){
            photograherToDisplay.push(dataJson.photographers[i]);
        }else if(tagsSelected.some(item=>dataJson.photographers[i].tags.includes(item))){
            photograherToDisplay.push(dataJson.photographers[i]);
        }
    }
    
    return photograherToDisplay;
};
/*
* adding style on tag selected and put it in array 
* 
*@ param{event} event handler to an element
*
* @return {void}
*/
const getphotographerElt=(event)=>{
    const name = event.target.dataset.name;

    const listTags=document.querySelectorAll(".tags-item");

    if(event.target.className==="tags-item"){
        listTags.forEach(element=>{
            element.classList.remove("selected");
        });

        event.target.classList.add("selected");
        tagsSelected.pop();
        tagsSelected.push(name);
        buildSectionElt(getPhotographers());
    }else{

        event.target.classList.remove("selected");
        tagsSelected.splice(tagsSelected.indexOf(name),1);
        buildSectionElt(getPhotographers());
    } 
}

export { getPhotographers,getphotographerElt};