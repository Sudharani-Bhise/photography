function validateForm() {
    const name =
        document.getElementById("name").value;
  
    const password =
        document.getElementById("password").value;
    
    const nameError =
        document.getElementById("name-error");
    const addressError = document.getElementById(
        "address-error"
    );
   
    nameError.textContent = "";
    addressError.textContent = "";
    
    let isValid = true;
  
    if (name === "" || /\d/.test(name)) {
        nameError.textContent =
            "Please enter your name properly.";
        isValid = false;
    }
  
    if (password === "") {
        addressError.textContent =
            "Please enter your password.";
        isValid = false;
    }
  
    return isValid;
  }

  


  