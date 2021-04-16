window.onload = async function () {
    console.log("Testing club data fetching")
    const request = await fetch('/api/clubs');
    const clubs = await request.json();
    console.log(clubs)
}