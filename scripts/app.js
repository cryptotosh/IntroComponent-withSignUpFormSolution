
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('myForm')


form.addEventListener('submit',function(event){
    event.preventDefault()
    formValidation(event)
})
function setError(element, message){

  const inputControl = element.parentElement;

    // then we will get the div with the error  class in that
    // input-control div and give it a name to access it more easily==>
    const alertMessage = inputControl.querySelector('.error')

    alertMessage.innerText = message
    console.log(input);

    element.classList.add('alert-input')
    element.classList.remove('success')

}


    function setSuccess(element){

      const inputControl = element.parentElement;
        
        const alertMessage = inputControl.querySelector('.error')

        alertMessage.innerText = ''

        element.classList.remove('alert-input')

        element.classList.add('success')
    }

    const isValidEmail = email => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }


// * in this function, we are going to validate our inputs
function formValidation(event){

  const firstNameValue = firstName.value.trim()
    const lastNameValue = lastName.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

    // now we need to add every validation condition that we need for our inputs to be checked
    if (firstNameValue === ""){
        setError(firstName, 'First Name cannot be empty')
    } else if (firstName.value.length <=2 && firstName.value.length>0){
        setError(firstName, 'Please enter a valid Name')
    } else {
        setSuccess(firstName)
    }


    if(lastNameValue === ''){
        setError(lastName,'Last Name cannot be empty')
    }else if (lastName.value.length <=2 && firstName.value.length>0){
        setError(lastName, 'Please enter a valid Name')
    }else {
        setSuccess(lastName)
    }
    

    if(emailValue === '') {
        setError(email, 'Email cannot be empty');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Looks like this is not an email');
    } else {
        setSuccess(email);
    }

    if(passwordValue === '') {
        setError(password, 'Password cannot be empty');
    } else if (passwordValue.length < 8 ) {
        setError(password, 'Password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
}