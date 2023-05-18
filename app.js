
/* TOGGLE MODALS */

const loginBtns = document.querySelectorAll(".modal__header-login");
const singupBtns = document.querySelectorAll(".modal__header-reg");

const loginModal = document.querySelector("#modal__login");
const singupModal = document.querySelector("#modal__singup");

const toggleModals = () => {
    loginModal.classList.toggle("d-none");
    singupModal.classList.toggle("d-none");
}

loginBtns.forEach(btn => {
    btn.addEventListener("click", event => {
        event.preventDefault();
        toggleModals();
    })
})

singupBtns.forEach(btn => {
    btn.addEventListener("click", event => {
        event.preventDefault();
        toggleModals();
    })
})


/* REMEMBER CHECK */

const rememberCheck = document.querySelector(".modal__form-check");

const checked = "modal__form-check--checked";
const unchecked = "modal__form-check--unchecked";


rememberCheck.addEventListener("click", event => {
    event.preventDefault();

    rememberCheck.classList.toggle(checked);
    rememberCheck.classList.toggle(unchecked);
})


/* VALIDATION */

const setPatternMismatchValidity = (input, message) => {
    if (input.validity.patternMismatch) {
        input.setCustomValidity(message);
    }
    else {
        input.setCustomValidity("");
    }
}


/* EMAIL VALIDATION */

const emailInputs = document.querySelectorAll("input[type=email]");
const emailPatternMismatchMessage = "Email must match the pattern \"example@email.address\"";

emailInputs.forEach(emailInput => {
    emailInput.addEventListener("input", event => {
        event.preventDefault();
        setPatternMismatchValidity(emailInput, emailPatternMismatchMessage);
    })
})


/* PASSWORD VALIDATION */

const passwordInputs = document.querySelectorAll("input[type=password]");
const passwordPatternMismatchMessage = "Password must:\n- Be at least 8 characters long\n- Contain at least one capital character\n- Contain at least one lowercase character\n- Contain at least one number\n- Contain at least one special character";

passwordInputs.forEach(passwordInput => {
    passwordInput.addEventListener("input", event => {
        event.preventDefault();
        setPatternMismatchValidity(passwordInput, passwordPatternMismatchMessage);
    })
})


/* PASSWORD CONFIRM VALIDATION */

const singUpPasswordInput = document.querySelector("#singup_password");
const singUpPasswordConfirmInput = document.querySelector("#singup_confirm_password");

singUpPasswordConfirmInput.addEventListener("input", event => {
    event.preventDefault();

    if (singUpPasswordConfirmInput.value !== singUpPasswordInput.value) {
        singUpPasswordConfirmInput.setCustomValidity("Password confirmation must match the password");
    }
    else {
        singUpPasswordConfirmInput.setCustomValidity("");
    }
})


/* NAME VALIDATION */

const nameInputs = document.querySelectorAll("input[data-input=name]");
const namePatternMismatchMessage = "The name can only contain lower or upper case letters from 2 to 30 characters"

nameInputs.forEach(nameInput => {
    nameInput.addEventListener("input", event => {
        event.preventDefault();
        setPatternMismatchValidity(nameInput, namePatternMismatchMessage);
    })
})


/* SUBMIT FORMS */

const loginForm = document.querySelector("#login-form");
const singupForm = document.querySelector("#singup-form");

const showSubmitFormAlert = (form, message) => {
    form.addEventListener("submit", event => {
        event.preventDefault();
        alert(message)
    });
}

showSubmitFormAlert(loginForm, "You have successfully logged in!");
showSubmitFormAlert(singupForm, "You have successfully registered!");


/* BUTTONS WITHOUT FEATURES */

const elementsWithoutFeat = document.querySelectorAll("[data-feat=none]");

const showAlertByClick = (element, message) => {
    element.addEventListener("click", event => {
        event.preventDefault();
        alert(message)
    });
}

elementsWithoutFeat.forEach(element => {
    showAlertByClick(element, "This item is not functional");
})