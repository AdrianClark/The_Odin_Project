/*Project Euler Problem 1

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.*/

function problem1 (limit) {
    var theSum = 0;
    for (var i=0; i < limit; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            theSum = theSum + i;
        }
    }
    console.log(theSum);
}
problem1(1000);

/*Explanation:
I wrapped this project in a function with a parameter that allows for the same process to be run for a number that isn't 1000, as the problem asks for. I also let the loop run fully before I console.log anything. Then I just call the function with the right number. */