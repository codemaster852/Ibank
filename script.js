document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Predefined credentials
    const validUsername = "mostafa";
    const validPassword = "password123";
  
    // Validate username and password
    if (username.toLowerCase() === validUsername && password === validPassword) {
      window.location.href = "mostafa.html";
    } else {
      alert("Invalid username or password! Please try again.");
    }
  });
  