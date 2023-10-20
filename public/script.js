(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
   
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')

      }, false)
    })
  })()

  let psw= document.getElementById('formPassword')
  let confirmPsw= document.getElementById('formConfirmPassword')
  let pswMessage = document.getElementById('passMessage')
  let confirmPswMessage = document.getElementById('confirmPassMessage')

  function checkPassword(){
    psw.onfocus = function() {
      pswMessage.style.display = "block";
    }
    
    // When the user clicks outside of the password field, hide the message box
    psw.onblur = function() {
      pswMessage.style.display = "none";
    }
  }

  
  function checkConfirmPassword(){
    confirmPsw.onfocus = function() {
      confirmPswMessage.style.display = "block";
    }
    
    // When the user clicks outside of the password field, hide the message box
    confirmPsw.onblur = function() {
      confirmPswMessage.style.display = "none";
    }
  }


  let check = function() {
    if (psw.value.length !== 0 && psw.value == confirmPsw.value) {
      document.getElementById('message').style.display = 'block';  
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'Passwords Are Matching';
      document.querySelector('.confirm-btn').disabled = false;

    
    } else if (psw.value !== confirmPsw.value){
      document.getElementById('message').style.display = 'block';  
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'Passwords Do Not Match';
      document.querySelector('.confirm-btn').disabled = true;
    }
  }
  
function isEmpty(){
  if(psw.value.length == 0 && confirmPsw.value.length == 0){
    document.getElementById('message').style.display = 'none';  
  }
}


  isEmpty();
  checkPassword();
  checkConfirmPassword();