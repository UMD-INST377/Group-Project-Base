function start(){
    async function ClickGenre(event){ //This is what happens when you click on a genre.
        let genre = event.target.id;
        let request = await fetch(`/api/songs/${genre}`);
        sourceAlbums = await request.json();
    
        window.localStorage.setItem("filteredAlbums", JSON.stringify(sourceAlbums)); // Saving
        window.location.href = `/genre`; 
        
    }
    
    let element = document.getElementById('rock');
    element.onclick = ClickGenre;
    let element1 = document.getElementById('pop');
    element1.onclick = ClickGenre;
    let element2 = document.getElementById('alternative');
    element2.onclick = ClickGenre;
    let element3 = document.getElementById('indie');
    element3.onclick = ClickGenre;
    let element4 = document.getElementById('electronic');
    element4.onclick = ClickGenre;
    let element5 = document.getElementById('dance-music');
    element5.onclick = ClickGenre;
    let element6 = document.getElementById('soul');
    element6.onclick = ClickGenre;
    let element7 = document.getElementById('hiphop');
    element7.onclick = ClickGenre;

    Search();
}

async function clickSuggestion(event){
    let eventName = event.target.id;
    let request = await fetch(`/api/songs/album/${eventName}`);
    sourceAlbums = await request.json();

    window.localStorage.setItem("filteredAlbums", JSON.stringify(sourceAlbums)); // Saving
    window.location.href = `/genre`; 
}

async function Search(){
    const searchInput = document.querySelector('.search'); //This chooses an element with the class search
    const suggestions = document.querySelector('.suggestions'); //Chooses element with class suggestions

    const request = await fetch(`/api/albums`);
    const mArr = await request.json()


    function findMatches(searchQuery, mArr){
        return mArr.data.filter(song => {
            const regex = new RegExp(searchQuery, 'gi'); //regExp is an object that goes into .match method
            return song.album_name.match(regex) //|| song.category.match(regex)|| song.name.match(regex)
        });
    };

    function displayMatches(event){
        query = event.target.value;
        const matchArr = findMatches(query, mArr); //this.value is the data being input in the form
        const html = matchArr.map(Song => { //.map creates an array with equal size but replaces the values with this instead
            return ` <li class = "box">        
                    <span id='${Song.album_id}' class="sug-box name">${Song.album_name}</span> <br>
                    </li>       
            `;
    
        }).join(''); //This changes html from an array to a big string
    
        if(query){
            suggestions.innerHTML = html; //takes the html strong from html and creates html in this element
            document.querySelector('.sug-box').addEventListener('click', (evt) => clickSuggestion(evt))
        }else {
            suggestions.innerHTML = "";
        }
        
    };
    searchInput.addEventListener('change',(evt)=> displayMatches(evt));
    searchInput.addEventListener('keyup',(evt)=> displayMatches(evt));
}



window.onload = start;
