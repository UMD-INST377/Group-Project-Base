function loadJudeChart(collection) {
    console.log('loadJudeChart()');
    const chartElement = document.querySelector('#judeChart');
    const myChart = new Chart(chartElement, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
function loadIsaacChart(collection) {
    console.log('loadIsaacChart()');
    const chartElement = document.querySelector('#isaacChart');
    const myChart = new Chart(chartElement, {
        type: 'bar',
        data: {
            labels: ['0-10', 'Bl', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}


async function loadCharts() {
    console.log('loadCharts()');
    const genres = await getData('/jude/genres');
    const actors = await getData('/isaac/actors');

    ages = {
        '20':0,
        '40':0,
        '60':0,
        '80':0,
        '100':0,
    };
    //labels
    data: ages.values();
    actors.forEach((item)) => {
        if (0 <= item.age_of_person && item.age_of_person >= 20) {
            ages['20] += 1;
        }else if () {

        }

            
        }
    });
    loadIsaacChart(actors);
    loadJudeChart(genres);
}

document.addEventListener('DOMContentLoaded', async () => loadCharts());
