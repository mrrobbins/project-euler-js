function solve() {
    var trail1 = 1;
    var trail2 = 2;
    var evenSum = 2;
    while(true) {
        var next = trail1 + trail2;
        console.log(next);
        if (next > 4000000) {
            return evenSum;
        }
        if (next % 2 == 0) {
            evenSum += next;
        }
        trail1 = trail2;
        trail2 = next;
    }
}