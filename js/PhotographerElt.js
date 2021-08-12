import {creatEltWithClassName,creatimgElt,creatLinkElt} from './createElt.js';
import { filterTags } from './index.js';
/*
*
* creat DOM elements for photographer that selected
*
* @return {void}
*/
class photographerElt{
  constructor(props){
    this.idPhotographer=props.id;
    this.photoId=`./media/PhotographersIDPhotos/${props.portrait}`;
    this.name=props.name;
    this.country=props.country;
    this.city=props.city;
    this.tageLine=props.tagline;
    this.price=props.price;
    this.tags=props.tags;
  }
  buildPhotographerElt=()=>{
    const sectionPhotographer=document.querySelector(".photographes");
    // creat article contain all elements photographer
    const artPhotographer= creatEltWithClassName("article","photographer");
    artPhotographer.setAttribute("role","photographer");
    const arr=new Array();
    this.tags.forEach(ele=>{
      arr.push(`"${ele}"`);
    })
    artPhotographer.setAttribute("data-tags",`[${arr}]`);

    sectionPhotographer.appendChild(artPhotographer);

    // creat link for photographer page contain photo and name
    const linkPhotographer=creatLinkElt(`photographer.html?id=${this.idPhotographer}`,"linkPhotographer");
    linkPhotographer.setAttribute("data-id",this.idPhotographer);
    artPhotographer.appendChild(linkPhotographer);

    const photoPhotographer=creatimgElt(this.photoId,this.name,"IdPhoto");
    linkPhotographer.appendChild(photoPhotographer);

    const NamePhotographer=creatEltWithClassName("h2","photographer-name");
    NamePhotographer.innerText=this.name;
    linkPhotographer.appendChild(NamePhotographer);
    
    // creat info elements 
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
    ultagsPhotographer.setAttribute("aria-label","Navigation entre tages de photographer");
    artPhotographer.appendChild(ultagsPhotographer);

    // creat tags elements for photographer element
    this.tags.forEach(element => {
      const itemTagsPhotographer=creatEltWithClassName("li","tags-item");
      itemTagsPhotographer.setAttribute("data-name",element);
      ultagsPhotographer.appendChild(itemTagsPhotographer);
      const linkTags=creatLinkElt("#","linkTags");
      itemTagsPhotographer.appendChild(linkTags);
      linkTags.innerText=`#${element}`;
    });
  }
}

export default photographerElt;
