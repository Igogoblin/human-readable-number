module.exports = function toReadable(number) {
    let num = [
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
    ];
    let dec = [
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
    let deci = [
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

    function check(a) {
        if (a < 10) {
            return num[a];
        } else if (a >= 10 && a < 20) {
            return dec[a % 10];
        } else if (a >= 20) {
            if (a % 10 != 0) {
                return deci[Math.floor(a / 10)] + " " + num[a % 10];
            }
            return deci[Math.floor(a / 10)];
        }
    }

    if (number < 10) {
        return num[number];
    } else if (number >= 10 && number < 20) {
        return dec[number % 10];
    } else if (number >= 20 && number < 100) {
        if (number % 10 != 0) {
            return deci[Math.floor(number / 10)] + " " + num[number % 10];
        }
        return deci[Math.floor(number / 10)];
    } else if (number == 100) {
        return "one hundred";
    } else if (number > 100) {
        if (number % 100 == 0) {
            return num[Math.floor(number / 100)] + " hundred";
        }

        return (
            num[Math.floor(number / 100)] + " hundred " + check(number % 100)
        );
    }
};
