document.addEventListener("DOMContentLoaded", function() {
  lockScreen();
});

function lockScreen() {
  document.getElementById("lock-screen").style.display = "block";
  document.body.style.overflow = "hidden";
}

function unlockScreen() {
  const password = document.getElementById("password").value;
  if (password === "rahasia") {
    document.getElementById("lock-screen").style.display = "none";
    document.body.style.overflow = "auto";
  } else {
    alert("Password salah!");
  }
}
