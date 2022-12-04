console.log("hello");

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  getCheckboxValue();
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    window.location.reload();
    modal.style.display = "none";
  }
};

function ttt(data) {
  console.log(data);
  //   data.forEach((element, index) => {
  //
  //   });
  //   data.forEach(myFunction);
  //   function myFunction(item, index) {
  //     for (var i = 0; i < item.length; i++) {
  //       console.log(i);
  //       document.getElementById("farm_name").innerHTML = item.farm_name;
  //     }
  //   }

  let items = "";
  for (var i = 0; i < data.length; i++) {
    items += ` <strong>Farm Name </strong> : ${
      data[i].farm_name !== undefined ? data[i].farm_name : ""
    } <br/>`;
    items += `<strong>Category </strong> : ${data[i].category} <br/>`;
    items += `<strong>Item</strong> : ${data[i].item} <br/>`;
    items += `<strong>Website</strong> : <a href =" ${data[i].website.url}"> ${data[i].website.url}</a> <br/>`;
    items += `<strong>Address</strong> : ${data[i].location_1.human_address}<br/>`;
    items += `<strong>Phone</strong> : ${data[i].phone1}<br/>`;
    items += `<strong>Zipcode</strong> : ${data[i].zipcode}<br/> <br/><br/>`;
    document.getElementById("farm_name").innerHTML = items;
    document.getElementById("category").innerHTML = items;
    document.getElementById("item").innerHTML = items;
    document.getElementById("website").innerHTML = items;
    document.getElementById("human_address").innerHTML = items;
    document.getElementById("phone").innerHTML = items;
    document.getElementById("zipcode").innerHTML = items;
  }
  return items;
}
function getCheckboxValue() {
  var l1 = document.getElementById("check1");
  var l2 = document.getElementById("check2");
  var l3 = document.getElementById("check3");
  var l4 = document.getElementById("check4");
  var l5 = document.getElementById("check5");
  var l6 = document.getElementById("check6");
  var l7 = document.getElementById("check7");
  var l8 = document.getElementById("check8");
  var l9 = document.getElementById("check9");
  var l10 = document.getElementById("check10");
  var l11 = document.getElementById("check11");
  var l12 = document.getElementById("check12");
  var l13 = document.getElementById("check13");
  var l14 = document.getElementById("check14");
  var l15 = document.getElementById("check15");
  var l16 = document.getElementById("check16");
  var l17 = document.getElementById("check17");
  var l18 = document.getElementById("check18");
  var l19 = document.getElementById("check19");
  var l20 = document.getElementById("check20");

  var res = "";
  if (l1.checked == true) {
    var pl1 = document.getElementById("check1").value;
    res = pl1;
    console.log(res);
  } else if (l2.checked == true) {
    var pl2 = document.getElementById("check2").value;
    res = res + pl2;
  } else if (l3.checked == true) {
    document.write(res);
    var pl3 = document.getElementById("check3").value;
    res = res + pl3;
  } else if (l4.checked == true) {
    var pl4 = document.getElementById("check4").value;
    res = res + pl4;
  } else if (l5.checked == true) {
    var pl5 = document.getElementById("check5").value;
    res = res + pl5;
  } else if (l6.checked == true) {
    var pl6 = document.getElementById("check6").value;
    res = res + pl6;
  } else if (l7.checked == true) {
    var pl7 = document.getElementById("check6").value;
    res = res + pl7;
  } else if (l8.checked == true) {
    var pl8 = document.getElementById("check8").value;
    res = res + pl8;
  } else if (l9.checked == true) {
    var pl9 = document.getElementById("check9").value;
    res = res + pl9;
  } else if (l10.checked == true) {
    var pl10 = document.getElementById("check10").value;
    res = res + pl10;
  } else if (l11.checked == true) {
    var pl11 = document.getElementById("check11").value;
    res = res + pl11;
  } else if (l12.checked == true) {
    var pl12 = document.getElementById("check12").value;
    res = res + pl12;
  } else if (l13.checked == true) {
    var pl13 = document.getElementById("check13").value;
    res = res + pl13;
  } else if (l14.checked == true) {
    var pl14 = document.getElementById("check14").value;
    res = res + pl14;
  } else if (l15.checked == true) {
    var pl15 = document.getElementById("check15").value;
    res = res + pl15;
  } else if (l16.checked == true) {
    var pl16 = document.getElementById("check16").value;
    res = res + pl16;
  } else if (l17.checked == true) {
    var pl17 = document.getElementById("check17").value;
    res = res + pl17;
  } else if (l18.checked == true) {
    var pl18 = document.getElementById("check18").value;
    res = res + pl18;
  } else if (l19.checked == true) {
    var pl19 = document.getElementById("check19").value;
    res = res + pl19;
  } else if (l20.checked == true) {
    var pl20 = document.getElementById("check20").value;
    res = res + pl20;
  } else {
  }
  console.log(res);

  fetch("https://data.ct.gov/resource/hma6-9xbg.json?item=" + res)
    .then((response) => response.json())
    .then((data) => ttt(data));
}