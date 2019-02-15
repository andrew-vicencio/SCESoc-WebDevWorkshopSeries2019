const message = document.querySelector('#message');
var choices = document.querySelectorAll('.choice p');

comp_choice = Math.floor(Math.random() * 3);
options = ['rock', 'paper', 'scissors'];

choices.forEach((elem, i) => { // same as doing function (elem, i) { ... }
    elem.value = i;
    elem.addEventListener('click', (e) => { // same as doing function (event) { ... }
        if (elem.value == 0 && comp_choice == 2 || elem.value > comp_choice){
            message.textContent = `Computer chose ${options[comp_choice]}. User wins!`;
        } else if (elem.value == comp_choice) {
            message.textContent = `Both user and computer chose ${options[comp_choice]}. Tied!`
        } else {
            message.textContent = `Computer chose ${options[comp_choice]}. Computer wins!`;
        }
        setTimeout(() => {
            message.textContent = 'Pick your poison!';
            comp_choice = Math.floor(Math.random() * 3);
        }, 2000);
    });
});