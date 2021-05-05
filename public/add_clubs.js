window.onload = async function windowActions () {
    
    const form = document.getElementById("#add-button")

    // ADDING CLUBS
    function add_club() {
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

    form.onsubmit = add_club
    
}