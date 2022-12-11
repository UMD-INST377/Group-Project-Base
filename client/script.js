function injectHTML(list, htmlelm) {
  let target = document.querySelector(htmlelm);
  target.innerHTML = '';
  
  // populate table head
  const head = document.createElement('tr');
  for (const key of Object.keys(list[0])) {
    const th = document.createElement('th');
    th.innerText = cap(key);
    head.appendChild(th);
  }
  target.appendChild(head);

  // populate table content
  for (const [key, value] of Object.entries(list)) {
    const tr = document.createElement('tr');
    const row = Object.values(value);
    row.forEach(element => {
      const td = document.createElement('td');
      td.innerText = element;
      tr.appendChild(td);
    });
    target.appendChild(tr);
  }
  console.log('injected');
}

function cap(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


function getRandInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function filterlist(list, filterInputvalue) {
  return list.filter((i) => {
    if (!i) { return; }
    const lowerCaseName = JSON.stringify(i).toLowerCase();
    const lowerCaseQuery = filterInputvalue.toLowerCase();
    return lowerCaseName.includes(lowerCaseQuery);
  });
}

function addButt(htmlelm) {
  const form = document.querySelector(htmlelm);
  for (var i = 0; i < 11; i++) {
    var div = document.createElement('div');
    var btn = document.createElement('input');
    var labl = document.createElement('label');
    div.className = 'combo';
    btn.className = 'radiobutt';
    btn.type = 'radio';
    btn.name = 'butt';
    const year = 2022 - i;
    btn.id = year;
    btn.value = year;
    labl.htmlFor = year;
    labl.innerText = year;
    if (year === 2022) {
      btn.checked = true;
    }
    div.appendChild(btn);
    div.appendChild(labl);
    form.appendChild(div);
  }
}

async function fetchJson(yr) {
  const main = await fetch(`api/finServices/${yr}`);
  return await main.json();
}

async function mainEvent() {
  
  // hide button
  const submit = document.querySelector('#get');
  submit.style.display = 'none';

  // show the table 
  let yrtitle = '2022';
  let yr = document.querySelector('.yr_form');
  let data = await fetchJson(2022);
  injectHTML(data['data'], '#rlist');
  let table = document.querySelector('#yrtitle');
  let title = document.createElement('h2');
  title.innerText = 'Data from ' + yrtitle;
  table.appendChild(title);

  // click button to change the year
  yr.addEventListener('input', async (event) => {
    event.preventDefault();
    data = await fetchJson(event.target.value);
    console.log(data.data.length);
    if (data.data.length > 0) {
      document.querySelector('#rlist')
        .addEventListener('load', injectHTML(data['data'], '#rlist'));
      yrtitle = await event.target.value;
      // add table title
      title.innerText = 'Data from ' + yrtitle;
      table.replaceChild(title);
    }
  });

  // search box
  if (data.data.length > 0) {
    let search = document.querySelector('.sr_form');
    search.addEventListener('input', async (event) => {
      console.log(event.target.value)
      const flist = await filterlist(data['data'], event.target.value);
      injectHTML(flist, '#rlist');
    });
    submit.style.display = 'block';
    search.addEventListener('submit', async (event) => {
      event.preventDefault();
    });
  }

  expo = data;
}

// export the variable
let expo;
// run main
document.addEventListener('DOMContentLoaded', async () => mainEvent());
