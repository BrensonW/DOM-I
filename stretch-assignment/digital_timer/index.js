// Creating timer

const tensMS = document.querySelector("#msTens");
const hundredsMS = document.querySelector("#msHundreds");
const secondsOnes = document.querySelector("#secondOnes");
const secondsTens = document.querySelector("#secondTens");
const digits = document.querySelectorAll(".digit");

function counter() {
        let count = 0;

        return function() {
            if (count < 9) {
                return count++;
            } else {
                count = 0;
                return 9;
            }
        };
}
const newTimer = counter();


// Setting Timer to 00:00
msTens.innerText = 0;
msHundreds.innerText = 0;
secondOnes.innerText = 0;
secondTens.innerText = 0;



// Object Literal holding the timer with a start function and a stop function for being able to start and stop from anywhere in the javascript. 
const timer =  {

    stopwatch: null, // Sets the variable for stopwatch for creating the setInterval

// Calling timer.start(1) will start the timer and stop at 10 seconds.
    // max - tells the timer when to stop in multiples of 10, ex. 1 = 10, 2 = 20... etc.
    start: function(max) {
        
        startBtn.setAttribute("disabled", "disabled"); // Disable start button upon starting timer
        digits.forEach(digit => digit.classList.remove("redDigit")); // removes redDigit class if pressing start again after stops

        // sets the interval for incrementing every 10ms
        this.stopwatch = setInterval(function(){
            if(msTens.innerText < 9) {
                msTens.innerText = newTimer();
            } else {
                msTens.innerText = newTimer();

                if(msHundreds.innerText < 9) {
                    msHundreds.innerText++;
                } else {
                    msHundreds.innerText = 0;

                    if(secondOnes.innerText < 9) {
                        secondOnes.innerText++;
                    } else {
                        secondOnes.innerText = 0;
                        secondTens.innerText++;

                        if(secondTens.innerText >= max) {
                            //secondTens.innerText = 1;
                            clearInterval(timer.stopwatch);
                            digits.forEach(digit => digit.classList.add("redDigit"));
                            startBtn.removeAttribute("disabled");

                        }

                    }
                }

            }


        }, 10);
    },
    stop: function() { // calling timer.stop() will stop the timer at the current count.
        clearInterval(this.stopwatch);
    }    
}


// button selectors
const startBtn = document.querySelector("#start");
const resetBtn = document.querySelector("#reset");
const stopBtn = document.querySelector("#stop");

// Setting event listener onclick to buttons and calling corresponding functions.
startBtn.setAttribute("onclick", "timer.start(1)");
resetBtn.setAttribute("onclick", "resetTimer()");
stopBtn.setAttribute("onclick", "stopTimer()");

// Adding style to buttons
startBtn.style.backgroundColor = 'blue';
startBtn.style.color = 'yellow';
startBtn.style.padding = '1rem';
startBtn.style.margin = '0.5rem';

stopBtn.style.backgroundColor = 'blue';
stopBtn.style.color = 'yellow';
stopBtn.style.padding = '1rem';
stopBtn.style.margin = '0.5rem';

resetBtn.style.backgroundColor = 'blue';
resetBtn.style.color = 'yellow';
resetBtn.style.padding = '1rem';
resetBtn.style.margin = '0.5rem';

// Reset the timer to 00:00, removes redDigit class, stops the timer, and enables start button.
function resetTimer() {
    timer.stop();
    msTens.innerText = 0;
    msHundreds.innerText = 0;
    secondOnes.innerText = 0;
    secondTens.innerText = 0;
    digits.forEach(digit => digit.classList.remove("redDigit"));
    startBtn.removeAttribute("disabled");
}

// stops the timer at current count, enables start button.
function stopTimer() {
    timer.stop();
    startBtn.removeAttribute("disabled");
}





