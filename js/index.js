let getdata=document.querySelector('photographer');

window.onload= getdataPhotographers();


function getdataPhotographers(){
  fetch('https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P5+Javascript+%26+Accessibility/FishEyeData.json')
  .then((response)=>{
    return response.json();
  })
  .then((data)=>{
    console.log(data);
  })
}