var sum = 0;

function addThree(){
    sum = sum + 3;
}
function addFive(){
    sum = sum + 5;
}

addThree();
console.log("addThree: " + sum);
addFive();
console.log("addFive: " + sum);

module.exports = {
    addThree,
    addFive
};