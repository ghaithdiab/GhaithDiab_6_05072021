import dataJson from "./fetchData.js";
import {filterTags ,styleTags} from "./filterForTags.js";
import photographerElt from "./PhotographerElt.js";

const getPhotographers=()=>{
    dataJson.photographers.forEach(element => {
        const createphotographer=new photographerElt(element);
        createphotographer.buildPhotographerElt();
    });
    const url=new URL(window.location.href);
    const tag=url.searchParams.get("tag");
    const art=document.querySelectorAll(".photographer");
    if(tag===null){
        art.forEach(ele=>{
            ele.style.display="block";
        })
        styleTags();
    }else{
        art.forEach(ele=>{
            console.log(tag);
            const tags=ele.getAttribute("data-tags");
            const arr=JSON.parse(tags);
            if(arr.find(item=>tag.includes(item))){
                ele.style.display="block";
            }else{
                ele.style.display="none";
            }
            
        })
        styleTags();
    }
};
getPhotographers();

const tagsItem=document.querySelectorAll(".linkTags");
tagsItem.forEach(element=>{
    element.addEventListener("click",(e)=>filterTags(e,element));
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



export {filterTags};

