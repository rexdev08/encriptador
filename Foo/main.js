import { Encriptador } from "./Encriptador.js";


//DOM references
let my_input = document.getElementById("my-input");
let btn_encriptar = document.getElementById("btn-encriptar");
let btn_desencriptar = document.getElementById("btn-desencriptar");
let result_paragraph = document.getElementById("result");
let no_message_found_box = document.getElementById("no-message-found-box")
let btn_copiar = document.getElementById("btn-copiar")

//utils
function verifyText(text) {
    const capitalLettersRegexp = /[A-Z]/g;
    const specialCharactersRegexp = /[^a-z\s!.,0-9]/g;
    let itContainsCapitalLetters = capitalLettersRegexp.test(text);
    let itContainsSpecialCharacters = specialCharactersRegexp.test(text);
    return !(itContainsCapitalLetters || itContainsSpecialCharacters || !text);

}

function enableDisableButton(button = btn_encriptar, state) {
    state ? button.removeAttribute("disabled") : button.setAttribute("disabled", "");
}

const cleanAndHide = () => {
    my_input.value = "";
    no_message_found_box.classList.add("none");
}


//event handlers

my_input.addEventListener("input", () => {
    let isValidText = verifyText(my_input.value);

    enableDisableButton(btn_desencriptar, isValidText);
    enableDisableButton(btn_encriptar, isValidText);
})


btn_encriptar.addEventListener("click", () => {
    result_paragraph.innerText = Encriptador.encriptar(my_input.value);
    cleanAndHide();
})

btn_desencriptar.addEventListener("click", () => {
    result_paragraph.innerText = Encriptador.desencriptar(my_input.value);
    cleanAndHide();

})


btn_copiar.addEventListener("click", () => {
    navigator.clipboard.writeText(result_paragraph.innerText).then(() => {
        console.log("texto copiado al portapapeles");
    }).catch((err) => {
        console.err("algo salio mal ", err);
    })
})