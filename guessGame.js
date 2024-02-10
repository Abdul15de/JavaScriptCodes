let number = 25;
let guessnum = prompt("Enter your number");
while(number != guessnum)
{
    guessnum = prompt("Wrong guess!! Guess again");
}
console.log("Right Guess!!!");