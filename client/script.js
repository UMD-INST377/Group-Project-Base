const endpoint = 'https://polar-mesa-33091.herokuapp.com/api/foodInspectionPG'

fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => rname.push(...data));