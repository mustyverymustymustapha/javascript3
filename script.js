// -Default Parameters- //
// Default parameters let a function have a certain value if no parameters are given. For example:
function writeHackClubHQAddress(line1 = "Falls Rd" , line2 = "Shelburne" , line3 = "Vermont")
console.log("Hack Club HQ is at " + line1 + ", " + line2 + ", " + line3 + ".")

// -Return Keyword- //
// The return keyword is used to return a value from a function at the location where it's called. For example:
let currentyear = 2024
let birthyear = 2018


function findDrakeAndHisWifesAge(currentyear - birthyear) {
  return currentyear - birthyear;
}

// -Helper Functions- //
// Helper functions are functions that are used inside other functions to help them do their job. For example:

// I was too lazy to come up with a Hack Club related piece of code, so I made a Celcius to Fahrenheit calculator.
function multiplyByNineFifths(number) {
  return number * (9/5);
};

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
};







// -Function Expressions- //
// Function expressions are functions that are created in another expression/variable. For example:

const zach = function() {
  return 'Zach Latta';
}


// -Arrow Functions- //
// Arrow functions are functions that are created in another expression/variable. For example:

const sum = (firstParameter, secondParameter) => { 
  return firstParameter + secondParameter; 
}; 


// -Concise Body Arrow Functions- //
// Concise Body Arrow Functions are the most condensed form of body arrow functions. For example:
const iNeedSleep = (time) => {
  return time === '9:00' ? 'I need to sleep!' : 'No sleep.'
}





// this is rock paper scissors and i took very long cuz im stupid

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }

    if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}


function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    console.log(`Your choice: ${playerChoice}`);
    console.log(`Computer's choice: ${computerChoice}`);
    console.log(determineWinner(playerChoice, computerChoice));
}

playGame('Rock');