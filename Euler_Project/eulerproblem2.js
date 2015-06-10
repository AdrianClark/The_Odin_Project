/*Project Euler problem 2

Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.*/

function problem2 () {
    //set the variables
    var sum = 0;
    var fibonacci = [1,2];
    var i = 2; //begin at 2 to account for the sequence already in the array.
    
    //run a loop that adds the last two elements of 
    //the fibonacci array together, and pushes that sum
    //to the fibonacci array. The loop also checks to see that the
    //last element of the array is less than 4 million, so we don't keep
    //counting longer than we have to.
    while (fibonacci[fibonacci.length - 1] < 4000000) {
        fibonacci.push(fibonacci[i-1] + fibonacci[i-2]);
        i++;
    }
    
    //The loop gave us the Fibonacci sequence accurately,
    //but the process threw in a number at the end that's
    //greater than 4 million. To make sure our array is
    //in accordance with the problem, run a loop to remove
    //any number in the fibonacci array that's greater
    //than 4 million.
    for (var i = 0; i < fibonacci.length; i++) {
        if (fibonacci[i] > 4000000) {
            fibonacci.splice(i, 1);
        }
    }
    
    //Run ANOTHER loop to add up all the numbers of
    //the fibonacci array into the variable sum if the value is even.
    for (var i = 0; i < fibonacci.length; i++) {
        if (fibonacci[i] % 2 == 0) {
            sum += fibonacci[i];
        }
    }
    console.log(sum); 
}

problem2(); 
