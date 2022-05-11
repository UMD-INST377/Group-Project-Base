function getSingleData() {
    const queryString = window.location.search;     
    const urlParams = new URLSearchParams(queryString);
    var id = urlParams.get('id');
    fetch(`http://localhost:3000/api/review/${id}`)
    .then((response) => response.json())
    .then((data) => {
        var description = data.data.review_desc
        var ratings = data.data.avg_star_rating
        var ratingInput = document.getElementById('avgRating');
        ratingInput.value = ratings
        var descriptionInput = document.getElementById('description');
        descriptionInput.value = description
    })
    .catch((err) => {
        console.log(err)
    })
}

document.getElementById('submitBtn').addEventListener('click', function () {
    var ratingInput = document.getElementById('avgRating').value;
    var descriptionInput = document.getElementById('description').value;
    console.log(ratingInput, descriptionInput)
    const queryString = window.location.search;     
    const urlParams = new URLSearchParams(queryString);
    var id = urlParams.get('id');
    fetch(`http://localhost:3000/api/review/${id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            review_desc: descriptionInput,
            avg_star_rating: ratingInput 
        })
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        alert("Data updated successfully");
        window.location.href = 'index.html'
    })
    .catch((err) => {
        console.log(err)
    })
})