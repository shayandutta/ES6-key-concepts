//Ternary Operators

let getRecipe1 = false;


function getRecipeOneName(recipeName){
    console.log(recipeName) ;
}
function getRecipeTwoName(recipeName){
    console.log(recipeName);
}


if(getRecipe1){
    console.log("pizza")
}else{
    console.log("coke")
}


getRecipe1 ? getRecipeOneName('pizza') : getRecipeTwoName('coke'); //ternary operators