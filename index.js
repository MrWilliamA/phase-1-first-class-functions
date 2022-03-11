
function receivesAFunction(callback) {

    callback();

}

function returnsANamedFunction(callback) {
    
    return function name() {
        console.log(`Nom nom nom, this ${callback} is delicious!`);
      }


}

function returnsAnAnonymousFunction() {

    return function () {
        console.log(`Nom nom nom, this ${callback} is delicious!`);
      }
}