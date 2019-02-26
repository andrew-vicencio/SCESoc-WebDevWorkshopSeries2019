var choices = document.querySelectorAll('.choice');
var message = document.querySelector('.message');

// for each will input the elem and the index of that element into any function passed to it
choices.forEach(function(elem, i) {
    elem.value = i;
    elem.addEventListener('click', function(){
        comp_choice = Math.floor(Math.random() * 3);
        if (this.value == comp_choice) {
            message.textContent = "User and computer tied! Play again!";
        } else if (this.value == comp_choice + 1 || this.value == 0 && comp_choice == 2) {
            message.textContent = "User won! Play again!";
        } else {
            message.textContent = "Computer won! Play again!";
        }
        
    });
});