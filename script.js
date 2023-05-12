const form = document.getElementById("user-form");
const tableBody = document.querySelector("#users-table tbody");

let users = [];

// Create user
function createUser(user) {
    users.push(user);
    tableBody.insertAdjacentHTML(
        "beforeend", <
        tr > < td > $ { user.name } < /td> <td>${user.idNumber}</td > < td > $ { user.country } < /td> <td>${user.languagesSpoken}</td > < td > < button data - id = "${user.id}" > Delete < /button></td > < /tr> );
    }

    // Read users
    function readUsers() {
        users.forEach((user) => createUser(user));
    }

    // Update user
    function updateUser(user) {
        const index = users.findIndex((u) => u.id === user.id);
        users[index] = user;
        const tableRow = tableBody.querySelector([data - id = "${user.id}"]).parentNode;
        tableRow.innerHTML = < td > $ { user.name } < /td> <td>${user.idNumber}</td > < td > $ { user.country } < /td> <td>${user.languagesSpoken}</td > < td > < button data - id = "${user.id}" > Delete < /button></td > ;
    }

    // Delete user
    function deleteUser(id) {
        users = users.filter((user) => user.id !== id);
        const tableRow = tableBody.querySelector([data - id = "${id}"]).parentNode;
        tableRow.remove();
    }

    // Event listeners
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = form.elements["name"].value.trim();
        const idNumber = form.elements["id-number"].value.trim();
        const country = form.elements["country"].value.trim();
        const languagesSpoken = form.elements["languages-spoken"].value.trim();
        const id = Date.now();

        const user = { name, idNumber, country, languagesSpoken, id };

        createUser(user);
        form.reset();
    });

    tableBody.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            const id = Number(e.target.dataset.id);
            deleteUser(id);
        }
    });

    // Initialize the app
    readUsers();