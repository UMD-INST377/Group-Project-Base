// Get a standard color palette of size 'num'
function getColors(num) {
    const colorStops = ['red', 'purple', 'blue', 'green', 'yellow', 'orange'];
    return chroma.scale(colorStops).colors(num);
}

// Create a populate 'Movies per Director' chart
function loadJudeChart(movieData, directorData) {
    console.log('loadJudeChart()');
    const chartElement = document.querySelector('#judeChart');

    // Process and combine data collected from API
    const title = 'Movies per Director';
    const colors = getColors(directorData.length);
    let data = {};
    directorData.forEach((dirItem) => {
        const fullName = `${dirItem.director_fname} ${dirItem.director_lname}`
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
        datasets: [{
            label: title,
            data: Object.values(data),
            backgroundColor: colors,
            borderWidth: 1
        }]
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
                    text: title
                }
            }
        }
    };
    // Create the chart
    const judeChart = new Chart(chartElement, chartConfig);
}

async function loadCharts() {
    console.log('loadCharts()');
    const directors = await getData('/owen/directors');
    const movies = await getData('/stef/movies');

    loadJudeChart(movies, directors);
}

document.addEventListener('DOMContentLoaded', async () => loadCharts());
