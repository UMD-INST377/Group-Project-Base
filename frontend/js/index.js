function editData(value) {
    window.location.href = `edit.html?id=${value}`
}

function deleteData(value) {
    //make an api call to the delete endpoint
    var url = `http://localhost:3000/api/review/${value}`
    fetch(url, {
        method: "DELETE"
    })
    .then(() => {
        alert("Data Deleted Successfully")
        window.location.reload();
    })
    .catch((err) => {
        console.log(err)
    })
}

function fetchData() {
    var url = "http://localhost:3000/api/all-reviews"
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        var dataGotten = data.data[0]
        var html = "<table border='1|1'>";
        html+= "<thead>";
        html+= "<tr>";
        html+= "<th>Restaurant Name</th>";
        html+= "<th>Ratings</th>";
        html+= "<th>Reviews</th>";
        html+= "<th>Description</th>";
        html+= "<th>Actions</th>";
        html+= "</tr>";
        html+= "<thead>";
        html+= "</thead>";
        for (var i = 0; i < dataGotten.length; i++) {
            var $x = "a"
            html+="<tr>";
            html+="<td>"+dataGotten[i].restaurant_name+"</td>";
            html+="<td>"+dataGotten[i].avg_star_rating+"</td>";
            html+="<td>"+dataGotten[i].review_desc+"</td>";
            html+="<td>"+dataGotten[i].description+"</td>";
            html+='<td><button onclick="editData('+dataGotten[i].review_id+')">Edit</button>';
            html+='<button onclick="deleteData('+dataGotten[i].restaurant_id+')">Delete</button></td>';
            
            html+="</tr>";

        }
        html+="</table>";
        document.getElementById("box").innerHTML = html;
        console.log(data.data[0])
    })
    .catch((err) => console.log(err))
}

