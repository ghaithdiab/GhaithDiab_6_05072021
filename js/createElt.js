const creatEltWithClassName=(tageElt,className)=>{
  const elt=document.createElement(tageElt);
  elt.classList.add(className);
  return elt;
}

const creatimgElt=(srcImg, altImg,className)=>{
  const elt=document.createElement("img");
  elt.setAttribute("src",srcImg);
  elt.setAttribute("alt", altImg);
  elt.classList.add(className);
  return elt;
}

const creatLinkElt=(hrefLink,className)=>{
  const elt=document.createElement("a");
  elt.setAttribute("href",hrefLink);
  elt.classList.add(className);
  return elt;
}

const creatVideoElt=(srcVideo,className)=>{
  const elt=document.createElement("video");
  // elt.setAttribute("controls");
  elt.classList.add(className);
  elt.setAttribute("preload","metadata");
  const sourcElt=document.createElement("source");
  sourcElt.setAttribute("src",`${srcVideo}#t=0.1`);
  sourcElt.setAttribute("type","video/mp4");

  elt.appendChild(sourcElt);
  return elt;
}

export {creatEltWithClassName,creatimgElt,creatLinkElt,creatVideoElt};