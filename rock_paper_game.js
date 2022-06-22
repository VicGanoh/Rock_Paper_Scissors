const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    } else {
      console.log('Error!');
    }
  };
  
  const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    let outcome = '';
    switch(randomNumber){
      case 0:
        outcome = 'rock';
        break;
      case 1:
       outcome = 'paper';
       break;
      case 2:
        outcome = 'scissors';
        break;
    }
    return outcome;
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if(userChoice === computerChoice){
      return 'The game is a tie!';
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    else if(userChoice === 'paper'){
      if(computerChoice === 'scissors'){
        return 'The computer won!';
      }else {
        return 'You won!';
      }
    }
    else if(userChoice === 'scissors'){
      if(computerChoice === 'rock'){
        return 'The computer won!';
      } else {
        return 'You won!';
      }
    }
    else if(userChoice === 'bomb'){
      if(computerChoice === 'rock' || computerChoice === 'paper' || computerChoice === 'scissors'){
      }
      return 'You won!';
    }
  
  }
  
  function playGame(){
    let userChoice = getUserChoice('scissors');
    let computerChoice = getComputerChoice();
    console.log('You chose: ' + userChoice);
    console.log('Computer chose: ' + computerChoice);
    console.log(determineWinner
    (userChoice, computerChoice));
  }
  
  playGame();