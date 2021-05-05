async function getData() {
    console.log('data request');
    const result = document.querySelector('#result');
    const request = await fetch('/api/museumTrans');
    const tableData = await request.json();
    // return tableData;
  
    tableData.data.forEach((name) => {
      console.log(name);
      const appendItem = document.createElement('tr');
      // appendItem.classList.add('title', 'has-text-centered', 'is-parent', 'is-3');
      appendItem.innerHTML = `
          <select><option> ${name.museum_name} </option></select>
          <select><option> ${name.museum_name} </option></select>
          <select><option> ${name.museum_name} </option></select>
          <select><option> ${name.museum_name} </option></select>
          <select><option> ${name.museum_name} </option></select>
          <select><option> ${name.museum_name} </option></select>
          <select><option> ${name.museum_name} </option></select>
          <select><option> ${name.museum_name} </option></select>`;
      result.append(appendItem);
    });
  }
  window.onload = getData;
  // class="has-text-light"
  // class="title is-child box has-background-link-dark"
  // class="subtitle has-text-light has-text-weight-bold"
