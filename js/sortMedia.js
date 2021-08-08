/*
* class to sort media by Date
*
*@return {Array} Array of media sort it by Date
*/
class sortByDate{
  constructor(props){
    this.props=props;
    this.props.sort((a,b)=>{
      const dateA=new Date(a.date);
      const dateB=new Date(b.date);
      return dateB-dateA;
    });
    return this.props
  }
}
/*
* class to sort media by title
*
*@return {Array} Array of media sort it by title
*/
class sortByTitre{
  constructor(props){
    this.props=props;
    this.props.sort((a,b)=>a.title>b.title?1:-1);
    return this.props;
  }
}
/*
* class to sort media by number of likes
*
*@return {Array} Array of media sort it by numbers of likes
*/
class sortByPopularite{
  constructor(props){
    this.props=props;
    this.props.sort((a,b)=>{
      const LikeA=a.likes;
      const LikeB=b.likes;
      return LikeB - LikeA;
    });
    return this.props;
  }
}
/*
* factory order 
*
*@return {Array} array order it by which user select 
*/
class factoryOrder{
  constructor(orderby,props){
    this.props=props;
    this.orderby=orderby;
    this.media=new Array();
    if(this.orderby==="Date"){
      const arr=new sortByDate(this.props);
      arr.forEach(element => {
        this.media.push(element);
      });
    }else if(this.orderby==="Titre"){
      const arr=new sortByTitre(this.props);
      arr.forEach(element=>{
        this.media.push(element);
      })
    }
    else{
      const arr=new sortByPopularite(this.props);
      arr.forEach(element=>{
        this.media.push(element);
      })
    }
    return this.media;
  }

}

export default factoryOrder;