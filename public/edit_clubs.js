window.onload = async function windowActions () {
    
    const form = document.getElementById("edit-form")
    
    // EDITING CLUBS
    async function edit_club() {
        const id_input = document.getElementById("club-id")
        const coachfn_input = document.getElementById("first-name")
        const coachln_input = document.getElementById("last-name")
        const num_input = document.getElementById("num-players")
        const selection = document.getElementById("selection")        

        // fetching specified club
        const request = await fetch('/api/clubs/'.concat(id_input.value))
        const clubData = await request.json()
        const club = clubData[0]
        
        if(selection.value === "1"){

            const new_fname = coachfn_input.value
            const new_lname = coachln_input.value

            const req = await fetch('/api/clubs', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    club_id: club.club_id,
                    coach_first_name: new_fname,
                    coach_last_name: new_lname,
                    num_of_players: club.num_of_players
                })
            })
    
            const msg = document.createElement('p')
            if (req){
                msg.innerHTML = "Club successfully edited"
                form.append(msg)
            } else {
                msg.innerHTML = `Failed to edit club: ${req.status_code}`
                form.append(msg)
            }
        } else if (selection.value === "2"){
            const new_num_of_players = num_input.value

            const req = await fetch('/api/clubs', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    club_id: club.club_id,
                    coach_first_name: club.coach_first_name,
                    coach_last_name: club.coach_last_name,
                    num_of_players: new_num_of_players
                })
            })
    
            const msg = document.createElement('p')
            if (req){
                msg.innerHTML = "Club successfully edited"
                form.append(msg)
            } else {
                msg.innerHTML = `Failed to edit club: ${req.status_code}`
                form.append(msg)
            }
        }

        return false;
    }

    form.addEventListener("submit", edit_club)
    
}