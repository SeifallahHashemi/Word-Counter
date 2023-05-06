const btn = document.querySelector('button');
const textArea = document.querySelector('textarea');
const wordCounter = document.querySelector('span');

btn.addEventListener('click', _ => {
    const numberOfWord = textArea.value.split(" ").length;
    wordCounter.textContent = numberOfWord;
})