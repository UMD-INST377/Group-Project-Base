async function getData() {
    console.log('data request');
    const result = document.querySelector('#result');
    const request = await fetch('http://localhost:3000/api/museum_team7');
    const tableData = await request.json();
    // return tableData;
  
    tableData.data.forEach((museum) => {
      console.log(museum);
      const appendItem = document.createElement('tr');
      // appendItem.classList.add('title', 'has-text-centered', 'is-parent', 'is-3');
      appendItem.innerHTML = `
        <td> ${museum.museum_id} </td>
        <td> ${museum.museum_name} </td>
        <td> ${museum.museum_email} </td>
        <td> ${museum.museum_url} </td>
        <td> ${museum.museum_phone_num} </td>
        <td> ${museum.museum_entry_fee} </td>
        <td> ${museum.museum_open_time} </td>
        <td> ${museum.date_museum_opened} </td>
        <td> ${museum.museum_capacity} </td>
        <td> ${museum.museum_size} </td>
        <td> ${museum.museum_parent} </td>
        <td> ${museum.museum_close_time} </td>
        <td> ${museum.museum_budget} </td>
        <td> ${museum.museum_address} </td>
        <td> ${museum.museum_city} </td>
        <td> ${museum.museum_zipcode} </td>`;
      result.append(appendItem);
    });
  }
  window.onload = getData;
  // class="has-text-light"
  // class="title is-child box has-background-link-dark"
  // class="subtitle has-text-light has-text-weight-bold"
  