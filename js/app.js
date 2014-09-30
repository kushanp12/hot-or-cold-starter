
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    $(".button").on('click', function(e){
        e.preventDefault();
        game();
        if (enter.keyCode == 13) {
            game();
        }
    });


var answer = 12;
console.log("The secret number is: " + answer);
var numberOfGuesses = 0;
var guesses = []; // Empty array where the guesses the user makes goes //
var distance = null;
var previousDistance = null;
var finish = false;

// Function that calls another function, game(), once the user submits //

// This function tells the user if they are warmer and colder to the correct answer //
function game() {
    var guess = parseInt($('#userGuess').val());

    // Makes sure the user input is check if it's a value within the guidelines of the rules //
    if (guess !== null && $.isNumeric(guess) && (1 < guess < 101)) {
        $('#userGuess').val('');
        numberOfGuesses += 1;
        $('#count').html(numberOfGuesses); 
        //--Pushes the submitted input into the array --//       
        guesses.push(guess);
        // Gets the absolute value so no return is negative //
        distance = Math.abs(answer - guess);
        previousDistance = Math.abs(answer - guesses[guesses.length - 2]);
        if (guess === answer) {
            $('#feedback').html('Congrats! You got it in ' + numberOfGuesses + ' attempts! The secret number was ' + answer);
            $('input').hide();
            $('#guessList').hide();
        } else {
            console.log(guess, answer, previousDistance, distance);
            if (isNaN(previousDistance)) {
                if (guess > 100) {
                $('#feedback').html('RULE# 1: Your guess must in between 1 and 100');
                }
                else if (guess > answer) {
                    $('#feedback').html('Guess lower! Last guess: ' + guess);
                } else if (guess < answer) {
                    $('#feedback').html('Guess higher! Last guess: ' + guess);
                }

            } else if (distance > previousDistance) {
                if (guess > answer) {
                    $('#feedback').html('You\'re getting colder, guess lower! Last guess: ' + guess);
                } else if (guess < answer) {
                    $('#feedback').html('You\'re getting colder, guess higher! Last guess: ' + guess);
                }
            } else if (distance < previousDistance) {
                if (guess > answer) {
                    $('#feedback').html('You\'re getting hotter, guess lower! Last guess: ' + guess);
                } else if (guess < answer) {
                    $('#feedback').html('You\'re getting hotter, guess higher! Last guess: ' + guess);
                }
            } else if (distance === previousDistance) {
                if (guess > answer) {
                    $('#feedback').html('You\'re on fire, guess lower! Last guess: ' + guess);
                } else if (guess < answer) {
                    $('#feedback').html('You\'re on fire, guess higher! Last guess: ' + guess);
                }
            } else {
            	console.log('');
            }
        }
    }
    // When input is left blank or not submitted with numbers, it alerts the user //
    else if (guess == '' || isNaN(guess)){
         $('#feedback').html('Please Submit a Number');
         $('#userGuess').val('');
    }

    $('.new').click(function (e) {
        e.preventDefault();
        answer = Math.floor((Math.random() * 100) + 1);
        console.log(answer);
        numberOfGuesses = 0;
        guesses = [];
        distance = null;
        previousDistance = null;
        $('input').show();
        $('#feedback').html('Make your Guess!');
        $('#userGuess').val('');
        $('#count').html(numberOfGuesses);
    });
}

});


