const message = document.querySelector('#message');
var choices = document.querySelectorAll('.choice');

var comp_choice = Math.floor(Math.random() * 3);
const options = ['rock', 'paper', 'scissors'];

// the forEach method will input element and index to the function passed to the forEach method
choices.forEach((elem, i) => { // same as function(element, index) { ... }
    elem.value = i;
    elem.addEventListener('click', (e) => { // same as function(event) { ... }
        if (this.value == 0 && comp_choice == 2 || this.value == comp_choice + 1){

            // using back ticks allows us to use embedded JS in strings so we use it to call the option the computer chooses
            message.textContent = `Computer chose ${options[comp_choice]}. User wins!`;

            this.classList.add('winner'); // adds winner as a class which has styling based on styles.css
        } else if (elem.value == comp_choice) {

            // using back ticks allows us to use embedded JS in strings so we use it to call the option the computer chooses
            message.textContent = `Both user and computer chose ${options[comp_choice]}. Tied!`
        } else {

            // using back ticks allows us to use embedded JS in strings so we use it to call the option the computer chooses
            message.textContent = `Computer chose ${options[comp_choice]}. Computer wins!`;

            this.classList.add('loser'); // adds loser as a class which has styling based on styles.css
        }

        // puts a timer of 3 seconds before executing the inline function
        setTimeout(() => {
            message.textContent = 'Pick your poison!'; // resets the message text
            comp_choice = Math.floor(Math.random() * 3); // chooses new computer choice
            elem.classList = 'choice'; // removes any styling from the choice that the player picked
        }, 3000);
    });
});