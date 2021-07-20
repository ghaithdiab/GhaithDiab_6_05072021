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

export {creatEltWithClassName,creatimgElt,creatLinkElt};