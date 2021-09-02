function updateClasses(el1, el2, val1, val2) {
  // Remove margin classes
  for (let i = el1.classList.length - 1; i >= 0; i--) {
    const className = el1.classList[i];
    if (className.startsWith("m")) {
      el1.classList.remove(className);
    }
  }
  for (let i = el2.classList.length - 1; i >= 0; i--) {
    const className = el2.classList[i];
    if (className.startsWith("m")) {
      el2.classList.remove(className);
    }
  }

  // Update active class
  Object.values(el1.children).forEach(function (child) {
    // Add active class
    if (String(child.innerHTML) === val1) child.classList.add("active");
    // Remove active class
    else child.classList.remove("active");
  });
  Object.values(el2.children).forEach(function (child) {
    // Add active class
    if (String(child.innerHTML) === val2) child.classList.add("active");
    // Remove active class
    else child.classList.remove("active");
  });
}

function updateHour(date) {
  const firstDigit = document.querySelector("#hour-1");
  const secondDigit = document.querySelector("#hour-2");
  const _hours = "0" + String(date.getHours());
  const hours = _hours.slice(-2);

  // Remove margin classes
  updateClasses(firstDigit, secondDigit, hours[0], hours[1]);
  // Add margin class
  firstDigit.classList.add(`m-${hours[0]}`);
  // Add margin class
  secondDigit.classList.add(`m-${hours[1]}`);
}

function updateMinute(date) {
  const firstDigit = document.querySelector("#minute-1");
  const secondDigit = document.querySelector("#minute-2");
  const _minutes = "0" + String(date.getMinutes());
  const minutes = _minutes.slice(-2);

  // Remove margin classes
  updateClasses(firstDigit, secondDigit, minutes[0], minutes[1]);
  // Add margin class
  firstDigit.classList.add(`m-${minutes[0]}`);
  // Add margin class
  secondDigit.classList.add(`m-${minutes[1]}`);
}

function updateSecond(date) {
  const firstDigit = document.querySelector("#second-1");
  const secondDigit = document.querySelector("#second-2");
  const _seconds = "0" + String(date.getSeconds());
  const seconds = _seconds.slice(-2);
  // Remove margin classes
  updateClasses(firstDigit, secondDigit, seconds[0], seconds[1]);
  // Add margin class
  firstDigit.classList.add(`m-${seconds[0]}`);
  // Add margin class
  secondDigit.classList.add(`m-${seconds[1]}`);
}

function updateDate() {
  const date = new Date();
  updateHour(date);
  updateMinute(date);
  updateSecond(date);
}
