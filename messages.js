// Sample messages data
let messagesData = [
    { sender: "User1", recipient: "User2", text: "Hello, how are you?" },
    { sender: "User2", recipient: "User1", text: "I'm fine, thank you. How about you?" }
];

// Function to display messages
function displayMessages() {
    const messageList = document.getElementById("message-list");
    messageList.innerHTML = ""; // Clear previous messages

    messagesData.forEach(message => {
        const messageItem = document.createElement("div");
        messageItem.classList.add("message");
        messageItem.innerHTML = `
            <div><strong>From:</strong> ${message.sender}</div>
            <div><strong>To:</strong> ${message.recipient}</div>
            <div>${message.text}</div>
        `;
        messageList.appendChild(messageItem);
    });
}

// Function to handle sending a new message
function sendMessage(sender, recipient, text) {
    // Add the new message to the messagesData array
    messagesData.push({ sender: sender, recipient: recipient, text: text });
}

// Event listener for the new message form submission
document.getElementById("new-message-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    const recipient = document.getElementById("recipient").value;
    const messageText = document.getElementById("message-text").value;

    // Get the sender's username (you can implement user authentication to get the sender's username)
    const sender = "User1"; // Replace "User1" with the actual sender's username

    // Send the message
    sendMessage(sender, recipient, messageText);

    // Display updated messages
    displayMessages();

    // Clear the form fields
    document.getElementById("recipient").value = "";
    document.getElementById("message-text").value = "";
});

// Initial display of messages when the page loads
displayMessages();
