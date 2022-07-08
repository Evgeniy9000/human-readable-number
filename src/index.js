module.exports = function toReadable(number) {
    let result;
    const one = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const any = [
        "",
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number < 20) {
        result = one[number];
    } else if (number < 100) {
        anyCalc = Math.floor(number / 10);
        result = any[anyCalc] + " " + one[number % 10];
    } else {
        oneCalc = Math.floor(number / 100);
        result = one[oneCalc] + " hundred " + toReadable([number % 100]);
    }
    return result;
};
