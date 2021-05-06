window.onload = async function windowActions () {
    
    const form = document.getElementById("remove-form")
    
    // DELETE CLUBS
    async function delete_club() {
        const id_input = document.getElementById("club-id")
        
        const req = await fetch('/api/clubs/'.concat(id_input.value), {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const msg = document.createElement('p')
        if (req){
            msg.innerHTML = "Club successfully deleted"
            form.append(msg)
        } else {
            msg.innerHTML = `Failed to delete club: ${req.status_code}`
            form.append(msg)
        }

        return false;
    }

    form.addEventListener("submit", delete_club)
    
}