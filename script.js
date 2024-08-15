let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => Math.floor(Math.random()*10)
// const compareGuesses = (human, computer, target) => {
//   const humanDifference = Math.abs(human - target);
//   const computerDifference = Math.abs(computer - target);
//   return humanDifference <= computerDifference;
// };

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
};
const advanceRound = () => {
  currentRoundNumber += 1;
};
const getAbsoluteDistance = (num1, num2) => Math.abs(num1 - num2);

const compareGuesses = (human, computer, target) => {
  if (human < 0 || human > 9) {
    alert('Your guess is out of range!');
    return false;
  }
  const humanDifference = getAbsoluteDistance(human, target);
  const computerDifference = getAbsoluteDistance(computer, target);
  return humanDifference <= computerDifference;
};

