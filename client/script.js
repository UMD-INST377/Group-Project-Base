// Function that fecths the URL
async function gettingURL(){
    const queryURL= "https://api.si.edu/openaccess/api/v1.0/search?q=";
    const search_name = "culture";
    const api_key = "EmJdH60tNih9rYDose9Icg92QjX1LQF9Y2LBeZh5";
    const response = await fetch( queryURL + search_name + "&api_key=" + api_key);
    //converting to json
    const data = await response.json();
    
    const gettingrows = await data.response["rows"];
    
    // example dele
    const gettingTitle = await data.response["rows"]["1"]["title"];
  
    // lenght of the data 
    var arrayLenght = gettingrows.length;
    

    // creating and stroing the data in for loop
    let findit = document.getElementById("idtest");


    for (var i = 0; i < arrayLenght; i++) {
        
        console.log(gettingrows[i]["title"])

        const gettingTitle = gettingrows[i]["title"]
        
        //storing and selecting the data 
        let span = document.createElement("span");
        span.id = "span"

        //appending to the findit variable
        span.textContent = gettingTitle
        findit.append(span);

      }
    

      
      console.log(arrayLenght)
}

// Calling the function fetching
gettingURL();