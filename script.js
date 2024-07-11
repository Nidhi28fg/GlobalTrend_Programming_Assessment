// 1. FizzBuzz Function Plan:
// Loop through numbers 1 to 100.
// Print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both 3 and 5.
// Code:

// 1. first we create the fizzBuzz function
// 2. then we apply loop function till 100...
// 3. then we apply 'if else if else' contion within for funtion beacuse we need othes number which devide by 3 and 5.

function fizzBuzz() {
    // we create a loop other run till 100
    for (let i = 1; i <= 100; i++) {
        // then we create if condition .. if our num devide by 3 and 5 ... print "FizzBuzz"
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) { 
            console.log("Fizz");
            // if your 1st condition doesn't ture, we  going 
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}

fizzBuzz();

// 2. Simple Arithmetic Expression Evaluator Plan:

// Use the eval function to evaluate the expression.

function evaluateExpression(expression) {
    return eval(expression);
}

console.log(evaluateExpression("3+5-2"));

// 3. Flatten a Nested Array Plan:
// Use recursion to flatten the array.

function flattenArray(nestedArray) {
    return nestedArray.reduce((acc, val) => 
        Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
}

console.log(flattenArray([1, [2, [3, [4]], 5]]));

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

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

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
