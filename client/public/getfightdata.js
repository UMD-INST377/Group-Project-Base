async function fightList() {
  const list = document.querySelector('.figlist');
  const req = await fetch('/api/fight_mode');
  const fighters = await req.json();
  fighters.forEach((fighter) => {
    const newRecord = document.createElement('details');
    newRecord.innerHTML = `
        <summary>${fighter.common_name}</summary>
        <div class= 'columns'> 
          <div class = 'column is-half'>
            <div class="content listings">
                <h1>Animal Name: ${fighter.common_name}</h1>
                <h3>Fight Mode ID: ${fighter.fight_mode_id}</h3>
                <h3>Special skill: ${fighter.special_skill}</h3>
                <h3>Weapon Of Choice : ${fighter.weapon_of_choice}</h3>
            </div>
          </div>
          <div class = 'column is-half'>
            <img src='images/${fighter.Animal_ID}.jpg'>
          </div>
        </div>`;
    list.append(newRecord);
  });
}

async function windowsActions() {
  await fightList();
    
}
  
window.onload = windowsActions;