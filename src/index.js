module.exports = function toReadable(number) {
    const ones = [
        "",
        " one",
        " two",
        " three",
        " four",
        " five",
        " six",
        " seven",
        " eight",
        " nine",
        " ten",
        " eleven",
        " twelve",
        " thirteen",
        " fourteen",
        " fifteen",
        " sixteen",
        " seventeen",
        " eighteen",
        " nineteen",
    ];
    const tens = [
        "",
        "",
        " twenty",
        " thirty",
        " forty",
        " fifty",
        " sixty",
        " seventy",
        " eighty",
        " ninety",
    ];
    let res;
    const hundred = " hundred";
    arrNum = [];
    const numberArr = String(number).split("");
    numberArr.map((item) => {
        item = Number(item);
        arrNum.push(item);
    });
    arrNumLength = arrNum.length;
    console.log(arrNum);

    if (number === 0) {
        res = "zero";
    }
    if (number < 20 && number > 0) {
        res = ones[number];
    }
    if (number >= 20) {
        res = `${tens[arrNum[0]]}${ones[arrNum[1]]}`;
    }
    if (number >= 100) {
        res = `${ones[arrNum[0]]} hundred`;
        if (
            String(arrNum[1]) + String(arrNum[2]) < 20 &&
            String(arrNum[1]) + String(arrNum[2]) > 0
        ) {
            res = res + `${ones[number - arrNum[0] * 100]}`;
        }
        if (
            String(arrNum[1]) + String(arrNum[2]) >= 20 &&
            String(arrNum[1]) + String(arrNum[2]) < 100
        ) {
            res = res + `${tens[arrNum[1]]}${ones[arrNum[2]]}`;
        }
    }

    return res;
};
console.log(toReadable(0));
