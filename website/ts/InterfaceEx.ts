// Define an interface for a User
interface User {
    id: number;
    name: string;
    email: string;
  }
  
  // Define a type for a list of users
  type UserList = User[];
  
  // Create a variable using the User interface
  const user1: User = {
    id: 1,
    name: "Alice",
    email: "alice@example.com",
  };
  
  // Create a list of users using the UserList type
  const users: UserList = [
    user1,
    { id: 2, name: "Bob", email: "bob@example.com" },
    { id: 3, name: "Charlie", email: "charlie@example.com" },
  ];
  
  // Function to display user info
  function displayUsers(users: UserList): void {
    users.forEach((user) => {
      console.log(`ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`);
    });
  }
  
  // Call the function
  displayUsers(users);
  