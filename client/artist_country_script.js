/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable quote-props */
const data = {
  'United States': 10,
  'Spain': 1,
  'Denmark': 1,
  'United Kingdom': 1,
  'Guatemala': 1,
  'Colombia': 1,
  'France': 2,
  'Italy': 1,
  'Russia': 0,
  'Canada': 0,
  'China': 0,
  'Brazil': 0,
  'Austrailla': 0,
  'India': 0,
  'Argentina': 0,
  'Kazakhstan': 0,
  'Algeria': 0,
  'Democratic Republic of Conga': 0,
  'Saudi Arabia': 0,
  'Mexico': 0

};

const ctx = document.getElementById('artist_country_chart').getContext('2d');
const artist_country_chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Number Of Artist Per Country',
        data: Object.values(data)

      }
    ]
  },
  options: {
    backgroundColor: [
      'blue', 'green', 'yellow', 'pink', 'red', 'orange', 'grey', 'purple', 'brown'
    ],
    borderWidth: 2,
    borderColor: 'black'
  }
});