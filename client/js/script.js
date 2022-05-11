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
// generic error
function incorrectInfo() {
    let notifs = document.querySelector('.notifs')
    notifs.innerText = 'Incorrect username or password. Try again.'
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
    let notifs = document.querySelector('#search_notifs')
    notifs.innerText = 'One of these is not a species. Try again?'
    setInterval(() => {
        notifs.innerText = ''}, 2500);
}
// displays username from local storage
function loadUser() {
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
        return 0;
    }
    for (const [key, value] of Object.entries(userData)) {
        sessionStorage.setItem(key, value);
    }
    return 1
}
// clears all session data
function logOut() {
    sessionStorage.clear();
    clearTree();
    document.querySelector('logged_in').innerText = '';
    document.querySelector('.account').style.display = 'none';
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
        if (res.status === 401) {
            throw new Error('NO_MATCH')
        }
        return res.json()
    }).then((res) => {
        storeSession(res)
        loadUser()
    }).catch((err) => {
        if (err.message === 'NO_MATCH') {
            incorrectInfo()
        } else {
            console.log(err)
            return
        }
    })

}
// API call
async function wikiSearch(e) {
    e.preventDefault();

    let search = new URLSearchParams( new FormData(document.querySelector('.species_form')))
    if (search.get('species_a') === '' || search.get('species_b') === '') {
        return;
    }
    let response = fetch('/search?' + search, {
        method: 'GET'
    })
    .then((res) => {
        if (res.status === 401) {
            emptyResponse();
            throw new Error('Failed to fetch data.')
        }
        return res;
    })
    .then((res) => res.json())
    .then((res) => storeSession({ query: JSON.stringify(res)}))
    .then((res) => {
        if (res === 1) {
            displayTree()
        }
        if (res === 0) {
            throw new Error('NOT_SAVED')
        }
    })
    .catch((e) => {
        if (e.message === 'NOT_SAVED') {
            console.log('Failed to store query in session storage.')
            return
        }
        console.log(e)
    })
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

        // gets dimensions from parent div
        const box = document.querySelector('.query')

        // set the dimensions and margins of the diagram
        var margin = {top: 40, right: 40, bottom: 40, left: 40},
            width = box.offsetWidth - margin.left - margin.right,
            height = box.offsetHeight - margin.top - margin.bottom;

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
            let response = fetch('index/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: payload
            })
            .then((res) => {
                if (res.statusText === 'Not Found') {
                    throw new Error('NOT_FOUND')
                }
                // everything went ok
                if (res.statusText === 'OK') {
                    return res.json();
                }
            })
            .then((res) => {
                return saveHistory(res); // going too slow!!
            })
            .finally(console.log('retrieveHistory() complete.'))
            .catch((e) => {
                if (e.message === 'NOT_FOUND') {
                console.log('Something went wrong. Unable to retrieve history.')
            } else {
                console.log(e)
            }
        })
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
        /**document.querySelector('.logout').addEventListener('click', async (e) => {
            e.preventDefault();
            // clear session storage
            logOut()
            console.log('Successfully logged out.')
            // back to main()
            return;
        })*/
        
        // button to save query to DB
        const saveQueryPrompt = document.querySelector('.save-query')
        saveQueryPrompt.style.display = 'none'

        // search bar
        document.querySelector('.species_form').addEventListener('submit', async (e) => {
            wikiSearch(e)
            if (sessionStorage.getItem('username') !== null) {
                saveQueryPrompt.style.display = 'flex';
            }
        })
    saveQueryPrompt.addEventListener('click', async (e) => {
            // if there are currently elements inside the query container
            if (document.querySelector('.query').firstChild) {
                saveQuery(e);
                return;
            }
            e.preventDefault()
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

document.addEventListener('DOMContentLoaded', main);