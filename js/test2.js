function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");

    if(str === reversedStr) return true;

    return false;
}

function main() {
    let str = 'abc';

    if(isPalindrome(str)) return str;

    let arrayOfStr = str.split("");
    let lastElement = arrayOfStr[arrayOfStr.length-1];
    let indexOfFoundElement = arrayOfStr.length-1;

    for(let i = arrayOfStr.length-2; i >= 0; i--) {
        if(lastElement === arrayOfStr[i]) {
            indexOfFoundElement = i;
            break;
        }
    }

    let numberOfElementsBetween = (arrayOfStr.length - indexOfFoundElement) - 2;

    if(numberOfElementsBetween % 2 !== 0 || numberOfElementsBetween === 0) {
        for(let i = indexOfFoundElement - 1; i >= 0; i--) {
            arrayOfStr.push(arrayOfStr[i]);
        }
    } else {
        for(let i = arrayOfStr.length - 2; i >= 0; i--) {
            arrayOfStr.push(arrayOfStr[i]);
        }
    }

    return arrayOfStr.join("");
}

console.log(main());