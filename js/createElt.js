/*
* create element with class Name
*
* @params{tageElt} name of tag
*
* @param{className} name class of the element
*
* @return{elt} element has created 
*/
const creatEltWithClassName=(tageElt,className)=>{
  const elt=document.createElement(tageElt);
  elt.classList.add(className);
  return elt;
};

/*
* create img element with class Name
*
* @params{srcImg} sourc of the image
*
* @param{altImg} description of the image
*
* @param{className} name class of the image
*
* @return{elt} img has created 
*/
const creatimgElt=(srcImg, altImg,className)=>{
  const elt=document.createElement("img");
  elt.setAttribute("src",srcImg);
  elt.setAttribute("alt", altImg);
  elt.classList.add(className);
  return elt;
};
/*
* create anchor element  with class Name
*
* @params{hrefLink} link of the elemnt
*
* @param{className} name class of the anchor
*
* @return{elt} anchor has created 
*/
const creatLinkElt=(hrefLink,className)=>{
  const elt=document.createElement("a");
  elt.setAttribute("href",hrefLink);
  elt.classList.add(className);
  return elt;
};
/*
* create video element  with class Name
*
* @params{srcVideo} path of video
*
* @param{className} name class of the video
*
* @return{elt} video has created 
*/
const creatVideoElt=(srcVideo,className)=>{
  const elt=document.createElement("video");
  elt.classList.add(className);
  elt.setAttribute("preload","metadata");
  const sourcElt=document.createElement("source");
  sourcElt.setAttribute("src",`${srcVideo}#t=0.1`);
  sourcElt.setAttribute("type","video/mp4");

  elt.appendChild(sourcElt);
  return elt;
};

export {creatEltWithClassName,creatimgElt,creatLinkElt,creatVideoElt};