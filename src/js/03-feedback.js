import throttle from "lodash.throttle";

const KEYFEEDBACK = "feedback-form-state";

let formaData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextInput, 500))
installDataFromStorage()

function onTextInput(event) {
    const inputText = event.target.value;
    formaData[event.target.name] = inputText;
    localStorage.setItem(KEYFEEDBACK, JSON.stringify(formaData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem(KEYFEEDBACK)
}

function installDataFromStorage() {
    const dataFromStorage = JSON.parse(localStorage.getItem(KEYFEEDBACK));
    if (dataFromStorage) {
        console.log(dataFromStorage);
        refs.form.elements.email.value = dataFromStorage.email;
        refs.form.elements.message.value = dataFromStorage.message;
        formaData.email = dataFromStorage.email;
        formaData.message = dataFromStorage.message;
    }  
    // refs.form.elements.message.value = 123;
}
