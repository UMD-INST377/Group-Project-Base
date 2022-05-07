// Get a standard color palette of size 'num'
function getColors(num) {
    // console.log('getColors()');
    const colorStops = ['red', 'purple', 'blue', 'green', 'yellow', 'orange'];
    return chroma.scale(colorStops).colors(num);
}

// Create and populate 'Movies per Director' chart
function loadJudeChart(movieData, directorData) {
    // console.log('loadJudeChart()');
    const chartElement = document.querySelector('#judeChart');

    // Process and combine data collected from API
    const title = 'Movies per Director';
    const colors = getColors(directorData.length);
    let data = {};
    directorData.forEach((dirItem) => {
        const fullName = `${dirItem.director_fname} ${dirItem.director_lname}`;
        data[fullName] = 0;
        movieData.forEach((movieItem) => {
            if (movieItem.director_id === dirItem.director_id) {
                data[fullName] += 1;
            }
        });
    });

    // Set up chart dataset
    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: title,
                data: Object.values(data),
                backgroundColor: colors,
                borderWidth: 1,
            },
        ],
    };
    // Configure chart appearance/behavior
    const chartConfig = {
        type: 'doughnut',
        data: chartData,
        options: {
            plugins: {
                // Hide the chart legend because there are so many directors
                legend: false,
                // Force the chart title to display
                title: {
                    display: true,
                    text: title,
                },
            },
        },
    };
    // Create the chart
    const judeChart = new Chart(chartElement, chartConfig);
}

function loadIsaacChart(actorData) {
    // console.log('loadIsaacChart()');
    const chartElement = document.querySelector('#isaacChart');

    const title = 'Age of Actors';
    let data = {
        '1-20': 0,
        '21-40': 0,
        '41-60': 0,
        '61-80': 0,
        '81-100': 0,
    };
    actorData.forEach((dirItem) => {
        if (0 <= dirItem.age_of_person && dirItem.age_of_person <= 20) {
            data['1-20'] += 1;
        } else if (21 <= dirItem.age_of_person && dirItem.age_of_person <= 40) {
            data['21-40'] += 1;
        } else if (41 <= dirItem.age_of_person && dirItem.age_of_person <= 60) {
            data['41-60'] += 1;
        } else if (61 <= dirItem.age_of_person && dirItem.age_of_person <= 80) {
            data['61-80'] += 1;
        } else if (81 <= dirItem.age_of_person && dirItem.age_of_person <= 100) {
            data['81-100'] += 1;
        }
    });
    const colors = getColors(Object.keys(data).length);

    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: title,
                data: Object.values(data),
                backgroundColor: colors,
                borderWidth: 1,
            },
        ],
    };
    const chartConfig = {
        type: 'bar',
        data: chartData,
        options: {
            plugins: {
                legend: false,
                // Force the chart title to display
                title: {
                    display: true,
                    text: title,
                },
            },
        },
    };
    const isaacChart = new Chart(chartElement, chartConfig);
}

function loadAgyaChart(roleData, actorData) {
    // console.log('loadAgyaChart()');
    const chartElement = document.querySelector('#agyaChart');

    const title = 'Roles per Actor';
    let data = {};
    actorData.forEach((actorItem) => {
        const fullName = `${actorItem.first_name} ${actorItem.last_name}`;
        data[fullName] = 0;
        roleData.forEach((roleItem) => {
            if (roleItem.actor_id === actorItem.actor_id) {
                data[fullName] += 1;
            }
        });
    });
    const colors = getColors(Object.keys(data).length);

    const chartData = {
        labels: Object.keys(data),
        datasets: [{
            label: title,
            data: Object.values(data),
            backgroundColor: colors,
            borderWidth: 1
        }]
    };

    const chartConfig = {
        type: 'pie',
        data: chartData,
        options: {
            plugins: {
                legend: false,
                // Force the chart title to display
                title: {
                    display: true,
                    text: title,
                },
            },
        },
    };
    const agyaChart = new Chart(chartElement, chartConfig);
}

function loadStefChart(movieData) {
    // console.log('loadStefChart()');
    const chartElement = document.querySelector('#stefChart');

    const title = 'Movies by Release Year';
    let data = {};
    movieData.forEach((item) => {
        const year = item.movie_year;
        if (year in data) {
            data[year] += 1;
        } else {
            data[year] = 0;
        }
    });
    const colors = getColors(data.length);

    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: title,
                data: Object.values(data),
                backgroundColor: colors,
                borderWidth: 1,
            },
        ],
    };

    const chartConfig = {
        type: 'bar',
        data: chartData,
        options: {
            indexAxis: 'y',
            plugins: {
                legend: false,
                title: {
                    display: true,
                    text: title,
                },
            },
        },
    };
    const stefChart = new Chart(chartElement, chartConfig);
}

function loadOwenChart(directorData) {
    console.log('loadOwenChart()');
    const chartElement = document.querySelector('#owenChart');

    const title = 'Directors per State';

    let data = {};
    directorData.forEach((dirItem) => {
        const state = dirItem.home_state;
        data[state] = 0;
        directorData.forEach((direItem) => {
            if (direItem.home_state === dirItem.home_state) {
                data[state] += 1;
            }
        });
    });

    const colors = getColors(Object.keys(data).length);

    const chartData = {
        labels: Object.keys(data),
        datasets: [
            {
                label: title,
                data: Object.values(data),
                backgroundColor: colors,
                borderWidth: 1,
            },
        ],
    };

    const chartConfig = {
        type: 'pie',
        data: chartData,
        options: {
            plugins: {
                legend: false,
                title: {
                    display: true,
                    text: title,
                },
            },
        },
    };

    const owenChart = new Chart(chartElement, chartConfig);
}


async function loadCharts() {
    // console.log('loadCharts()');
    const directors = await getData('/owen/directors');
    const movies = await getData('/stef/movies');
    const actors = await getData('/isaac/actors');
    const role = await getData('/agya/roles');

    loadJudeChart(movies, directors);
    loadIsaacChart(actors);
    loadAgyaChart(role, actors);
    loadStefChart(movies);
    loadOwenChart(directors);
}

document.addEventListener('DOMContentLoaded', async () => loadCharts());
