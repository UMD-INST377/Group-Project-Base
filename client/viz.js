async function fetchJson(yr) {
    const main = await fetch(`api/finServices/${yr}`);
    return await main.json();
}

// Code for the making the chart 
async function getChart(data, category) {

    const arr = data.map(i => ({ 'category': i[category], 'amount': i.amount }));

    const labels = [...new Set(data.map((i) => i[category]))];
    let count = {};
    labels.forEach(i => count[i] = 0);

    arr.forEach(i => {
        Object.keys(count).forEach(key => {
            if (key == i.category) { count[key] += parseFloat(i.amount); }
        })
    });

    updatec(myChart, labels, count);
    updatec(barchart, labels, count);
    console.log(category, 'chart delivered');
}


//update chart
async function updatec(chart, labels, count) {
    chart.config.data.labels = labels;
    chart.config.data.datasets[0].label = "Total";
    chart.config.data.datasets[0].data = Object.values(count);
    chart.update();
    console.log(chart, category, 'chart updated');
}

const dochart = document.getElementById('dochart');
const bar = document.getElementById('barchart');

const myChart = new Chart(dochart, {
    type: "doughnut",
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Black", "Grey", "Pink",],
        datasets: [{
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
        },],
    }
});

const barchart = new Chart(bar, {
    type: "bar",
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange", "Black", "Grey", "Pink",],
        datasets: [{
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1,
        },],
    }
});

async function mainEvent() {
    let yr = document.querySelector('.yr_form');
    let data = await fetchJson(2022);
    console.log(data.data.length);
    await getChart(data.data, 'agency');

    yr.addEventListener('input', async (event) => {
        event.preventDefault();
        data = await fetchJson(event.target.value);
        console.log(data.data.length);
        await getChart(data.data, 'agency');
    });

    if (data.data.length > 0) {
        let b1 = document.querySelector('#b1');
        let b2 = document.querySelector('#b2');
        let b3 = document.querySelector('#b3');
        b1.addEventListener('click', async (event) => {
            event.preventDefault();
            await getChart(data.data, 'payee_name');
        });
        b2.addEventListener('click', async (event) => {
            event.preventDefault();
            await getChart(data.data, 'agency');
        });
        b3.addEventListener('click', async (event) => {
            event.preventDefault();
            await getChart(data.data, 'zip_code');
        });
    }
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

document.addEventListener("DOMContentLoaded", async () => mainEvent());
