
//destructuring in objects and array


const productName= 'apple';
const rating = 5;
const product = {
    productName,
    rating,
}
console.log(product);


const productTwo = {
    description: "this is a laptop",
    id:"productID",
    rating
}
// we only want the description and id of product2

const getProduct2Description = productTwo.description; //this is a normal approach
console.log(getProduct2Description);
console.log(productTwo.description);


const {description, id} = productTwo; //destructuring the object
console.log(description);
console.log(id);


const array = [1,2,3];
const [getArrayFirstValue, getArraySecondValue, getArrayThirdValue, getArrayFourthValue] = array; //destructuring the array //getArrayFirstValue and getArraySecondValue means 1 and 2
console.log(getArrayFirstValue);
console.log(getArraySecondValue);
console.log(getArrayThirdValue);
console.log(getArrayFourthValue); //this will give us `undefined` because no such element exists in the array