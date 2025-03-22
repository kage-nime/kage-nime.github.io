function lockScreen() {
  document.getElementById("lock-screen").style.display = "block";
}

function unlockScreen() {
  const password = document.getElementById("password").value;
  if (password === "kageno") {
    document.getElementById("lock-screen").style.display = "none";
  } else {
    alert("Password salah!");
  }
}