function getData() {
  try {
    const url = 'https://data.princegeorgescountymd.gov/resource/9tsa-iner.json'
    const response = await fetch('https://ghibliapi.herokuapp.com/films')
    const data = await response.json()
  } catch (err) {
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}