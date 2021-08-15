
/*
* apply style on tags selected
*
*@return{void}
*/
const styleTags=()=>{
  const tagsItem=document.querySelectorAll(".linkTags");
  tagsItem.forEach(ele=>{
    const url=new URL(window.location.href);
    const tagselected=url.searchParams.get("tag");
    tagselected===ele.innerHTML.substr(1).toLowerCase()?ele.classList.add("selected"):ele.classList.remove("selected");
  });
};
/*
* filter tags (show/hide photographer depending tags selected)
*
*@param{e} event handler 
*@param{element} tag element has clicked
*
*@return{void}
*/
const filterTags=(e,element)=>{
  e.preventDefault();
  const str=`${element.innerHTML.toLowerCase()}`;
  const url=new URL(window.location.href);
  if(url.searchParams.get("tag")===str.substr(1)){
    element.classList.remove("selected");
    url.searchParams.delete("tag");
    history.pushState(null,"",url);
    const tagselected=url.searchParams.get("tag");
    const art=document.querySelectorAll(".photographer");
    if(tagselected===null){
      art.forEach(ele=>{
        ele.style.display="block";
      });
    }
    styleTags();
  }else{
    url.searchParams.set("tag",str.substr(1));
    history.pushState(null,"",url);
    const tagselected=url.searchParams.get("tag");
    const art=document.querySelectorAll(".photographer");
    art.forEach(ele=>{
      const tags=ele.getAttribute("data-tags");
      const arr=JSON.parse(tags);
      if(arr.find(item=>tagselected.includes(item))){
        ele.style.display="block";
      }else{
        ele.style.display="none";
      }
    });
    styleTags();
  }
};
export {filterTags,styleTags};