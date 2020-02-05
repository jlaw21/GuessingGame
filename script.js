let DoTheThing = function(){

  /* Loops have three parts: CONTROL VARIABLE; CONTROL BOOLEAN EXPRESSION; CONTROL INCREMENT/DECREMENT/UPDATE

     CONTROL VARIABLE - controls when the loop executes

     CONTROL BOOLEAN EXPRESSION - boolean expression using the control variable which should at some point evaluate to false

     CONTROL UPDATE - assigning a new value to the control variable INSIDE the loop so that the boolean expression eventually evaluates to false

   */

    let restart = "Yes";
    while(restart === "Yes"){

        //Computer picks a number
        let computerNumber = Math.floor((Math.random()*10)+1);
        //Alert to get player's guess

        let playersGuess = parseInt(prompt("Guess a number between 1 and 10."), 10);

        while(playersGuess !== computerNumber){

            //Compare guess to number
            //if higher - Alert too high and then get player's guess - repeat
            //if lower - Alert too low and then get player's guess - repeat

            if(playersGuess > computerNumber ){
                playersGuess = parseInt(prompt("Too high, guess again."), 10);
            }else
                playersGuess = parseInt(prompt("Too Low, guess again."), 10);
        }

        //if equal - Alert You win then ask to restart
        //if yes - repeat from beginning
        //if no - set computer on fire and escape
        alert("YOU GUESSED IT!!!");

        restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive)");
    }
};

let DoTheOtherThing = function(){

    //SAME PROGRAM WITH A DO-WHILE LOOP
    let restart;

    do{
        let computerNumber = Math.floor((Math.random()*10)+1);
        let playersGuess;

        do{
            playersGuess = parseInt(prompt("Guess a number between 1 and 10."), 10);

            if(playersGuess > computerNumber ){
                playersGuess = parseInt(prompt("Too high, guess again."), 10);
            }else
                playersGuess = parseInt(prompt("Too Low, guess again."), 10);

        }while(playersGuess !== computerNumber);

        alert("YOU GUESSED IT!!!");
        restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive)");

    }while(restart === "Yes");

};

















