const array = [2,3,4];
console.log(...array); //spreads the array
console.log([...array]); // returns the spreaded values in the array form

const array2 = [5,6,7];
console.log(...array, ...array2); //gives the spreaded values of both the arrays combined
console.log([...array, ...array2]); //gives the combined spreaded value in array form

console.log([999, ...array, 90, ...array2, 34]); //others elements can also be added this way