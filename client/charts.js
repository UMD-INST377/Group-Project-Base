function loadJudeChart(collection) {
    console.log('loadJudeChart()');
    const chart = document.querySelector('#judeChart');
}

async function loadCharts() {
    console.log('loadCharts()');
    const genres = await getData('/jude/genres');

    loadJudeChart(genres);
}

document.addEventListener('DOMContentLoaded', async () => loadCharts());
