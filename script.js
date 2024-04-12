document.addEventListener("DOMContentLoaded", () => {
    // Function to create a post element
    const createPostElement = (username, postText, imageUrl) => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        let postContent = `
            <div class="user-profile">
                <h2>${username}</h2>
            </div>`;

        if (imageUrl) {
            postContent += `<img src="${imageUrl}" alt="Post Image">`;
        }

        postContent += `
            <p class="post-content">${postText}</p>
            <div class="post-actions">
                <button class="like-btn">Like</button>
                <button class="comment-btn">Comment</button>
            </div>
            <div class="comments-section">
                <input type="text" class="comment-input" placeholder="Add a comment...">
                <button class="comment-submit">Submit</button>
                <ul class="comments-list">
                    <li><strong>User1:</strong> Nice post!</li>
                    <li><strong>User2:</strong> Great shot!</li>
                </ul>
            </div>`;

        postElement.innerHTML = postContent;
        return postElement;
    };

    // Function to handle post submission
    const handlePostSubmit = (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const postText = document.getElementById("post-text").value;
        const postImage = document.getElementById("post-image").files[0];
        const imageUrl = postImage ? URL.createObjectURL(postImage) : null;

        const postElement = createPostElement(username, postText, imageUrl);
        const postFeed = document.getElementById("post-feed");
        postFeed.appendChild(postElement);
    };

    // Add event listener for post form submission
    const postForm = document.getElementById("post-form");
    postForm.addEventListener("submit", handlePostSubmit);

    // Add event listener for post button click
    const postButton = document.getElementById("post-btn");
    postButton.addEventListener("click", handlePostSubmit);
});
