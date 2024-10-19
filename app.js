

//Part 1: Create the Math Module
console.log("Part 1: Create the Math Module")

    import multiply, {add, findMaxAndMultiply, subtract} from './mathModule.js'

    console.log("Addition function: 5 + 3: ")
    console.log(add(5,3));

    console.log("Subtraction function: 10 - 5: ")
    console.log(subtract(10,5));

console.log("")
//Part 2: Create the String Module
console.log("Part 2: Create the String Module")

    import {toUpperCase, toLowerCase} from './stringModule.js'

    console.log(toUpperCase('uppercase'));
    console.log(toLowerCase('LOWERCASE'));

console.log("")
//Part 3: Adding a Default Export
console.log("Part 3: Adding a Default Export")

    console.log('Multiply: ', multiply(4, 5));

console.log("")
//Part 4: Create and Use the Array Module
console.log("Part 4: Create and Use the Array Module")

    import { findMax, reverseArray } from './arrayModule.js';

    console.log('Max: ', findMax([1, 2, 3, 4, 5]));
    console.log('Reversed: ', reverseArray([1, 2, 3]));

console.log("")
//Part 5: Combine Functions Across Modules
console.log("Part 5: Combine Functions Across Modules")

    import { addAndLogUpper } from './mathModule.js';
    
    addAndLogUpper(10, 20); 

console.log("")
//Part 6: Final Challenge
console.log("Part 6: Final Challenge")

    const numbers = [13, 24, 7, 38, 49, 1];

    console.log(`Array: ${numbers}`)
    console.log("Multiplier: 2")
    findMaxAndMultiply(numbers,2);



