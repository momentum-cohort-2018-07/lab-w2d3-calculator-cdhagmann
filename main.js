var display = document.getElementById("display");

for (var button of document.getElementsByClassName("append")) {
    button.addEventListener("click", buttonClick);
}

clear = document.getElementById('clear');
clear.addEventListener("click", function () {
    display.innerHTML = '';
});

equal = document.getElementById('equal');
equal.addEventListener("click", calculate);

document.addEventListener('keypress', function () {
    if (event.key === 'Enter') {
        calculate();
    } else if ('0123456789.+-*/'.includes(event.key)) {
        appendText(event.key);
    } else {
        display.innerHTML = '';
    }
});

function calculate() {
    try {
        display.innerText += '\n' + math.round(math.eval(display.innerText), 3);
        display.classList.add('results');
    } catch (error) {
        display.innerHTML = '';
    }
}

function buttonClick(e) {
    var button = e.toElement;
    appendText(button.innerText);
}

function appendText(text) {
    if (display.classList.contains('results')) {
        display.classList.remove('results');
        if ('+-*/÷×'.includes(text)) {
            display.innerText = display.innerText.split("\n")[1]; // store result if starting with operation
        } else {
            display.innerText = ''; // clear display if clicking on new number
        }
    }

    // Replace special characters to make math.eval work in
    var newText = '';
    if (text === '÷') {
        newText = '/';
    } else if (text === '×') {
        newText = '*';
    } else if (text === '.' && display.innerText.length === 0) {
        newText = '0.';
    } else if ('0123456789.+-*/'.includes(text)) {
        newText = text;
    }

    display.innerText += newText;
}