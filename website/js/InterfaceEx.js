// Create a variable using the User interface
var user1 = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
};
// Create a list of users using the UserList type
var users = [
    user1,
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
];
// Function to display user info
function displayUsers(users) {
    users.forEach(function (user) {
        console.log("ID: ".concat(user.id, ", Name: ").concat(user.name, ", Email: ").concat(user.email));
    });
}
// Call the function
displayUsers(users);
