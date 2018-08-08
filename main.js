var appendButtons = document.getElementsByClassName("append");
for (var button of appendButtons) {
    button.addEventListener("click", appendText);
}

clear = document.getElementById('clear');
clear.addEventListener("click", function () {
    var display = document.getElementById("display");
    display.innerHTML = '';
});

equal = document.getElementById('equal');
equal.addEventListener("click", function (e) {
    console.log(e);
    var display = document.getElementById("display");
    console.log(display.innerText);
    display.innerText += '\n' + math.round(math.eval(display.innerText), 3);
    display.classList.add('results');
});

function appendText(e) {
    console.log(e);
    var button = e.toElement;
    var display = document.getElementById("display");
    if (display.classList.contains('results')) {
        display.classList.remove('results');
        if (!button.classList.contains('operation')) {
            display.innerText = '';
        } else {
            display.innerText = display.innerText.split("\n")[1];
        }
    }

    // Replace special characters to make it work in
    var newText = '';
    if (button.innerText === '÷') {
        newText = '/';
    } else if (button.innerText === '×') {
        newText = '*';
    } else {
        newText = button.innerText;
    }

    display.innerText += newText;
}



// bear.addEventListener('click', bearSays);

// var bearMessages = ["I love you", "Do you have any honey?", "Have you seen my hat?"];

// function bearSays() {
//     var msg = bearMessages[Math.floor(Math.random() * bearMessages.length)];
//     var hardCodedMsg = bearMessages[0];
//     document.querySelector('.message').innerText = msg;
// }