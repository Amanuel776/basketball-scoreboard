let homeScore = document.getElementById('home-score')
let guestScore = document.getElementById('guest-score')
let newGameBtn = document.getElementById('newgame-btn');
let homeCount = 0;
let guestCount = 0;
function addOneHome(){
    homeCount += 1
    homeScore.textContent = homeCount;
}
function addTwoHome(){
    homeCount +=2
    homeScore.textContent = homeCount;
}
function addThreeHome(){
    homeCount += 3;
    homeScore.textContent = homeCount;
}
function addOneGuest(){
    guestCount += 1
    guestScore.textContent = guestCount;
}
function addTwoGuest(){
    guestCount +=2
    guestScore.textContent = guestCount;
}
function addThreeGuest(){
    guestCount += 3;
    guestScore.textContent = guestCount;
}
function newGame(){
    homeCount = 0;
    guestCount = 0;
    guestScore.textContent = guestCount;
    homeScore.textContent = homeCount;
}