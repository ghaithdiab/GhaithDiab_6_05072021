import { getPhotographers } from "./filterForTags.js";
import photographerElt from "./PhotographerElt.js";
let tagsSelected= new Array();

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
buildSectionElt(getPhotographers());
const listTags=document.querySelectorAll(".tags-item");
document.querySelector(".tags").onclick=(event)=>{
    const name = event.target.dataset.name;
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
};

const scrollUp=document.querySelector(".scroll-up");


const scrollFunction=()=>{
    if(document.body.scrollTop>20||document.documentElement.scrollTop>20){
        scrollUp.style.display="block";
    }else{
        scrollUp.style.display="none";
    }
};
const topfunction=()=>{
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
};
document.addEventListener("scroll", scrollFunction);
scrollUp.addEventListener("click",(e)=>{e.preventDefault();topfunction();});




export {tagsSelected};

