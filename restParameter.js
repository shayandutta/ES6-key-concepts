function getInfo(a,b,c,d,e){
    console.log(a,b,c,d,e);
    return 'shayan';
}
getInfo(3,4,5,6,7);


function getInformation(a,b, ...c){
    console.log(a,b,c);
}
getInformation(2,3,4,2,23,4,5,6,23,2,34); //prints 2 and 3 and the rest as an array, we do not have to pass in as many parameters as the number of arguements


function getInformation(a, ...c){
    console.log(a,c);
}
getInformation(2,3,4,2,23,4,5,6,23,2,34); //the rest parameter starts from 3, as it treats c as 3.