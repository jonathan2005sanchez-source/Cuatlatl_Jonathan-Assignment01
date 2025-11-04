// Initalize an empty array to store user data 
let user ={};

const userlist = document.getElementById("userList");

// fetch the data from API endpoint with fetch function
fetch('http://jsonplaceholder.typicode.com/users')
// ^ make sure its typed correctly...
.then(response => response.json())
.then(data => {
    // store fetch data in users array
    users = data;
    // function to display the user data 
    renderUsers(users);


});

// define a function to display the user data 
function renderUsers(list){
// convert the array into html <li> element using map() 

userlist.innerHTML = list.map(user =>`
    <br>
    <li>
    <strong> ${user.name} </strong><br>
    <small>${user.email}</small>
    </li>
   `).join('');

}

