
//Fizzbuzz problem in Javascript

//start the function
function fizzbuzz(param){
    //create an array
    var array = [];
    //begin the loop
    for(i=1; i <= param; i++){
        //detect values divisble by 3 and 5
        if(i % 3 === 0 && i % 5 === 0){
            //push to the array
            array.push(i);
        }
        //detect values divisible by 3
        else if(i % 3 === 0){
            array.push(i);
        }
        //detect values divisible by 5
        else if(i % 5 === 0){
            array.push(i);
        }
    }
    //print array
    console.log(array);
    //variable to handle array summation
    var sum = array.reduce(function(a,b){return a + b;}, 0);
    //print sum total
    console.log(sum);
}

//call function
fizzbuzz(999);