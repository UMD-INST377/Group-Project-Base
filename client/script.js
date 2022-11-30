
//This will get the data into console
const spendingData = fetch("https://data.princegeorgescountymd.gov/resource/jh2p-ym6a.json")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))

//Need different functions to process data
async function getData(){
    const response = await fetch(spendingData);
    const data = await response.json();
    const {agency} = data;
    console.log(agency);
}







//The button is image code
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
