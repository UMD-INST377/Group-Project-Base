async function fetchJson(yr) {
    const main = await fetch(`api/finServices/${yr}`);
    return await main.json();
}
// Code for the fetch payee buttons //
async function getPayee() {
    fetchJson(2022).then((i) => {
        const payeeDat = i.data.map(function (index) {
            return index.payee_name;
        });
        const unique = [...new Set(i.data.map((item) => item.payee_name))];
        const count = {};

        for (const element of payeeDat) {
            if (count[element]) {
                count[element] += 1;
            } else {
                count[element] = 1;
            }
        }
        updatec(myChart,unique,count);
        updatec(barchart,unique,count);
    });
}

// Code for the fetch agency buttons //
async function getAgency(data) {
    console.log(data);
    fetchJson(2022).then((i) => {
        const agencyDat = i.data.map(function (index) {
            return index.agency;
        });

        const unique = [...new Set(i.data.map((item) => item.agency))];
        const count = {};

        for (const element of agencyDat) {
            if (count[element]) {
                count[element] += 1;
            } else {
                count[element] = 1;
            }
        }
        updatec(myChart,unique,count);
        updatec(barchart,unique,count);
    });
}

// Code for the fetch zipcode buttons //
async function getZip() {
    fetchJson(2022).then((i) => {
        const zipDat = i.data.map(function (index) {
            return index.zip_code;
        });
        const unique = [...new Set(i.data.map((item) => item.zip_code))];
        const count = {};

        for (const element of zipDat) {
            if (count[element]) {
                count[element] += 1;
            } else {
                count[element] = 1;
            }
        }
        updatec(myChart,unique,count);
        updatec(barchart,unique,count);
    });
}

//need to set this to get range instead of unique number
async function getAmount() {
    fetchJson(2022).then((i) => {
        const amountDat = i.data.map(function (index) {
            return index.amount;
        });
        const count = {};

        const range = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
        console.log(range);

        for (const x of amountDat) {
            for (const y of range) {
                if (x < y && x > y - 100) {
                    if (count[y]) {
                        count[y] += 1;
                    } else {
                        count[y] = 1;
                    }
                }
            }
        }

        const labels = [
            "0-99",
            "100-199",
            "200-299",
            "300-399",
            "400-499",
            "500-599",
            "600-699",
            "700-799",
            "800-899",
            "900-999",
            "1000+",
        ];

        updatec(myChart,unique,count);
        updatec(barchart,unique,count);
    });
}

//Change chart type
async function updatec(chart,unique,count) {
    chart.config.data.labels = unique;
    chart.config.data.datasets[0].label = "Total";
    chart.config.data.datasets[0].data = Object.values(count);
    chart.update();
}

const dochart = document.getElementById('dochart');
const bar = document.getElementById('barchart');

const myChart = new Chart(dochart, {
    type: "doughnut",
    data: {
        labels: [
            "Red",
            "Blue",
            "Yellow",
            "Green",
            "Purple",
            "Orange",
            "Black",
            "Grey",
            "Pink",
        ],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1,
            },
        ],
    }
});

const barchart = new Chart(bar, {
    type: "bar",
    data: {
        labels: [
            "Red",
            "Blue",
            "Yellow",
            "Green",
            "Purple",
            "Orange",
            "Black",
            "Grey",
            "Pink",
        ],
        datasets: [
            {
                label: "# of Votes",
                data: [12, 19, 3, 5, 2, 3],
                borderWidth: 1,
            },
        ],
    }
});

async function mainEvent() {
    let yrtitle = '2022';
    let yr = document.querySelector('.yr_form');
    let data = await fetchJson(2022);

    const b1 = document.querySelector('#b1');
    const b2 = document.querySelector('#b2');
    const b3 = document.querySelector('#b3');
    const b4 = document.querySelector('#b4');

    yr.addEventListener('input', async (event) => {
        event.preventDefault();
        data = await fetchJson(event.target.value);
        console.log(data.data.length);
        if (data.data.length > 0) {
            yrtitle = await event.target.value;
            console.log(data);
            b2.addEventListener('click', getAgency(data['data']));

        }
    });
}

document.addEventListener("DOMContentLoaded", async () => mainEvent());