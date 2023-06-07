let score =JSON.parse(localStorage.getItem('score')) || {
    wins : 0,
    lose : 0,
    ties : 0
};

if(score.wins !== 0 || score.lose !== 0 || score.ties !== 0){
    updateScoreElement();
}

function computerMove(){
const randomNum = Math.random();
let systemMove = '';
if(randomNum >= 0 && randomNum < 1/3){
    systemMove = 'stone';
}
else if(randomNum >= 1/3 && randomNum < 2/3){
    systemMove = 'paper';
}
else if(randomNum >= 2/3 && randomNum < 1){
    systemMove = 'scissor';
}
return systemMove;
}

function game(playerMove){
const systemMove = computerMove();
let result = '';
if(playerMove === 'stone'){
    if(systemMove === 'stone'){
        result = 'Tie';
    }
    else if(systemMove === 'paper'){
        result = 'You Lose';
    }
    else if(systemMove === 'scissor'){
        result = 'You Win';
    }
}

else if(playerMove === 'paper'){
    if(systemMove === 'stone'){
        result = 'You Win';
    }
    else if(systemMove === 'paper'){
        result = 'Tie';
    }
    else if(systemMove === 'scissor'){
        result = 'You Lose';
    }
}

else if(playerMove === 'scissor'){
    if(systemMove === 'stone'){
        result = 'You Lose';
    }
    else if(systemMove === 'paper'){
        result = 'You Win';
    }
    else if(systemMove === 'scissor'){
        result = 'Tie';
    }
}

if(result === 'You Win'){
    score.wins++;
}
else if(result === 'You Lose'){
    score.lose++;
}
else if(result ==='Tie'){
    score.ties++;
}

localStorage.setItem('score', JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = result;

document.querySelector('.js-playermoves').innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="Paper" class="move-img"> <img src="images/${systemMove}-emoji.png" alt="Paper" class="move-img"> Computer`;
}

function updateScoreElement(){

    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Loses: ${score.lose} Ties: ${score.ties}`;
}
