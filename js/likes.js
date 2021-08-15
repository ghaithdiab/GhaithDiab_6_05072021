import  {phototgrapherMedia}  from "./photographerPage.js";
import dataJson from "./fetchData.js";

/*
* like function 
*
*@return{void}
*/
const likeCounter=()=>{
  const totalLikes=document.querySelector(".total-likes");
  const likebtn=document.querySelectorAll(".likes");
  let likesSum=0;
  phototgrapherMedia.forEach(element=>{
    likesSum+=element.likes;
  });
  totalLikes.innerText=likesSum;


  likebtn.forEach(element=>{
    element.addEventListener("click",()=>{
      let mediaID=element.dataset.id;
      const mediaElt=dataJson.media.find(x=>x.id==mediaID);
      mediaElt.likes++;
      totalLikes.innerText++;
      element.previousSibling.innerText=mediaElt.likes;
    });
  });
  likebtn.forEach(ele=>{
    ele.addEventListener("keydown",(e)=>{
      const keyCode=e.keyCode ? e.keyCode : e.which;
      if(keyCode===13){
        let mediaID=ele.dataset.id;
        const mediaElt=dataJson.media.find(x=>x.id==mediaID);
        mediaElt.likes++;
        totalLikes.innerText++;
        ele.previousSibling.innerText=mediaElt.likes;
      }
    });
  });
  
};
export default likeCounter;