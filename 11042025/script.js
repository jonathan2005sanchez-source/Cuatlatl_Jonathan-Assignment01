// Initalize an empty array to store user data 
let user =[];

const userlist = document.getElementById("userList");

// fetch the data from API endpoint with fetch function
fetch('http://jsonplaceholder.typicode.com/users')
// ^ make sure its typed correctly...
.then(response => response.json())
.then(data => {
    // store fetch data in users array
    user = data;
    // function to display the user data 
    renderUsers(user);


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

// filler functionality

// add a click event listener to filter button 


document.getElementById("filterBtn").addEventListener("click" , () =>{

const keyword = document.getElementById("filterInput").value.toLowerCase();

// Use .filter() to create a new array of users that matches the search keywords. 

const filtered = user.filter(u => u.name.toLowerCase().includes(keyword));

renderUsers(filtered);

});