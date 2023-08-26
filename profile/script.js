const fName = document.getElementById('fName');
const lName = document.getElementById('lName');
const emailId = document.getElementById('emailID');
const password = document.getElementById('password');
const logOut = document.getElementById('logOut');


let currentUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

fName.innerText = currentUser.firstName;
lName.innerText = currentUser.lastName;
emailId.innerText = currentUser.email;
password.innerText = currentUser.password;

logOut.addEventListener('click',()=>{
    location.href='../login';
})