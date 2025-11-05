document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  
  if (username === "" || password === "") {
    alert("Please fill in both fields!");
    return;
  }

  // Example login check (replace this with backend API later)
  if (username === "admin" && password === "1234") {
    alert("Login successful!");
    window.location.href = "dashboard.html"; // redirect
  } else {
    alert("Invalid credentials!");
  }
});

document.getElementById("forgotPassword").addEventListener("click", function() {
  alert("Redirecting to password reset page...");
  window.location.href = "forgot-password.html";
});
