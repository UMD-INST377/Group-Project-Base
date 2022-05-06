// errors & notifications
function accountExists() {
    let errors = document.querySelector('.errors')
    errors.innerText = 'Existing account. Try again.'
    setInterval(() => {
        errors.innerText = ''}, 2500);
}
// confirms account creation
function accountCreated() {
    let errors = document.querySelector('.errors')
    errors.innerText = 'Account created. Welcome!'
    setInterval(() => {
        errors.innerText = ''}, 2500);    
}
// confirms log out
function loggedOut() {
    let errors = document.querySelector('.errors')
    errors.innerText = 'Successfully logged out.'
    setInterval(() => {
        errors.innerText = ''}, 2500);   
}
// generic error
function somethingWrong() {
    let errors = document.querySelector('.errors')
    errors.innerText = 'Something went wrong. Please try again.'
    setInterval(() => {
        errors.innerText = ''}, 2500);
}
// empty species query
function emptyResponse() {
    let errors = document.querySelector('.search-errors')
    errors.innerText = 'One of these is not a species. Try again?'
    setInterval(() => {
        errors.innerText = ''}, 2500);
}
// displays username from local storage
function loadUser() {
    if (sessionStorage.getItem('plainUser') !== null) {
        document.querySelector('p.logged_in').innerText = `Welcome, ${sessionStorage.getItem('plainUser')}!`;
        logOutButton.style.display = 'flex';
    }

}
// stores data to session
async function storeSession(userData) {
    if (typeof userData === 'undefined') {
        return;
    }
    for (const [key, value] of Object.entries(userData)) {
        sessionStorage.setItem(key, value);
    }
}
// clears all session data
function logOut() {
    sessionStorage.clear();
    clearTree();
    document.querySelector('p.logged_in').innerText = '';
    document.querySelector('.log_out').style.display = 'none';
}
// API call
async function createAccount(e) {
    e.preventDefault()
    let form = new URLSearchParams( new FormData(document.querySelector('.sign_up_form')))
    if (form.get('user') === '' || form.get('pass') === '') {
        return;
    }
    let kv = {}
    let response = fetch('/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: form
    })
    .then((res) => {
        if (res.status === 405) {
            accountExists();
            return;

        }
        if (res.status === 400) {
            somethingWrong();
            return;
        }
        accountCreated()
        return res.json();
    })
    .then((res) => {
        storeSession(res)
        loadUser()
    })
}
// SET THIS UP
async function userLogin(e){
    e.preventDefault()
    let form = new URLSearchParams( new FormData(document.querySelector('.login_form')))
    if (form.get('user') === '' || form.get('pass') === '') {
        return;
    }
    let response = fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: form
    })
    .then((res) => {
        return res.json()
    }).then((res) => {
        storeSession(res)
        loadUser()
    })
}
// API call
async function wikiSearch(e) {
    e.preventDefault();

    let search = new URLSearchParams( new FormData(document.querySelector('.species_form')))
    if (search.get('species_a') === '' || search.get('species_b') === '') {
        return;
    }
    let response = fetch('/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: search
    })
    .then((res) => {
        if (res.status === 401) {
            emptyResponse();
            throw new Error('Bad query.')
        }
        return res;
    })
    .then((res) => res.json())
    .then((res) => storeSession({ query: JSON.stringify(res)}))
    .then((done) => displayTree())
    .catch((e) => console.log(e))
}
// removes existing tree in search page
export function clearTree(){
    let displayArea = document.querySelector('.query')
    while (displayArea.firstChild){
        displayArea.removeChild(displayArea.firstChild)
    }
}
// d3.js code in here:
export function displayTree() {
    if (sessionStorage.getItem('query') === null) {
      console.log('No tree data, waiting..')
      return;
    } 
    else {
        if (document.querySelector('.query').firstChild !== null) {
            console.log('clearing tree')
            clearTree()
        }
        console.log('Creating D3.js tree..')
        // gets data from session storage
        const treeData = JSON.parse(sessionStorage.getItem('query'))
        // set the dimensions and margins of the diagram
        var margin = {top: 40, right: 20, bottom: 80, left: 20},
            width = 600 - margin.left - margin.right,
            height = 600 - margin.top - margin.bottom;

        // declares a tree layout and assigns the size
        var treemap = d3.tree()
            .size([width, height]);
        //  assigns the data to a hierarchy using parent-child relationships
        var nodes = d3.hierarchy(treeData);

        // maps the node data to the tree layout
        nodes = treemap(nodes);

        // append the svg obgect to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = d3.select(".query").append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom),
            g = svg.append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");
        // adds the links between the nodes
        var link = g.selectAll(".link")
            .data( nodes.descendants().slice(1))
            .enter().append("path")
            .attr("class", "link")
            .attr("d", function(d) {
                return "M" + d.x + "," + d.y
                + "C" + d.x + "," + (d.y + d.parent.y) / 2
                + " " + d.parent.x + "," +  (d.y + d.parent.y) / 2
                + " " + d.parent.x + "," + d.parent.y;
                });

        // adds each node as a group
        var node = g.selectAll(".node")
            .data(nodes.descendants())
            .enter().append("g")
            .attr("class", function(d) { 
                //console.log(d);
                return "node" + 
                (d.children ? " node--internal" : " node--leaf") +
                (d.parent ? "" : "-root"); })
            /*.attr('id', function(d) {
                return d.data.name
            })*/
            .attr("transform", function(d) { 
                return "translate(" + d.x + "," + d.y + ")"; });
    
        // adds the circle to the node
        node.append("circle")
            .attr("r", 10) // radius
            .style("stroke-width", 2); // border
        // adds the text to the node
        node.append("text")
            .attr("dy", ".35em")
            .attr("y", function(d) { return d.children ? -20 : 20; })
            .style("text-anchor", "middle")
            .text(function(d) { return d.data.name; })
            //.attr('transform', 'rotate(90)')
            .attr('opacity', 0)
            }
        // appending image url to the node
        node.append('image')
            .attr("href", function (d) { return d.data.image + '?width=300px' })
            .attr('x', '-20')
            .attr('y', '-60')
            //.attr('transform', 'rotate(90)')
        // rotates elements horizontally
        //svg.attr('transform', 'rotate(-90)')
            return;
}

