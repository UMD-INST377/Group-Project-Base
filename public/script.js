window.onload = async function () {
    console.log("Testing club data fetching")
    const request = await fetch('/api/clubs');
    const clubs = await request.json();
    console.log(clubs)


    console.log("Testing players data fetching")
    const req_players = await fetch('/api/players')
    const players = await req_players.json()
    console.log(players)

    console.log("Testing players' goals data fetching")
    const req_player_goals = await fetch("/api/player_goals")
    const player_goals = await req_player_goals.json()
    console.log(player_goals)
}