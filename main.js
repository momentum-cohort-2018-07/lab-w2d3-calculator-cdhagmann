var display = document.getElementById("display");

for (var button of document.getElementsByClassName("button")) {
    button.addEventListener("click", buttonClick);
}

document.addEventListener('keypress', keyPress);

function buttonClick(e) {
    var buttonText = e.target.innerText;
    main(buttonText);
}

function keyPress(e) {
    var keyText = e.key;
    main(keyText);
}

function main(text) {
    if (text === 'Enter' || text === "=") {
        calculate();
    } else if ('0123456789.+-*/÷×()^%'.includes(text)) {
        appendText(text);
    } else {
        displayClear();
    }
}

function calculate() {
    try {
        display.innerText += '\n' + math.round(math.eval(display.innerText), 3);
    } catch (error) {
        display.innerText += '\n' + 'Error';
    }
    display.classList.add('resulted');
}

function appendText(text) {
    if (display.classList.contains('resulted')) {
        display.classList.remove('resulted');
        if ('+-*/÷×%^'.includes(text) && display.innerText.split("\n")[1] !== 'Error') {
            display.innerText = display.innerText.split("\n")[1]; // store result if starting with operation
        } else {
            display.innerText = ''; // clear display if clicking on new number
        }
    }

    // Replace special characters to make math.eval work in
    var newText = '';
    var displayText = display.innerText;
    if (text === '÷') {
        newText = '/';
    } else if (text === '×') {
        newText = '*';
    } else if (text === '.' && (displayText.length === 0 || '+-*/%^'.includes(displayText.substr(displayText.length - 1)))) {
        newText = '0.';
    } else {
        newText = text;
    }

    display.innerText += newText;
}

function displayClear() {
    display.innerHTML = '';
}