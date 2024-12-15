let username;

document.getElementById("submitNow").onclick = function () {
  username = document.getElementById("userName").value;
  if (username) {
    document.getElementById("welcome").textContent = `Welcome, ${username}!`;
    document.getElementById("removeNow").style.display = "inline";
    document.getElementById("userName").value = null;
  } else {
    document.getElementById("welcome").textContent = `Please write a username`;
    document.getElementById("removeNow").style.display = "none";
  }
};

document.getElementById("removeNow").onclick = function () {
  username = document.getElementById("userName").defaultValue;
  document.getElementById("welcome").textContent = `Please write a username`;
  document.getElementById("removeNow").style.display = "none";
};
