import throttle from "lodash.throttle";

const KEYFEEDBACK = "feedback-form-state";

const findFormEl = document.querySelector('.feedback-form')

findFormEl.addEventListener('input', throttle(onTextInput, 500));
findFormEl.addEventListener('submit', onFormSubmit);
installDataFromStorage()

function onTextInput(event) {
    //коли виникає подія input потрібно створити об'єкт з двома полями в локальне сховище
    const formaData = {
        email: findFormEl.email.value,
        message: findFormEl.message.value
    }
    localStorage.setItem(KEYFEEDBACK, JSON.stringify(formaData));
}

function onFormSubmit (evt) {
    evt.preventDefault();
    // при submit потрібно взяти дані зі сїовища і вивести їх у консоль
    const dataFromStorage = JSON.parse(localStorage.getItem(KEYFEEDBACK))
    console.log(dataFromStorage);
    //очищаємо форму
    evt.target.reset();
    //очищаємо локальне сховище
    localStorage.removeItem(KEYFEEDBACK)
}

//при перезавантажені сторінки беремо дані зі сховища, якщо вони є і підставляємо їх у поля форми
function installDataFromStorage() {
    const dataFromStorage = JSON.parse(localStorage.getItem(KEYFEEDBACK));
    
    if (dataFromStorage) {
    findFormEl.elements.email.value = dataFromStorage.email;
    findFormEl.elements.message.value = dataFromStorage.message; 
    }
}


// let formaData = {};

// const refs = {
//     form: document.querySelector('.feedback-form'),
//     textarea: document.querySelector('textarea'),
// }

// refs.form.addEventListener('submit', onFormSubmit);
// refs.form.addEventListener('input', throttle(onTextInput, 500))
// installDataFromStorage()

// function onTextInput(event) {
//     const inputText = event.target.value;
//     formaData[event.target.name] = inputText;
//     localStorage.setItem(KEYFEEDBACK, JSON.stringify(formaData));
// }

// function onFormSubmit(evt) {
//     evt.preventDefault();
//     evt.target.reset();
//     localStorage.removeItem(KEYFEEDBACK)
// }

// function installDataFromStorage() {
//     const dataFromStorage = JSON.parse(localStorage.getItem(KEYFEEDBACK));
//     if (dataFromStorage) {
//         console.log(dataFromStorage);
//         refs.form.elements.email.value = dataFromStorage.email;
//         refs.form.elements.message.value = dataFromStorage.message;
//         formaData.email = dataFromStorage.email;
//         formaData.message = dataFromStorage.message;
//     }  
//     // refs.form.elements.message.value = 123;
// }
