console.log('hello');

const modal = document.getElementById('myModal');

// Get the button that opens the modal
const btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  // eslint-disable-next-line no-use-before-define
  getCheckboxValue();
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    window.location.reload();
    modal.style.display = 'none';
  }
};

function ttt(data) {
  console.log(data);
     data.forEach((element, index) => {
  
  //   });
  //   data.forEach(myFunction);
  //   function myFunction(item, index) {
  //     for (var i = 0; i < item.length; i++) {
  //       console.log(i);
  //       document.getElementById("farm_name").innerHTML = item.farm_name;
  //     }
  //   }

  let items = '';
  for (let i = 0; i < data.length; i + 1) {
    items += ` <strong>Farm Name </strong> : ${
      data[i].farm_name !== undefined ? data[i].farm_name : ''
    } <br/>`;
    items += `<strong>Category </strong> : ${data[i].category} <br/>`;
    items += `<strong>Item</strong> : ${data[i].item} <br/>`;
    items += `<strong>Website</strong> : <a href =" ${data[i].website.url}"> ${data[i].website.url}</a> <br/>`;
    items += `<strong>Address</strong> : ${data[i].location_1.human_address}<br/>`;
    items += `<strong>Phone</strong> : ${data[i].phone1}<br/>`;
    items += `<strong>Zipcode</strong> : ${data[i].zipcode}<br/> <br/><br/>`;
    document.getElementById('farm_name').innerHTML = items;
    document.getElementById('category').innerHTML = items;
    document.getElementById('item').innerHTML = items;
    document.getElementById('website').innerHTML = items;
    document.getElementById('human_address').innerHTML = items;
    document.getElementById('phone').innerHTML = items;
    document.getElementById('zipcode').innerHTML = items;
  }
  return items;
}
function getCheckboxValue() {
  const l1 = document.getElementById('check1');
  const l2 = document.getElementById('check2');
  const l3 = document.getElementById('check3');
  const l4 = document.getElementById('check4');
  const l5 = document.getElementById('check5');
  const l6 = document.getElementById('check6');
  const l7 = document.getElementById('check7');
  const l8 = document.getElementById('check8');
  const l9 = document.getElementById('check9');
  const l10 = document.getElementById('check10');
  const l11 = document.getElementById('check11');
  const l12 = document.getElementById('check12');
  const l13 = document.getElementById('check13');
  const l14 = document.getElementById('check14');
  const l15 = document.getElementById('check15');
  const l16 = document.getElementById('check16');
  const l17 = document.getElementById('check17');
  const l18 = document.getElementById('check18');
  const l19 = document.getElementById('check19');
  const l20 = document.getElementById('check20');

  let res = '';
  if (l1.checked === true) {
    const pl1 = document.getElementById('check1').value;
    res = pl1;
    console.log(res);
  } else if (l2.checked === true) {
    const pl2 = document.getElementById('check2').value;
    res += pl2;
  } else if (l3.checked === true) {
    document.write(res);
    const pl3 = document.getElementById('check3').value;
    res += pl3;
  } else if (l4.checked === true) {
    const pl4 = document.getElementById('check4').value;
    res += pl4;
  } else if (l5.checked === true) {
    const pl5 = document.getElementById('check5').value;
    res += pl5;
  } else if (l6.checked === true) {
    const pl6 = document.getElementById('check6').value;
    res += pl6;
  } else if (l7.checked === true) {
    const pl7 = document.getElementById('check6').value;
    res += pl7;
  } else if (l8.checked === true) {
    const pl8 = document.getElementById('check8').value;
    res += pl8;
  } else if (l9.checked === true) {
    const pl9 = document.getElementById('check9').value;
    res += pl9;
  } else if (l10.checked === true) {
    const pl10 = document.getElementById('check10').value;
    res += pl10;
  } else if (l11.checked === true) {
    const pl11 = document.getElementById('check11').value;
    res += pl11;
  } else if (l12.checked === true) {
    const pl12 = document.getElementById('check12').value;
    res += pl12;
  } else if (l13.checked === true) {
    const pl13 = document.getElementById('check13').value;
    res += pl13;
  } else if (l14.checked === true) {
    const pl14 = document.getElementById('check14').value;
    res += pl14;
  } else if (l15.checked === true) {
    const pl15 = document.getElementById('check15').value;
    res += pl15;
  } else if (l16.checked === true) {
    const pl16 = document.getElementById('check16').value;
    res += pl16;
  } else if (l17.checked === true) {
    const pl17 = document.getElementById('check17').value;
    res += pl17;
  } else if (l18.checked === true) {
    const pl18 = document.getElementById('check18').value;
    res += pl18;
  } else if (l19.checked === true) {
    const pl19 = document.getElementById('check19').value;
    res += pl19;
  } else if (l20.checked === true) {
    const pl20 = document.getElementById('check20').value;
    res += pl20;
  // eslint-disable-next-line no-empty
  } else {
  }
  console.log(res);

  fetch(`https://data.ct.gov/resource/hma6-9xbg.json?item=${res}`)
    .then((response) => response.json())
    .then((data) => ttt(data));
}