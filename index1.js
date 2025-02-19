document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let email = document.getElementById("register-email").value;
    let password = document.getElementById("register-password").value;
    localStorage.setItem("registeredEmail", email);
    localStorage.setItem("registeredPassword", password);
    alert("Registration Successful! Redirecting to login...");
    window.location.href = "";
});
