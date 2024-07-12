// 1. FizzBuzz Function Plan:
// Loop through numbers 1 to 100.
// Print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5.
// Code:


function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

// 2. Simple Arithmetic Expression Evaluator:
// Use the eval function to evaluate the expression.

/**
 * Calculates the result of a simple arithmetic expression with addition and subtraction.
 * @param {string} expression - The arithmetic expression to calculate.
 * @returns {number} - The result of the calculation.
 */
function calculateExpression(expression) {
    // Use a regular expression to find all numbers and operators in the input string.
    const tokens = expression.match(/[\d.]+|[-+]/g);
    
    // Initialize the running total and current operator.
    let total = 0;
    let currentOperator = '+';
    
    // Loop through the array of tokens.
    for (let token of tokens) {
        if (!isNaN(token)) {
            // If the token is a number, convert it to a number type and apply the current operator.
            let num = parseFloat(token);
            if (currentOperator === '+') {
                total += num;
            } else if (currentOperator === '-') {
                total -= num;
            }
        } else {
            // If the token is an operator, update the current operator.
            currentOperator = token;
        }
    }
    
    // Return the final result.
    return total;
}

// Example usage:
console.log(calculateExpression("10 + 20 - 5 + 3")); // Output: 28
console.log(calculateExpression("100 - 30 + 50 - 10")); // Output: 110


// 3. Flatten a Nested Array Plan:
// Use recursion to flatten the array.

function flattenArray(nestedArray) {  
    return nestedArray.reduce((acc, val) =>
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}


console.log(flattenArray([1, [2, [3, [4, 8, 9]], 5]]));

  

// 4. Check if Two Strings are Anagrams :

// Sort both strings and compare them.


function areAnagrams(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

console.log(areAnagrams("listen", "silent"));

// 5. Remove Duplicates from an Array
// Use a Set to remove duplicates.

function removeDuplicates(array) {
    return [...new Set(array)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 5]));

// 6. Capitalize the First Letter of Each Word
// Split the string into words, capitalize each word, and join them back.

function capitalizeFirstLetterOfEachWord(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalizeFirstLetterOfEachWord("hello world"));

// 7. Generate Fibonacci Sequence
// Use a loop to generate the Fibonacci sequence.

function generateFibonacci(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib.slice(0, n);
}

console.log(generateFibonacci(10));

// 8. Implement a Simple HashMap

// Create a HashMap class with put, get, and remove methods.


class HashMap {
    constructor() {
        this.map = {};
    }

    put(key, value) {
        this.map[key] = value;
    }

    get(key) {
        return this.map[key];
    }

    remove(key) {
        delete this.map[key];
    }
}

const myHashMap = new HashMap();
myHashMap.put("name", "John");
console.log(myHashMap.get("name"));
myHashMap.remove("name");
console.log(myHashMap.get("name"));


// 9. Filter Out Even Numbers from an Array
// Use the filter method to remove even numbers.

function filterEvenNumbers(array) {
    return array.filter(num => num % 2 !== 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));

// 10. Convert String to Title Case
// Split the string into words, capitalize each word, and join them back.

function toTitleCase(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

console.log(toTitleCase("this is a title case string"));
