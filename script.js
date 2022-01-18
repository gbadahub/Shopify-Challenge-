

fetch('https://api.nasa.gov/planetary/apod?api_key=hE6ZrrTSo7i1KGhdStZWAfTXCa0Mc8xb59BoiLXK&start_date=2022-01-01&end_date=2022-01-16')
.then((data) =>{ 
  return data.json()

}).then((response)=> {
  
  let display ="";
  response.forEach(element =>{
    const {title, hdurl, date, explanation} = element

    display+=`<div class="display">
    <p>${date}</p>
    <img src=${hdurl} alt="Image from Nasa" class="img"/>
    <p>${title}</p>
    <p>${explanation}</p>
    <button id=${date} onClick="changeColor(${date})" ><i  class="fas fa-heart"></i></button>
  </div>
`
  });
  

  document.getElementById("container").innerHTML = display;

}).catch((err)=>{
  console.log(err);
})

   
