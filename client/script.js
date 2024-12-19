fetch('http://localhost:3000/users')
    .then((response) => response.json())
    .then((jsonData) => console.log(jsonData));