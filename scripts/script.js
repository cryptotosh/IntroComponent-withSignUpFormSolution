const myForm = document.querySelector(".form");
const fname = document.getElementById("firstName");
const lname = document.getElementById("lastName");
const email = document.getElementById("email");
const password = document.getElementById("password");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();

  validatedInput();
});

function setError(element, message) {
  const input = element.parentElement;
  const error = input.querySelector(".form-group > .error");
  error.textContent = message;
  // error.style.visibility="visible";

  input.classList.add("error");
  input.classList.remove("success");
}

function setSuccess(element, message) {
  const input = element.parentElement;
  const error = input.querySelector(".form-group > .error");
  error.textContent = " ";
  input.classList.add("success");
  input.classList.remove("error");
}

const validEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function validatedInput() {
  // get the value from the inputs
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (fnameValue === "") {
    setError(fname, "First name is required");
  } else {
    setSuccess(fname);
  }

  if (lnameValue === "") {
    setError(lname, "Last name is required");
  } else {
    setSuccess(lname);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!validEmail(emailValue)) {
    setError(email, "Seems that's not a valid email");
  } else {
    setSuccess(email);
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 5) {
    setError(password, "Password must be at least 5 characters long");
  } 
  else {
    setSuccess(password);
  }
}
