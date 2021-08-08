module.exports = function toReadable(number) {
    // function toReadable(number) {
    const ones = [
        "",
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
    const tens = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    let res;
    const hundred = " hundred";

    const numberArr = String(number).split("");
    let arrNum = numberArr.map((item) => Number(item));
    arrNumLength = arrNum.length;

    if (number === 0) {
        res = "zero";
    }
    if (number < 20 && number > 0) {
        res = ones[number];
    }
    if (number >= 20) {
        res = `${tens[arrNum[0]]} ${ones[arrNum[1]]}`;
    }
    if (number >= 100) {
        res = `${ones[arrNum[0]]} hundred`;
        if (
            String(arrNum[1]) + String(arrNum[2]) < 20 &&
            String(arrNum[1]) + String(arrNum[2]) > 0
        ) {
            res = res + ` ${ones[number - arrNum[0] * 100]}`;
        }
        if (
            String(arrNum[1]) + String(arrNum[2]) >= 20 &&
            String(arrNum[1]) + String(arrNum[2]) < 100
        ) {
            res = res + ` ${tens[arrNum[1]]} ${ones[arrNum[2]]}`;
        }
    }
    res = res.split("");
    if (res[res.length - 1] === " ") {
        res.splice(-1, 1);
    }
    return res.join("");
};
