function validate() {
    let mail = document.querySelector('#email').value;
    const regx = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regx.test(mail)){
        return true;
    } else {
        document.querySelector('.text').innerHTML = 'Please provide a valid email'
        document.querySelector('.error-icon').style.display = 'block';
        return false;
    }
  }


// document.querySelector('.error-icon').style.display = 'block';
//   errorIcon.style.display == 'none';
//   errorIcon.style.display == 'block';
  


