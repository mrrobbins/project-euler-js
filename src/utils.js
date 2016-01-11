// finds nth fib number
function fib(n) {
    if (n === 0 || n === 1) {
        return n;
    } else if (n === 2) {
        return 1;
    } else {
        return fib(n-1) + fib(n-2);
    }
}

// returns an array of primes up to n
function primes(n) {
    var realNumbers = [];
    for(i=0; i<=n; i++) {
        realNumbers.push(true);
    }
    var primeNumbers = [];
    for (i=0; i<=n; i++) {
        if (i == 0 || i == 1 || realNumbers[i] === false) {
            continue;
        }
        primeNumbers.push(i);
        for (j=i; true; j++) {
            if (i*j < realNumbers.length) {
                realNumbers[i*j] = false;
            } else {
                break;
            }
        }
    }
    return primeNumbers;
}