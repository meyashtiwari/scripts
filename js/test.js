//Using Javascript, convert the following array:

[ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ]

//to:

"a < b OR (c == d AND e != f)"

// Please make your response as elegant and legible as possible

class Stack { 
    constructor() { 
        this.items = []; 
    }
    push(element) { 
        this.items.push(element); 
    } 
    pop() {  
        if (this.items.length == 0) return "empty stack"; 
        return this.items.pop(); 
    } 
    isEmpty() { 
        return this.items.length == 0; 
    } 
}

let stack = new Stack();
stack.push('(');

function convert(array) {
    [array[0], array[1]] = [array[1], array[0]];
    array.forEach((element, index) => {
        if(Array.isArray(element)) {
            stack.push('(');
            convert(element);
        } else {
            stack.push(element);
        }
        if(index === array.length-1) {
            stack.push(')');
        }
    });
    if(array.some(el => !Array.isArray(el))) return stack.items.join(' ').replace(/,/g, ' ');
}


console.log(convert([ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ]));
//Output: ( ( a < b ) OR ( ( c == d ) AND ( e != f ) ) )