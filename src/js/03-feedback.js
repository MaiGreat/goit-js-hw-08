import throttle from "lodash.throttle";

const KEYFEEDBACK = "feedback-form-state";

const formaData = {};

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('textarea'),
    // input: document.querySelector('iput')
}

console.log(refs);

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onTextInput, 500));
textarea()

refs.form.addEventListener('input', evt => {
    formaData[evt.target.name] = evt.target.value;
    console.log(formaData)
})

function onTextInput(event) {
    const text = event.target.value;
    console.log(text);

    localStorage.setItem(KEYFEEDBACK, text)
}

function onFormSubmit(evt) {
    evt.preventDefault();
    evt.target.reset();
    localStorage.removeItem(KEYFEEDBACK)
}

function textarea() {
    const saveText = localStorage.getItem(KEYFEEDBACK);
    if (saveText) {
        console.log(saveText);
        refs.textarea.value = saveText;
    }
    
}
