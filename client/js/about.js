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
function loadUser() {
    if (sessionStorage.getItem('plainUser') !== null) {
        document.querySelector('.logged_in').innerText = `${sessionStorage.getItem('plainUser')}!`;
        document.querySelector('.logged_in').style.fontWeight = 'bold';
        document.querySelector('.login').style.display = 'none';
        document.querySelector('.sign_up').style.display = 'none';
        document.querySelector('#saved').style.display = 'block';        
    }
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
// API call


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
        loadUser()
        retrieveHistory()
        // loadUser();
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
        // document.querySelector('.log_out').addEventListener('click', async (e) => {
        //     // clear session storage
        //     logOut();
        //     console.log('Successfully logged out.')
        //     // back to main()
        //     return;
        // })

        // logOutButton.style.display = 'none';
        // document.querySelector('.saved').addEventListener('click', async (e) => {
        //     // if there are currently elements inside the query container
        //     //if (document.querySelector('.query').firstChild) {
        //     e.preventDefault();
        //     clearTree();
        //     retrieveHistory().then(() => {
        //         displayPastSearches()
        //     })
        // })
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
