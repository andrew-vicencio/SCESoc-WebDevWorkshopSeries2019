const message = document.querySelector('#message');
var choices = document.querySelectorAll('.choice p');

comp_choice = Math.floor(Math.random() * 3);

choices.forEach((elem, i) => {
    elem.value = i;
    elem.addEventListener('click', (e) => {
        if (elem.value == 0 && comp_choice == 2 || elem.value > comp_choice){
            message.textContent = 'User wins!';
        } else {
            message.textContent = 'Computer wins!';
        }
        setTimeout(() => {message.textContent = 'Pick your poison!'}, 1500);
    });
});