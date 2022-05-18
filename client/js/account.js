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
        return;
    }
    for (const [key, value] of Object.entries(userData)) {
        sessionStorage.setItem(key, value);
    }
}
// clears all session data
function logOut() {
    sessionStorage.clear();
    // clearTree();
    document.querySelector('p.logged_in').innerText = '';
}
// API call
async function createAccount(e) {
    e.preventDefault()

    let form = new URLSearchParams( new FormData(document.querySelector('.create')))
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

function noPwMatch() {
    const notif = document.querySelector('.acct_notif')
    notif.innerText = 'Passwords do not match. Try again.'
    setInterval(() => {
        notif.innerText = ''}, 2500);    
}

async function updatePw() {
    try {
        const formData = {}
        const form = new FormData(document.querySelector('.pw_form'))
        form.forEach((input, key) => {
            formData[key] = input
        })
        const data = JSON.stringify(formData)
        const user = sessionStorage.getItem('plainUser')
        const reqBody = new URLSearchParams({ form: data, username: user })
        fetch('/user/pw', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: reqBody
        })
        .then((res) => {
            if (res.status === 403) {
                noPwMatch()
            }
            if (res.status === 200) {
                console.log('Password updated.')
                // update function
                return res.json()
            }
        }).then((value) => {
            storeSession(value)
        })
    } catch(e) {
        console.log(e)
    }

}

async function updateUsername() {
    try {
        const formData = {}
        const form = new FormData(document.querySelector('.username_form'))
        form.forEach((input, key) => {
            formData[key] = input
        })
        const data = JSON.stringify(formData)
        const user = sessionStorage.getItem('plainUser')
        const reqBody = new URLSearchParams({ form: data, username: user })
        fetch('/user/username', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: reqBody
        })
        .then((res) => {
            if (res.status === 403) {
                noPwMatch()
            }
            if (res.status === 200) {
                console.log('Username updated.')
                // update function
                return res.json()
            }
        }).then((value) => {
            storeSession(value)
        }).then(loadUser)
    } catch(e) {
        console.log(e)
    }

}


async function main() {
  // if user account already stored..
    loadUser();
    document.querySelector('.pw_form').addEventListener('submit', (e)=> {
        e.preventDefault()
        updatePw()
    })
    document.querySelector('.acct_form').addEventListener('submit', (e)=> {
        e.preventDefault()
        updateUsername()
    })
    document.querySelector('.log_out').addEventListener('click', () => {
        logOut();
        window.location.href = "/index.html";

    });



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
