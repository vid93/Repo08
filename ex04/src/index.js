
function localScope(){
     myVariable = "I am here";
    return myVariable;
}
localScope();

if(typeof myVariable != "undefined"){
    console.log('inside localScope', myVariable);
}else{
    console.log('outside localScope UNDEFINED!!!');
}

module.exports = localScope;