const passwordCheckPara = document.querySelector(".password-check");
const password = document.querySelector("#pass");
const confirmPassword = document.querySelector("#cpass");
const formButton = document.querySelector(".form-button");

confirmPassword.addEventListener("input", () => {
    if(password.value !== confirmPassword.value) {
        passwordCheckPara.classList.remove("hidden");
        passwordCheckPara.classList.add("show");
        formButton.classList.add("disabled");
        formButton.disabled = true;
    } else {
        passwordCheckPara.classList.remove("show");
        passwordCheckPara.classList.add("hidden");
        formButton.classList.remove("disabled");
        formButton.disabled = false;
    }
});


/* formButton.addEventListener("click", () => {
    if(password.value !== confirmPassword.value) {
        passwordCheckPara.classList.remove("hidden");
        passwordCheckPara.classList.add("show");
    } else {
        passwordCheckPara.classList.remove("show");
        passwordCheckPara.classList.add("hidden");
    }
}); */