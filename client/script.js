
//This will get the data into console
// fetch("https://data.princegeorgescountymd.gov/resource/jh2p-ym6a.json")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err))

fetch("https://data.princegeorgescountymd.gov/resource/jh2p-ym6a.json")
.then(function(response){
    return response.json();
})
.then(function(products){
    let placeHolder = document.querySelector("#data-output");
    let out = "";

    for(let product of products) {
        out += `
        <tr> 
        <td>${product.payee_name}</td>
        <td>${product.agency}</td>
        <td>${product.zip_code}</td>
        <td>${product.amount}</td>
        </tr>
        `;
    }

    placeHolder.innerHTML = out;
})






//Need different functions to process data
// async function getData(){
//     const response = await fetch(spendingData);
//     const data = await response.json();
//     const {agency} = data;
//     console.log(agency);
// }







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
