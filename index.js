// Write your solution here!
let cats = ["Milo","Otis","Garfield"]

function destructivelyAppendCat(name){
    cats.push(name)
}
function  destructivelyPrependCat(name){
    cats.unshift(name)
}
function  destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}
function  destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}
function appendCat(name ) {
    const newCatsArray = [...cats, name];
    return newCatsArray;
}
function  prependCat(name){
    const array = [name,...cats];
    return array;
}
function removeLastCat(){
    const spliced = cats.slice(0,cats.length-1);
    return spliced;
}
function removeFirstCat(){
    const arr = cats.slice(1)
    return arr;
}