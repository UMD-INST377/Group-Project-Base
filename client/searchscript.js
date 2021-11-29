const displayData = async () => {
  let data = await fetch('https://group4-final-inst377fa2021.herokuapp.com/api/hotel_overview')
  let res = await data.json();

  let text = "";
  res.data.forEach(element => {
      text += `${element.hotel_name} ${element.name} \n`;
  })

  document.getElementById('data').innerText = text;
}

displayData();
