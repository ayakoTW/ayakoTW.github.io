var sum = 0;
function calculation(num) {
    for (var q = 1; q < 100; q++) {
        num = num + q;
    }
    return num;
}

sum = calculation(sum);
document.write(sum);
console.log(sum);