async function saveQuery(e) {
    e.preventDefault()
    // if values current in session storage
    if (sessionStorage.getItem('username') !== null & sessionStorage.getItem('query') !== null) {
        // bundle into request body
        let payload = new URLSearchParams({
             username: sessionStorage.getItem('username'),
             // to encrypt query data
             password: sessionStorage.getItem('password'),
             query: sessionStorage.getItem('query')})
        // send POST request
        let response = fetch('/queries', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: payload
        })
        .then((res) => {
            // everything went ok
            if (res.statusText === 'OK') {
                return;
            }
            throw new Error(`Something went wrong. Wasn't able to save query.`)
        }).catch((e) => console.log(e))
    }
}

async function saveHistory(resBody) {
    //console.log(resBody)
    resBody.forEach((row, index) => {
        sessionStorage.setItem("x"+index, row)
    })
    console.log('Successfully stored search history.')
    return resBody
}

async function retrieveHistory() {
    // if values current in session storage
    if (sessionStorage.getItem('username') !== null & sessionStorage.getItem('password') !== null) {
        // bundle into request body
        let payload = new URLSearchParams({
             username: sessionStorage.getItem('username'),
             // to decrypt query data
             password: sessionStorage.getItem('password')
            })
        // send POST request
        let response = fetch('/queries/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: payload
        })
        .then((res) => {
            // everything went ok
            if (res.statusText === 'OK') {
                return res.json();
            }
            throw new Error(`Something went wrong. Wasn't able to retrieve history.`)
        }).then((res) => {
            saveHistory(res); // going too slow!!
        }
        ).then(console.log('retrieveHistory() complete.')).catch((e) => console.log(e))
    }
}
async function displayEach(searchItem, index) {
    if (document.querySelector('.saved').children.length > index) {
        return;
    }
    console.log(index)
    let searchTree = JSON.parse(searchItem).search
    let container = document.querySelector('.saved')
    let newNode = document.createElement('div')
    newNode.className = 'past-search'
    newNode.id = `x${index}` // x + index = name in session storage
    let editBtn = document.createElement('button')
    editBtn.className = 'delete'
    editBtn.innerText = 'Delete'
    // editBtn.style.transform = 'translate(70px, -30px)'
    
    newNode.appendChild(editBtn)
    //editBtn.id = searchTree.
    container.appendChild(newNode)
    var margin = {top: 40, right: 20, bottom: 80, left: 20},
            width = 200 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;
        // declares a tree layout and assigns the size
        var treemap = d3.tree()
            .size([width, height]);
        //  assigns the data to a hierarchy using parent-child relationships
        var nodes = d3.hierarchy(searchTree);

        // maps the node data to the tree layout
        nodes = treemap(nodes);

        // append the svg obgect to the body of the page
        // appends a 'group' element to 'svg'
        // moves the 'group' element to the top left margin
        var svg = d3.select(newNode).append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom),
            g = svg.append("g")
                .attr("transform",
                    "translate(" + margin.left + "," + margin.top + ")");
        // adds the links between the nodes
        var link = g.selectAll(".link")
            .data( nodes.descendants().slice(1))
            .enter().append("path")
            .attr("class", "link")
            .attr("d", function(d) {
                return "M" + d.x + "," + d.y
                + "C" + d.x + "," + (d.y + d.parent.y) / 2
                + " " + d.parent.x + "," +  (d.y + d.parent.y) / 2
                + " " + d.parent.x + "," + d.parent.y;
                });

        // adds each node as a group
        var node = g.selectAll(".node")
            .data(nodes.descendants())
            .enter().append("g")
            .attr("class", function(d) { 
                //console.log(d);
                return "node" + 
                (d.children ? " node--internal" : " node--leaf") +
                (d.parent ? "" : "-root");
            })
            .attr("transform", function(d) { 
                return "translate(" + d.x + "," + d.y + ")"; });
        // adds the circle to the node
        node.append("circle")
            .attr("r", 10) // radius
            .style("stroke-width", 2); // border
        // adds the text to the node
        node.append("text")
            .attr("dy", ".35em")
            .attr("y", function(d) { return d.children ? -20 : 20; })
            .style("text-anchor", "middle")
            .text(function(d) { return d.data.name; })
            //.attr('transform', 'rotate(90)')
            .attr('opacity', 0)
        // appending image url to the node
        node.append('image')
            .attr("href", function (d) { return d.data.image + '?width=300px' })
            .attr('x', '-20')
            .attr('y', '-60')
            //.attr('transform', 'rotate(90)')
        // rotates elements horizontally
        //svg.attr('transform', 'rotate(-90)')
            return;
        }

