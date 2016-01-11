function testFib() {
    console.assert(fib(0) === 0);
    console.assert(fib(1) === 1);
    console.assert(fib(2) === 1);
    console.assert(fib(3) === fib(1) + fib(2));
    console.assert(fib(5) === 5);
}

function testPrimes() {
    console.assert(arrayEquals(primes(10), [2, 3, 5, 7]));
}

function arrayEquals(array1, array2) {
    return (array1.length == array2.length) && array1.every(function(element, index) {
        return element === array2[index];
    });
};