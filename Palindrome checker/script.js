document.getElementById("check-btn").addEventListener("click", function () {
  const input = document.getElementById("text-input").value.trim();
  const result = document.getElementById("result");

  if (input === "") {
    alert("Please input a value");
    return;
  }

  const cleanedInput = input.toLowerCase().replace(/[^a-z0-9]/gi, "");
  const reversedInput = cleanedInput.split("").reverse().join("");

  if (cleanedInput === reversedInput) {
    result.textContent = `${input} is a palindrome`;
    result.style.color = "green";
  } else {
    result.textContent = `${input} is not a palindrome`;
    result.style.color = "red";
  }
});
