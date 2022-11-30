fetch('https://data.princegeorgescountymd.gov/resource/jh2p-ym6a.json')
    .then(res => res.json)
    .then(data => console.log(data))