function solve() {
    var target = 600851475143;
    var maxPrimeFactor = Math.ceil(Math.sqrt(target));
    var primes = primes(maxPrimeFactor);
    for (i in primes) {
        var largestPrime = primes[i];
        var testDividend = target % largestPrime;
        while (true) {
            if (testDividend === 0) {
                if (isPrime(testDividend, primes)) {
                    largestPrime = testDividend;
                }
            }
        }
    }
}

function isPrime(num, primes) {
    for (i=0; i<primes.length; i++) {
        if (num === primes[i]) {
            return true;
        }
    }
    return false;
}

