import {creatimgElt,creatVideoElt} from "./createElt.js";
/*
* create image element
*
*@params{object} object media 
*
*@return{element} image element
*/
class imageFactory{
  constructor(props){
    this.src=props.image;
    this.alt=props.alt;
    this.elt=creatimgElt(`./media/imges/${this.src}`,`${this.alt} ,closeup view`,"item");
    return this.elt;
  }
}
/*
* create video element
*
*@params{object} object media 
*
*@return{element} viedo element
*/
class videoFactory{
  constructor(props){
    this.src=props.video;
    this.title=props.title;
    this.elt=creatVideoElt(`./media/imges/${this.src}`, "item");
    this.elt.append(`"${this.title}"`);
    this.elt.setAttribute("aria-label","video");
    return this.elt;
  }
}
/*
* factory media
*
*@params{object } object media  
* 
*@params{type} type of media
*
*@return{element} media element
*/
class mediaFactory{
  constructor(props,type){
    this.src=props.image;
    this.Vsrc=props.video;
    if(type==="image"){
      return new imageFactory(props);
    }else if(type==="video"){
      return new videoFactory(props);
    }
  }
}


export default mediaFactory;