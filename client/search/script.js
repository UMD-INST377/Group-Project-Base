const displayData = async () => {
  let data = await fetch(
    "https://group4-final-inst377fa2021.herokuapp.com/api/hotel_overview"
  );
  let res = await data.json();

  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < res.length; i++) {
    var div = document.createElement("div");
    div.innerHTML = res[i].hotel_name;
    mainContainer.appendChild(div);
  }
};

displayData();
