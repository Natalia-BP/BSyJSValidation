// Selecciona todo formulario
const submitForm = document.getElementById("formGroup")

submitForm.addEventListener("submit", function (event) {

    // Previene enviar el formulario sin hacer validacion
    event.preventDefault()

    // Inputs
    let creditCard = document.getElementById("creditCard");
    let cvc = document.getElementById("CVC");
    let amount = document.getElementById("amount");
    let fristName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let city = document.getElementById("cityInput");
    let state = document.getElementById("stateInput");
    let postal = document.getElementById("postalCode");

    // Credit Card
    // Regular expression for credit cards
    const creditPattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/
    let result = creditPattern.test(creditCard.value)
    if (!result) {

        creditCard.classList.add("is-invalid");

    } else {

        creditCard.classList.remove("is-invalid");
        creditCard.classList.add("is-valid");

    }

    // CVC
    if (cvc.value.length <= 2 || cvc.value.length >= 4) {

        cvc.classList.add("is-invalid");

    } else {

        cvc.classList.remove("is-invalid");
        cvc.classList.add("is-valid");
    }

    // Amount
    const number = /^[0-9]+$/;
    let resultAmount = number.test(amount.value);
    if (!resultAmount)  {

        amount.classList.add("is-invalid");

     } else {

        amount.classList.remove("is-invalid");
        amount.classList.add("is-valid");

    }

    // First Name
    const letter = /^[a-zA-Z\s]*$/;
    let resultFristName = letter.test(fristName.value);
    if (!resultFristName)  {

        fristName.classList.add("is-invalid");

     } else {

        fristName.classList.remove("is-invalid");
        fristName.classList.add("is-valid");

    }

    // Last Name
    let resultLastName = letter.test(lastName.value);
    if (!resultLastName)  {

        lastName.classList.add("is-invalid");
        
     } else {
        lastName.classList.remove("is-invalid");
        lastName.classList.add("is-valid");
    }

    // City
    let cityResult = letter.test(city.value);
    if (!cityResult || cityResult.length == 0) {

        city.classList.add("is-invalid");


    } else {

        city.classList.remove("is-invalid");
        city.classList.add("is-valid");
        
    }

    // State
    if (state.value == "Pick a State") {

        state.classList.add("is-invalid");

    } else {

        state.classList.remove("is-invalid");
        state.classList.add("is-valid");

    }

    // Postal Code
    if (postal.value.length == 0 || postal.value.length == 6 || postal.value.length == 10) {

        postal.classList.add("is-invalid");

    } else {

        postal.classList.remove("is-invalid");
        postal.classList.add("is-valid");
        
    }
    
});