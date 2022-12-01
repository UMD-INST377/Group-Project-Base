import { response } from "express";

//This will get the data into console
const results = fetch("https://data.princegeorgescountymd.gov/resource/jh2p-ym6a.json")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));

const arrayFromJson = res.json();


function injectHTML(list) {
  console.log('fired injectHTML');
  const target = document.querySelector("#rlist");
  target.innerHTML = '';

  const listelmnt = document.createElement("ol");
  target.appendChild(listelmnt);

  list.forEach(i => {
    const element = document.createElement("li");
    element.innerText = i.name;
    listelmnt.appendChild(element);
  });
}

if (arrayFromJson.data?.length > 0){
  injectHTML(arrayFromJson);
}




let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}
