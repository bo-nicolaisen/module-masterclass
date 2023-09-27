import { showUsers, showSingleUser } from "./modules/views.js";

const myApp = document.getElementById('app');


// model code ------------------------------------------------------------

let myUserData

initApp()

function initApp() {
    getUsers();
}

// fetch
export function getUsers() {

    fetch('https://dummyjson.com/users')
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            dataconversion(res);
        })
}

//callback

function dataconversion(rawData) {
    myUserData = rawData.users;
    showUsers(myUserData);
}


// view code ------------------------------------------------------------

/* function showUsers(userData) {
    console.info(userData);
}

function showSingleUser(myUser) {
    console.log(myUser);

} */
