let count = 0;

document.getElementById("incrementBtn").onclick = function () {
  count++;
  document.getElementById("labelCount").textContent = count;
};

document.getElementById("decrementBtn").onclick = function () {
  if (count > 0) {
    count--;
    document.getElementById("labelCount").textContent = count;
  }
};
document.getElementById("resetBtn").onclick = function () {
  document.getElementById("labelCount").textContent = count = 0;
};
