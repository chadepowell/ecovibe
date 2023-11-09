const buttons = document.querySelectorAll('button');

function showPrompt(event) {
    // If nav button is clicked, do nothing
    if ( event.target.parentElement == document.querySelector( 'nav .toggler' ) ) {
        return;
    }

    alert('You clicked OK. Proceeding...');

    const userResponse = prompt('Do you want to proceed? (Yes or No)').toLowerCase();
    if (userResponse === 'yes') {
        alert('You clicked Yes!');
    } else if (userResponse === 'no') {
        alert('You clicked No!');
    } else {
        alert('Invalid response. Please enter Yes or No.');
    }
}
buttons.forEach(button => {
    button.addEventListener('click', showPrompt);
});
