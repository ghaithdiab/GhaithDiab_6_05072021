import {creatEltWithClassName,creatimgElt,creatLinkElt} from './createElt.js';
class photographerElt{
  constructor(idPhotographer,photoId,name,country,city,tageLine,price,tags){
    this.idPhotographer=idPhotographer;
    this.photoId=photoId;
    this.name=name;
    this.country=country;
    this.city=city;
    this.tageLine=tageLine;
    this.price=price;
    this.tags=tags;
  }
  buildPhotographerElt(){
    const sectionPhotographer=document.querySelector(".photographes");
    const artPhotographer= creatEltWithClassName("article","photographer");
    sectionPhotographer.appendChild(artPhotographer);
    const linkPhotographer=creatLinkElt(`photographer.html?id=${this.idPhotographer}`,"linkPhotographer");
    linkPhotographer.setAttribute("data-id",this.idPhotographer);
    artPhotographer.appendChild(linkPhotographer);
    const photoPhotographer=creatimgElt(this.photoId,this.name,"IdPhoto");
    linkPhotographer.appendChild(photoPhotographer);
    const NamePhotographer=creatEltWithClassName("h2","photographer-name");
    NamePhotographer.innerText=this.name;
    linkPhotographer.appendChild(NamePhotographer);
    const infoPhotographer=creatEltWithClassName("p","info");
    artPhotographer.appendChild(infoPhotographer);
    const cityPhotographer=creatEltWithClassName("span","city");
    infoPhotographer.appendChild(cityPhotographer);
    cityPhotographer.innerText=`${this.city},${this.country}`;
    const descPhotographer=creatEltWithClassName("span","desc");
    infoPhotographer.appendChild(descPhotographer);
    descPhotographer.innerText=this.tageLine;
    const pricePhotographer=creatEltWithClassName("span","price");
    infoPhotographer.appendChild(pricePhotographer);
    pricePhotographer.innerText=`${this.price} €/jour`;
    const ultagsPhotographer=creatEltWithClassName("ul","tags");
    artPhotographer.appendChild(ultagsPhotographer);
    this.tags.forEach(element => {
      const itemTagsPhotographer=creatEltWithClassName("li","tags-item");
      ultagsPhotographer.appendChild(itemTagsPhotographer);
      itemTagsPhotographer.innerText=`#${element}`;
    });
  }
}

export default photographerElt;
