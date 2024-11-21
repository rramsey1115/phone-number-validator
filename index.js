const clearBtn = document.getElementById("clear-btn");
const checkBtn = document.getElementById("check-btn");
const resultsDiv = document.getElementById("results-div");
const userInput = document.getElementById("user-input");
const regEx = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;

checkBtn.addEventListener("click", () => {
  if (!userInput.value) {
    alert("Please provide a phone number");
  } else {
    regEx.test(userInput.value)
      ? (resultsDiv.innerHTML += `<p>Valid US number: ${userInput.value}</p>`)
      : (resultsDiv.innerHTML += `<p>Invalid US number: ${userInput.value}</p>`);
    userInput.value = "";
  }
});

clearBtn.addEventListener("click", () => {
  userInput.value = "";
  resultsDiv.innerHTML = "";
});

/* 
regEx Explanation:
  Optional one with a space => (1\s?)?
  Three digits with optional parenthesis => (\(\d{3}\|\d{3})
  Optional hyphen or space => ([\s-]?)
  Three digits => \d{3}
  Optional hyphen or space => ([\s-]?)
  Four digits => \d{4}
  need to wrap it all in your /^ and end in $/ to tell regex it has to be specific order
  Put it all together => /^(1\s?)?(\(\d{3}\|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/
*/
