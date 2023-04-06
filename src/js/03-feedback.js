import throttle from "lodash.throttle";

const KEYFEEDBACK = "feedback-form-state";

const formaData = {};


const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextInput, 500));
refs.form.addEventListener('input', throttle(onTextInput, 500))
installDataFromStorage()

function onTextInput(event) {
    const text = event.target.value;
    formaData[event.target.name] = text;
    const formDataJSON = localStorage.setItem(KEYFEEDBACK, JSON.stringify(formaData));

}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem(KEYFEEDBACK)
}

function installDataFromStorage() {
    const saveText = JSON.parse(localStorage.getItem(KEYFEEDBACK));
    if (saveText) {
        // console.log(saveText);
        refs.form.value = saveText;
        // console.log(refs.form.value)
    }  
    // refs.form.elements.message.value = 123;
}


