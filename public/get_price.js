let gameLabel = [];
let gamePrice = [];

async function getDummyData() {
  // price table
  const data= await fetch('/api/price');
  const newData = await data.json();
  const barChatData =newData[0];
  // General table
  const secdata= await fetch('/api/general');
  const secnewData = await secdata.json();
  const secbarChatData =secnewData[0];
  // Get Data from table
  const price = barChatData.map((x) => x.listed_price)
  console.log(price)
  const name = secbarChatData.map((x) => x.game_name)
  console.log(name)

  gamePrice = price
  gameLabel = name
}
async function dummyChart() {
  await getDummyData()

  const ctx = document.getElementById('myChart').getContext('2d');

  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: gameLabel,
      datasets: [{
        label: 'Game Price',
        backgroundColor: 'rgb(54, 162, 235)',
        borderColor: 'white',
        data: gamePrice
      }
      ]
    },
    options: {
      tooltips: {
        mode: 'index'
      }
    }
})}

dummyChart();
