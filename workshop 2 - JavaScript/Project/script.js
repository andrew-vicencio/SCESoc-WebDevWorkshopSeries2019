const message = document.querySelector('#message');
var choices = document.querySelectorAll('.choice');

var comp_choice = Math.floor(Math.random() * 3);
const options = ['rock', 'paper', 'scissors'];

choices.forEach(function (elem, i) { // same as doing function (elem, i) { ... }
    elem.value = i;
    elem.addEventListener('click', function (e) { // same as doing function (event) { ... }
        if (this.value == 0 && comp_choice == 2 || this.value == comp_choice + 1){
            message.textContent = `Computer chose ${options[comp_choice]}. User wins!`;
            this.classList.add('winner');
        } else if (elem.value == comp_choice) {
            message.textContent = `Both user and computer chose ${options[comp_choice]}. Tied!`
        } else {
            message.textContent = `Computer chose ${options[comp_choice]}. Computer wins!`;
            this.classList.add('loser');
        }

        setTimeout(function () {
            message.textContent = 'Pick your poison!';
            comp_choice = Math.floor(Math.random() * 3);
            elem.classList = 'choice';
        }, 3000);
    });
});