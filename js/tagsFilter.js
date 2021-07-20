


  let tagsSelected= new Array();
  document.querySelector('.tags').onclick=(event)=>{
    const name = event.target.dataset.name;
    if(event.target.className==="tags-item"){
      event.target.className+=" selected";
      tagsSelected.push(name);
      // console.log(tagsSelected);
      getPhotographers(tagsSelected);
    }else{
      event.target.className="tags-item";
      tagsSelected.splice(tagsSelected.indexOf(name),1);
      getPhotographers(tagsSelected);
      // console.log(tagsSelected);
    }
  }


const getPhotographers=(arr1)=>{
  fetch('js/data.json')
.then((response)=> response.json())
.then((data)=>{
  for(let i in data.photographers){
    // console.log(data.photographers[i].tags.some(item=>arr1.includes(item)));
    if(data.photographers[i].tags.some(item=>arr1.includes(item))){
      const photographers=data.photographers[i];
      
    }
  }

});

}

export {tagsSelected ,getPhotographers};