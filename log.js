document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    let storedEmail = localStorage.getItem("registeredEmail");
    let storedPassword = localStorage.getItem("registeredPassword");
    
    if (email === storedEmail && password === storedPassword) {
        alert("Login Successful! Redirecting to website...");
        window.location.href = "https://dupewebbybendev.netlify.app/"; // Change to your actual website
    } else {
        document.getElementById("login-error").textContent = "Invalid email or password";
    }
});
