async function createtable() {
  let currentdata = []
  let data = []
  const form = document.querySelector('.mainform')
  const table = document.querySelector('.table')
  const takeoutcheckbox = document.querySelector('#takeout')
  const deliverycheckbox = document.querySelector('#delivery')
  const parkingcheckbox = document.querySelector('#parking')

  function filtercheck(array) {
        let filterarray = array
        
        if (takeoutcheckbox.checked){
            const newfilter = filterarray.filter((item)=>item.takeout===1)
            filterarray = newfilter
        }
        if (deliverycheckbox.checked){
            const newfilter = filterarray.filter((item)=>item.delivery===1)
            filterarray = newfilter
        }
        if (parkingcheckbox.checked){
            const newfilter = filterarray.filter((item)=>item.parking===1)
            filterarray = newfilter
        }

        return filterarray
  }

  async function loadtable(array) {
    table.innerHTML=`<tbody><tr>
        <th>Restaurant Name</th>
        <th>Description</th>
    
        </tr>
        </tbody>`
    array.forEach((item) => {
      const row = document.createElement('tr')
      const restaurantname = document.createElement('td')
      restaurantname.innerHTML = item.restaurant_name

      row.appendChild(restaurantname)
      const desc = document.createElement('td')
      desc.innerHTML = item.description
      row.appendChild(desc)

      // const tk = document.createElement("td")
      // tk.innerHTML = item.takeout
      // row.appendChild(tk)

      table.appendChild(row)
    })
  }
  form.addEventListener('submit', async(event)=>{
    event.preventDefault()
    if (currentdata.length === 0) {
      const arrayFromJson = await fetch('/melody/description')
      data = await arrayFromJson.json()
      console.log(data)
      currentdata=data
      currentdata = filtercheck(data)
      console.log(currentdata, 'filter')
      loadtable(currentdata)
    } else {
      currentdata = filtercheck(data)
      loadtable(currentdata)
    }
  })
}

document.addEventListener('DOMContentLoaded', async() => {
  await createtable()
})