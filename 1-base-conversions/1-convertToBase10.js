// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = (str) => {
  const hexadecimalBase = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  };
  let total = 0;
  const strWithoutId = str.slice(2).split("").reverse();
  const binaryOrHexadecimal = str.includes("0b") ? 2 : 16;

  for (let i = 0; i < strWithoutId.length; i++) {
    let currentChar = strWithoutId[i];
    total += Math.pow(binaryOrHexadecimal, i) * hexadecimalBase[currentChar];
  }

  return total;
};

/******************************************************************************/

console.log(convertToBase10("0b1100")); // 12
console.log(convertToBase10("0b0101")); // 5
console.log(convertToBase10("0b1000")); // 8
console.log(convertToBase10("0b0111")); // 7

console.log("––––––");

console.log(convertToBase10("0b10100101")); // 165
console.log(convertToBase10("0b11111111")); // 255
console.log(convertToBase10("0b01010101")); // 85
console.log(convertToBase10("0b00110011")); // 51

console.log("––––––");

console.log(convertToBase10("0xf")); // 15
console.log(convertToBase10("0xfa")); // 250
console.log(convertToBase10("0x1234")); // 4660
console.log(convertToBase10("0xc9a1")); // 51617
console.log(convertToBase10("0xbf12")); // 48914

module.exports = convertToBase10;
