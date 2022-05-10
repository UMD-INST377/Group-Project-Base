// notifs & notifications
function accountExists() {
    let notifs = document.querySelector('.notifs')
    notifs.innerText = 'Existing account. Try again.'
    setInterval(() => {
        notifs.innerText = ''}, 2500);
}
// confirms account creation
function accountCreated() {
    let notifs = document.querySelector('.notifs')
    notifs.innerText = 'Account created. Welcome!'
    setInterval(() => {
        notifs.innerText = ''}, 2500);    
}
// confirms log out
function loggedOut() {
    let notifs = document.querySelector('.notifs')
    notifs.innerText = 'Successfully logged out.'
    setInterval(() => {
        notifs.innerText = ''}, 2500);   
}
// generic error
function somethingWrong() {
    let notifs = document.querySelector('.notifs')
    notifs.innerText = 'Something went wrong. Please try again.'
    setInterval(() => {
        notifs.innerText = ''}, 2500);
}
// empty species query
function emptyResponse() {
    let notifs = document.querySelector('#search-notifs')
    notifs.innerText = 'One of these is not a species. Try again?'
    setInterval(() => {
        notifs.innerText = ''}, 2500);
}
// displays username from local storage
async function loadUser() {
    if (sessionStorage.getItem('plainUser') !== null) {
        document.querySelector('.logged_in').innerText = `${sessionStorage.getItem('plainUser')}!`;
        document.querySelector('.logged_in').style.fontWeight = 'bold';
        document.querySelector('.login').style.display = 'none';
        document.querySelector('.sign_up').style.display = 'none';
        document.querySelector('#saved').style.display = 'block';
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
    let response = fetch('user/signup', {
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
    let response = fetch('/user/login', {
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

// removes existing tree in search page
export function clearTree(){
    let displayArea = document.querySelector('.query')
    while (displayArea.firstChild){
        displayArea.removeChild(displayArea.firstChild)
    }
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
        let response = fetch('/index', {
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
        let response = fetch('/index/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: payload
        }).then((res) => {
            if (res.statusText === 'Not Found') {
                throw new Error('NOT_FOUND')
            }
            return res.json();
        }).then((res) => {
            saveHistory(res); // going too slow!!
        }).catch((e) => {
            if (e.message === 'NOT_FOUND') {
            console.log('Something went wrong. Unable to retrieve history.')
        }
    })
}}

async function displayEach(searchItem, index) {
    if (document.querySelector('.saved').children.length > index) {
        return;
    }
    let searchTree = JSON.parse(searchItem).search
    let container = document.querySelector('.saved')
    let newNode = document.createElement('div')
    newNode.className = 'past-search'
    newNode.id = `x${index}` // x + index = name in session storage
    let editBtn = document.createElement('button')
    editBtn.className = 'delete'
    editBtn.id = `x${index}`
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

export async function displayPastSearches() {
    console.log('Retrieving past searches.')
    let searches = Object.keys(sessionStorage)
        .filter(key => key.startsWith('x')).sort()
        .map(key => sessionStorage.getItem(key))
        .forEach((search, index) => {
            displayEach(search, index)});
}

async function deleteQuery(key) {
    let itemStamp = JSON.parse(sessionStorage.getItem(key)).timestamp
    let form = new URLSearchParams({
        user: username,
        timestamp: itemStamp
    })
    fetch('/index', {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: form
    }).then((res) => {
        if (res.status === 200) {
            document.getElementById(key).remove();
            sessionStorage.removeItem(key)
        }
    })
    .catch(console.log)
}

async function main() {
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

    document.querySelector('.login_form').addEventListener('submit', async (e) => {
        // user not currently logged in
        if (sessionStorage.getItem('username') === null) {
            userLogin(e);
            loginModal.style.display = 'none';
            signUpModal.style.display = 'none';
            modal.style.display = 'none';
            // back to main()
            return;
        }
        // else, inactive
        e.preventDefault();
    })
    
    // logout button clears session
    /*
    document.querySelector('.log_out').addEventListener('click', async (e) => {
        // clear session storage
        logOut();
        console.log('Successfully logged out.')
        // back to main()
        return;
    })*/

    const header = document.querySelector("Header");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav");
    
    hamburger.addEventListener("click", () => {
    console.log("hamburger");
    header.classList.toggle("active");
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    });

    // if user account already stored..
    loadUser()
    .then(retrieveHistory)
    .then(displayPastSearches)
    .then(() =>{
        // event listeners for delete buttons
    document.querySelectorAll('button.delete')
        .forEach((element) => {
            element.addEventListener('click', (e) => {
                    deleteQuery(element.id)
            })
        })
    })
}

document.addEventListener('DOMContentLoaded', main);