async function displayPastSearches() {
    console.log('Retrieving past searches.')
    let searches = Object.keys(sessionStorage)
        .filter(key => key.startsWith('x')).sort()
        .map(key => sessionStorage.getItem(key))
        .forEach((search, index) => {
            displayEach(search, index)});
}

function main() {
  retrieveHistory().then(() => {
    displayPastSearches()
  })
    // User Sign Up
  // const signUpSubmit = document.querySelector('#sign_up');
  const signUpModal = document.querySelector('.sign_up_modal');
  const modal = document.querySelector('.modal');
  const signUpLink = document.querySelector('.sign_up');
  signUpModal.style.display = 'none';
  modal.style.display = 'none';

  // Login Modal
  const loginModal = document.querySelector('.login_modal');
  // button
  const loginLink = document.querySelector('.login');
  loginModal.style.display = 'none';
  loginLink.addEventListener('click', () => {
    loginModal.style.display = 'flex';
    modal.style.display = 'block';
  });

  modal.addEventListener('click', () => {
    loginModal.style.display = 'none';
    signUpModal.style.display = 'none';
    modal.style.display = 'none';
  });
  signUpLink.addEventListener('click', () => {
    loginModal.style.display = 'none';
    modal.style.display = 'block';
    signUpModal.style.display = 'flex';
  })
    // if user account already stored..
    loadUser();
    retrieveHistory()
    // "create account" form
    document.querySelector('.sign_up_form').addEventListener('submit', async (e) => {
        // sessionStorage not found
        if (sessionStorage.getItem('username') === null) {
            createAccount(e);
            // back to main()
            return;
        }
        // else, inactive
        e.preventDefault();
    });
    document.querySelector('.login_modal').addEventListener('submit', async (e) => {
        if (sessionStorage.getItem('username') === null) {
            userLogin(e);
            // back to main()
            return;
        }
        // else, inactive
        e.preventDefault();
    });
    document.querySelector('.login_form').addEventListener('submit', async (e) => {
        // user not currently logged in
        if (sessionStorage.getItem('username') === null) {
            userLogin(e);
            // back to main()
            return;
        }
        // else, inactive
        e.preventDefault();
    })
    
    // logout button clears session
    document.querySelector('.log_out').addEventListener('click', async (e) => {
        // clear session storage
        logOut();
        console.log('Successfully logged out.')
        // back to main()
        return;
    })

    logOutButton.style.display = 'none';
    document.querySelector('.saved').addEventListener('click', async (e) => {
        // if there are currently elements inside the query container
        //if (document.querySelector('.query').firstChild) {
        e.preventDefault();
        clearTree();
        retrieveHistory().then(() => {
            displayPastSearches()
        })
    })
    const header = document.querySelector("Header");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav");
    
    hamburger.addEventListener("click", () => {
    console.log("hamburger");
    header.classList.toggle("active");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    });
}

document.addEventListener('DOMContentLoaded', await main);
