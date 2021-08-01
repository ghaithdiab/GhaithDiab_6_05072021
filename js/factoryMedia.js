import {creatimgElt,creatVideoElt} from './createElt.js'
class imageFactory{
  constructor(props){
    this.src=props.image;
    this.alt=props.alt;
    this.elt=creatimgElt(`./media/imges/${this.src}`,`${this.alt} ,closeup view`,"item");
    return this.elt;
  }
}
class videoFactory{
  constructor(props){
    this.src=props.video;
    this.elt=creatVideoElt(`./media/imges/${this.src}`, "item");
    return this.elt;
  }
}

class mediaFactory{
  constructor(props,type){
    this.src=props.image;
    this.Vsrc=props.video;
    if(type==="image"){
      const imageItem=new imageFactory(props);
      return imageItem;
    }else if(type==="video"){
      const videoItem=new videoFactory(props);
      return videoItem;
    }
  }
}


export default mediaFactory;