window.onload = async function windowActions() {
    const request = await fetch('/api/clubs');
    const clubsData = await request.json();
    const clubs = clubsData["data"]

    const tableTarget = document.querySelector("#table-target")
    const form = document.querySelector("#search")
    const input = document.querySelector(".input")
    const tableBox = document.querySelector("#table-box")
    
    clubs.forEach(element => {
        const clubName = element.club_name
        const couchName = element.coach_first_name.concat(" ", element.coach_last_name)
        const numPlayers = element.num_of_players
        const table_row = document.createElement('tr')
        table_row.innerHTML = `
            <td>${clubName}</td>
            <td>${couchName}</td>
            <td>${numPlayers}</td>
        `
        tableTarget.append(table_row)
    });

    
    function displaySearchResults() {
        const notFound = document.createElement(`p`)
        clubs.forEach(element => {
            if(element.club_name === input.value){
                notFound.remove()
                console.log(element.club_name)
                console.log(input.value)
                const clubName = element.club_name
                const couchName = element.coach_first_name.concat(" ", element.coach_last_name)
                const numPlayers = element.num_of_players

                const table_row = document.createElement('tr')
                tableTarget.innerHTML = `
                    <tr>
                        <th>Club's Name</th>
                        <th>Couch's Name</th>
                        <th>Number of Players</th>
                    </tr>
                    <tr>
                        <td>${clubName}</td>
                        <td>${couchName}</td>
                        <td>${numPlayers}</td>
                    </tr>
                `
            }
        })

        return false
    }
    form.onsubmit = displaySearchResults
    input.addEventListener('change', windowActions)
}


