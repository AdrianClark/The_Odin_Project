/*Project Euler problem 3

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 60085147?

*/

//First, write a function that checks to see if a number by itself
//is a prime number or not. This one just takes a number and sees if
//can be divided evenly by any number before it.
function isPrime (number) {
    for (var i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}

function problem3 (theNumber) {
    //declare variables.
    var biggest = 0;
    //If theNumber is prime there isn't any need to continue with the function.
    //We should just console.log theNumber and return.
    if (isPrime(theNumber)) {
        console.log(theNumber);
        return;
    }
    //If theNumber isn't prime, increment down to zero checking to see two things:
        //1. If theNumber is divisible evenly by i.
        //2. If i is a prime number itself.
    for (var i = theNumber - 1; i > 0; i--) {
        if (theNumber % i == 0 && isPrime(i)) {
            //If both conditions are true, then i is the largest prime factor for theNumber.
            //Store i in the variable biggest, console.log biggest and then immediately exit the loop.
            //If we didn't exit the loop immediately after we found the largest prime, the loop would
            //keep going, finding other prime factors of theNumber. That's a waste of resources,
            //since we only want the largest prime factor. 
            biggest = i;
            console.log(biggest);
            return;
        }
    }
}

problem3(60085147);