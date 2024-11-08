const choices = document.querySelectorAll('.choice');
const userChoiceText = document.getElementById('user-choice');
const computerChoiceText = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.textContent;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);

        userChoiceText.textContent = `You chose: ${userChoice}`;
        computerChoiceText.textContent = `Computer chose: ${computerChoice}`;
        resultText.textContent = result;
    });
});

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissor'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    }

    switch (userChoice) {
        case 'Rock':
            if (computerChoice === 'Scissor') {
                return 'You win!';
            } else {
                return 'Computer wins!';
            }
        case 'Paper':
            if (computerChoice === 'Rock') {
                return 'You win!';
            } else {
                return 'Computer wins!';
            }
        case 'Scissor':
            if (computerChoice === 'Paper') {
                return 'You win!';
            } else {
                return 'Computer wins!';
            }
    }
}