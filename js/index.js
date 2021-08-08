import { getPhotographers,getphotographerElt } from "./filterForTags.js";
import photographerElt from "./PhotographerElt.js";

/*
* build section photographers depending which tags selected
*
* @param{array} every element in the array is photographer data has the tags selected 
*
* @return {void}
*/

const buildSectionElt=(arr)=>{
    const sectionPhotographer= document.querySelector(".photographes");
    while(sectionPhotographer.firstChild){
    sectionPhotographer.firstChild.remove();
    }
    arr.forEach(element => {
    let createphoto=new photographerElt(element);
    createphoto.buildPhotographerElt();
    });
};
/*
* call the function on load 
*/
buildSectionElt(getPhotographers());

/*
* call the function that filter photographer has the tags selected
*/
document.querySelector(".tags").onclick=getphotographerElt;
const linkTags=document.querySelectorAll("linkTags");
linkTags.forEach(element=>{
    element.addEventListener("click",getphotographerElt);
})

/*
* display the scrollup button when scrolling down
*  @return {void}
*/
const scrollUp=document.querySelector(".scroll-up");


const scrollFunction=()=>{
    if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
        scrollUp.style.display="block";
    }else{
        scrollUp.style.display="none";
    }
};
/*
* scroll page to top 
* @return {void}
*/
const topfunction=()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
};
document.addEventListener("scroll", scrollFunction);
scrollUp.addEventListener("click",(e)=>{e.preventDefault();topfunction();});



export {buildSectionElt};

