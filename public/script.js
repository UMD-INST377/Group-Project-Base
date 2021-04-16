window.onload = async function () {
    console.log("Testing club data fetching")
    const request = await fetch('/api/clubs');
    const clubs = await request.json();
    console.log(clubs)


    console.log("Testing players data fetching")
    const req_players = await fetch('/api/players')
    const players = await req_players.json()
    console.log(players)
}