let username;

document.getElementById("submitNow").onclick = function () {
  username = document.getElementById("UserName").value;
  if (username) {
    document.getElementById("userGreetings").textContent = `Hello, ${username}`;
  } else {
    document.getElementById("userGreetings").textContent = `wew`;
  }
};
