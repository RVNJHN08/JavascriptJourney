let username;

document.getElementById("submitNow").onclick = function () {
  username = document.getElementById("userName").value;
  if (username) {
    document.getElementById(
      "userGreetings"
    ).textContent = `Hello, ${username} !`;
    document.getElementById("userName").value = "";
    document.getElementById("removeNow").style.display = "inline";
    document.getElementById("submitNow").style.display = "none";
  } else {
    document.getElementById(
      "userGreetings"
    ).textContent = `Hello, Please write your username`;
    document.getElementById;
  }
};

document.getElementById("removeNow").onclick = function () {
  document.getElementById("userGreetings").textContent =
    "Hello, Please write your username";
  document.getElementById("userName").value = "";
  document.getElementById("removeNow").style.display = "none";
  document.getElementById("submitNow").style.display = "inline";
};
