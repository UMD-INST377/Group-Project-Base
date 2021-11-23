fetch('http://localhost:3000/api/price').then(
  res => {
    res.json().then(
      data => {
        console.log(data.data);
        if (data.data.length > 0) {

          var temp = "";
          data.data.forEach((itemData) => {
            temp += '<tr>';
            temp += '<td>' + itemData.game_id + "</td>";
            temp += "<td>" + itemData.game_name + "</td>";
            temp += "<td>" + itemData.release_date + "</td>";
            temp += "<td>" + itemData.free_to_play + "</td>";
            temp += "<td>" + itemData.player_population + "</td></tr>";
          });
          document.getElementById('data').innerHTML = temp;
        }
      }
    )
  }
)