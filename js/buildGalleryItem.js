import mediaFactory from "./factoryMedia.js";
import { creatEltWithClassName ,creatLinkElt,creatimgElt} from "./createElt.js";

/*
* class to creat gallery media
*
*@params{mediaElt , type} type of media 
*
*@return{element} section of media build it
*/
class buildGalleryItem{
  constructor(props,type){
    this.props=props;
    this.type=type;
    this.like=props.likes;
    this.title=props.title;
    this.id=props.id;
  }
  buildItem=()=>{
    const section=document.querySelector(".gallery");
    const galleryItem=creatEltWithClassName('div',"gallery-item");

    const linkItem= creatLinkElt("#lightBox-modal","linksourc");
    linkItem.setAttribute("data-id",this.id);
    section.appendChild(galleryItem);
    galleryItem.appendChild(linkItem);

    //factory media return or image or video

    const media=new mediaFactory(this.props,this.type);
    linkItem.appendChild(media);

    const infoMedia=creatEltWithClassName('div',"info-item");
    const titleMedia=creatEltWithClassName("h2","title");
    titleMedia.innerText= this.title;

    const likeimage=creatimgElt("./media/heart-solid.svg", "likes", "likes");
    likeimage.setAttribute("data-id",this.id);
    
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