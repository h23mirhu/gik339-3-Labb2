// Gets the parent-element that will contain the new ul-element
const div = document.getElementById('container');

// Creates a new ul-element and assigns it to the variable newUl
const newUl = document.createElement('ul');
// Adds class name to the new-element
newUl.classList.add('new-ul');
// Adds background color to element
newUl.classList.add('background');

div.insertAdjacentElement('beforeend', newUl);



// Fetches data from the database
fetch('http://localhost:3000/users')
    // .then() handles asynchronous calls
    // The data is translated to an array
    .then((response) => response.json())
    // The array is translated for the user-object with its properties id, firstName, lastName, username and color
    // The array is written to the console
    .then((jsonData) => {
        console.log(jsonData);
        return jsonData;
    })
    .then((users) => {
        users.forEach((user) => {
            const newLi = document.createElement('li');            
            newLi.classList.add(user.color);
            newLi.classList.add('li');
            newLi.innerHTML = `Frist Name: ${user.firstName}<br />
                               Last Name: ${user.lastName}<br />
                               Username: ${user.username}`;
            newUl.insertAdjacentElement('beforeend', newLi);
        });
    });





