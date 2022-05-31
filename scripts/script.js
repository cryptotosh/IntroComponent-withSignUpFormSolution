const myForm = document.getElementById('myForm');
const fname = document.querySelector('#validationFname');
const lname = document.querySelector('#last-name');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

myForm.addEventListener('submit', (e)=>{
  e.preventDefault();

  validateForm();
});

function validateForm(){

  /*
  // get the value from the inputs
  const fnameValue = fname.value.trim();
  const lnameValue = lname.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  */

  if (fname.ariaValueMax.trim() ===''){
    // show error

    // add error message
    setError(fname, 'First Name cannot be empty');

  } 
}
function setError(input, errorMessage) {
  const formGroup = input.parentElement; // .form-group
  formGroup.classList.add('error');
}


/*if (fnameValue===''){
  // show error

  // add error message
  setError(fname, 'First Name cannot be empty');
} else{
  // add success message
  setSuccessFor(fname);
}
}
function setError(input, message) {
const formGroup = input.parentElement; // .form-group
formGroup.classlist.add('error');
// const errorMsg = formGroup.querySelector('.error-msg');

// add error message inside errorMsg
errorMsg.innerText = message;

// add error class
// formGroup.className = 'form-group error';*/














// Regex for email format validation
// const emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



// Example starter JavaScript for disabling form submissions if there are invalid fields

/*(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()*/