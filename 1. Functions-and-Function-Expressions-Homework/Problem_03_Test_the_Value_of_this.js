function testContext() {
    console.log(this);
}

function stupidity(){
    testContext();
}

//testContext();
//stupidity();
new testContext();
