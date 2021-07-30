import mediaFactory from "./factoryMedia.js";
import { creatEltWithClassName ,creatLinkElt,creatimgElt} from "./createElt.js";
class buildGalleryItem{
  constructor(props,type){
    this.props=props;
    this.type=type;
    this.like=props.likes;
    this.title=props.title;
  }
  buildItem=()=>{
    const section=document.querySelector(".gallery");
    const galleryItem=creatEltWithClassName('div',"gallery-item");
    const linkItem= creatLinkElt("#","linksourc");
    section.appendChild(galleryItem);
    galleryItem.appendChild(linkItem);
    const media=new mediaFactory(this.props,this.type);
    linkItem.appendChild(media);
    const infoMedia=creatEltWithClassName('div',"info-item");
    const titleMedia=creatEltWithClassName("h2","title");
    titleMedia.innerText= this.title;
    const likeimage=creatimgElt("/media/heart-solid.svg", "likes", "likes");
    const numberOfLikes=creatEltWithClassName("span", "numberOflikes");
    numberOfLikes.innerText=this.like;
    infoMedia.appendChild(titleMedia);
    infoMedia.appendChild(numberOfLikes);
    infoMedia.appendChild(likeimage);
    galleryItem.appendChild(infoMedia);
    return section;
  }
}
export default  buildGalleryItem;