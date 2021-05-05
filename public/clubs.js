window.onload = async function windowActions() {
    const request = await fetch('/api/clubs');
    const clubsData = await request.json();
    const clubs = clubsData["data"]

    const tableTarget = document.querySelector("#table-target")
    const form = document.querySelector("#search")
    const input = document.querySelector(".input")

    // PAGE SETUP

    function setup() {
        tableTarget.innerHTML = `
            <tr>
                <th>Club's Name</th>
                <th>Coach's Name</th>
                <th>Number of Players</th>
            </tr>
        `
        clubs.forEach(element => {
            const clubName = element.club_name
            const coachName = element.coach_first_name.concat(" ", element.coach_last_name)
            const numPlayers = element.num_of_players
            const table_row = document.createElement('tr')
            table_row.innerHTML = `
                <td>${clubName}</td>
                <td>${coachName}</td>
                <td>${numPlayers}</td>
            `
            tableTarget.append(table_row)
        });
    }

    function displaySearchResults() {
        clubs.forEach(element => {
            if(element.club_name === input.value){
                const clubName = element.club_name
                const coachName = element.coach_first_name.concat(" ", element.coach_last_name)
                const numPlayers = element.num_of_players

                tableTarget.innerHTML = `
                    <tr>
                        <th>Club's Name</th>
                        <th>Coach's Name</th>
                        <th>Number of Players</th>
                    </tr>
                    <tr>
                        <td>${clubName}</td>
                        <td>${coachName}</td>
                        <td>${numPlayers}</td>
                    </tr>
                `
            }
        })

        return false
    }
    setup()
    form.onsubmit = displaySearchResults
    form.onreset = setup

    // ADDING CLUBS
    const name_input = document.getElementById("#club-name")
    const coachfn_input = document.getElementById("#first-name")
    const coachln_input = document.getElementById("#last-name")
    const num_input = document.getElementById("#num-players")

    const new_club = {
        club_name: name_input,
        coach_first_name: coachfn_input,
        coach_last_name: coachln_input,
        num_of_players: num_input
    }

    console.log(new_club)
}


