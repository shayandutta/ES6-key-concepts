//logical AND | logical OR


// function getName(name){
//     return name;
// }
// let a = true;
// let b = false;

// console.log(a&&getName('shayan'));
// console.log(a||getName('shayan')); 




//template literals

// let name1= "shayan";
// let name2= "dutta";

// console.log(name1 + " " + name2); //normal string concatenation
// console.log(`${name1} ${name2}`); //template literals




//Ternary Operators

let getRecipe1 = false;

function getRecipeOneName(recipeName){
    console.log(recipeName) ;
}
function getRecipeTwoName(recipeName){
    console.log(recipeName);
}

// if(getRecipe1){
//     console.log("pizza")
// }else{
//     console.log("coke")
// }

getRecipe1 ? getRecipeOneName('pizza') : getRecipeTwoName('coke');