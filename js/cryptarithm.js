let crypt = ["SEND", "MORE", "MONEY"];
// let crypt = ["TEN", "TWO", "ONE"];


let solutionsForCrypt = [
    ['O', '0'],
    ['M', '1'],
    ['Y', '2'],
    ['E', '5'],
    ['N', '6'],
    ['D', '7'],
    ['R', '8'],
    ['S', '9']
];

// let solutionsForCrypt = 
// [           
//     ['O', '1'],
//     ['T', '0'],
//     ['W', '9'],
//     ['E', '5'],
//     ['N', '4']
// ];

const solution = (crypt, mapping) => {
    if(crypt.length < 3) return false;
    let decodedCrypt = [];
    let validCrypt = true;

    crypt.map((word) => {
        let decodedString = "";
        for(let i = 0; i < word.length; i++) {
            let character = word.charAt(i);

            solutionsForCrypt.map((solutionForCrypt) => {
               if(solutionForCrypt[0] === character) {
                decodedString += solutionForCrypt[1];
               } 
            })
        }
        decodedCrypt.push(decodedString);
    });
    
    decodedCrypt.map((word) => {
        if(word.charAt(0) === '0') {
            validCrypt = false;
            return;
        }
    });

    if(validCrypt && (parseInt(decodedCrypt[0]) + parseInt(decodedCrypt[1]) === parseInt(decodedCrypt[2]))) 
        return true;
    else 
        return false;
}

console.log(solution(crypt, solutionsForCrypt));