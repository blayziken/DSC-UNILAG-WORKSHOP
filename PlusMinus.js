// SOLUTION TO THE HACKERRANK PLUS MINUS PROBLEM

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
    // arr = [-4, 3, -9, 0, 4, 1];

    var positiveValues= 0;
    var negativeValues= 0; 
    var zeroValues = 0;

    const ArrayLength = arr.length;

    for (var i=0; i < arr.length; i++) {
        if (arr[i] > 0){
            positiveValues++;
        } else if (arr[i] < 0) {
            negativeValues++;
        } else {
            zeroValues++;
        }
    }
    console.log(positiveValues/ArrayLength);
    console.log(negativeValues/ArrayLength);
    console.log(zeroValues/ArrayLength);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
