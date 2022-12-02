export async function loadCrimeIncidentsData(req, res, next) {
  try {
    const url = 'https://data.princegeorgescountymd.gov/Public-Safety/Crime-Incidents-February-2017-to-Present/wb4e-w4nf.json'; // remote URL! you can test it in your browser
    const data = await fetch(url);
    const json = await data.json();

    const reply = json.filter((item) => Boolean(item.geocoded_column_1)).filter((item) => Boolean(item.name));

    console.log('Results in CrimeIncidentsData middleware', json.length);
    req.CrimeIncidentsData = reply;
    next();
  } catch (err) {
    console.log('Data request failed', err);
    res.json({ message: 'Data request failed', error: err });
  }
}
