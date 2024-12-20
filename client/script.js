// Gets the parent-element that will contain the new ul-element
const div = document.getElementById('container');

// Creates a new ul-element and assigns it to the variable newUl
const newUl = document.createElement('ul');
// Adds class name to the new-element
newUl.classList.add('new-ul');
// Adds background color to element
newUl.classList.add('background');
// Adds the ul-element in the div-elemnt
// Adds the ul-element to the DOM
div.insertAdjacentElement('beforeend', newUl);

// Fetches data from the database
fetch('http://localhost:3000/users')
    // .then() handles asynchronous calls
    // The data is translated to an array
    .then((response) => response.json())
    // The array is translated for the user-object with its properties id, firstName, lastName, username and color
    // The array is written to the console
    // Returns the data
    .then((jsonData) => {
        console.log(jsonData);
        return jsonData;
    })
    // Loops through the users-objects
    .then((users) => {
        users.forEach((user) => {
            // Creates a li-element for every user
            const newLi = document.createElement('li');
            // A class name is added to the element    
            newLi.classList.add('li');
            // A background color is added to the element based on the users color
            newLi.classList.add(user.color);
            // A template string that writes the user's info in the li-element
            newLi.innerHTML = `Frist Name: ${user.firstName}<br />
                               Last Name: ${user.lastName}<br />
                               Username: ${user.username}`;
            // Adds the li-element in the ul-elemnt
            // Adds the li-element to the DOM
            newUl.insertAdjacentElement('beforeend', newLi);
        });
    });





