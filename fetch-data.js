document.addEventListener("DOMContentLoaded", function () {
    // Initialize the Async Function
    async function fetchUserData() {
        // Define the API URL
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';

        // Select the Data Container Element
        const dataContainer = document.getElementById('api-data');

        // Fetch Data Using try-catch
        try {
            const response = await fetch(apiUrl); // Fetch the data
            const users = await response.json(); // Convert response to JSON

            // Clear the Loading Message
            dataContainer.innerHTML = '';

            // Create and Append User List
            const userList = document.createElement('ul');
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name; // Set text content to user's name
                userList.appendChild(listItem); // Append list item to user list
            });
            dataContainer.appendChild(userList); // Append user list to data container
        } catch (error) {
            // Error Handling
            dataContainer.innerHTML = ''; // Clear existing content
            dataContainer.textContent = 'Failed to load user data.'; // Set error message
        }
    }

    // Invoke fetchUserData on DOMContentLoaded
    fetchUserData();
});
