var petDog = "Rex"
var petCat = "Pepper"
console.log(petDog)
console.log(petCat)
console.log("My pet dog's name is: ",petDog)
console.log("My pet cats's name is: ",petCat)
var catSound = "purr"
var dogSound = "woof"
console.log(petDog," says ",dogSound)
console.log(petCat," says ",catSound)
catSound="meow"
console.log(petCat,"now says ",catSound)


// String
"HELLO"
'HELLO'

console.log(1+"a")


// Number

// 10**2 = 100 ->10*10
// 16%2=0
// 15%2=1
// BODMAS


// Boolean
// true
// false
// 100=="100" true
// 100==="100" flase type 




// Null -  absence of value
// Undefined - unassigned value

// BigInt
// Symbol - unique identifer



// operators

//          +
//          -
//          *
//          /

//          >
//          <
//          ==

//          and 
//          or
//          not


if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    console.log("The car is not green, orange, or red");
}

switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        console.log('The light is not green, orange, or red');
        break;
 }


 var age = 10;
 if (age >= 65) {
    console.log('You get your income from your pension')
 } else if (age < 65 && age >= 18) {
    console.log('Each month you get a salary')
 } else if (age < 18) {
    console.log('You get an allowance')
 } else {
    console.log('The value of the age variable is not numerical')
 }
 

var day = `Sunday`;
switch(day) {
    case 'Monday':
        console.log('Do something');
        break;
    case 'Tuesday':
        console.log('Do something');
        break;
    case 'Wednesday':
        console.log('Do something');
        break;
    case 'Thursday':
        console.log('Do something');
        break;
    case 'Friday':
        console.log('Do something');
        break;
    case 'Saturday':
        console.log('Do something');
        break;
    case 'Sunday':
        console.log('Do something');
        break;
}

for (var i = 1; i <= 5; i++) {
    console.log(i);
};
console.log('Counting completed!');

for (var i = 5; i > 0; i--) {
    console.log(i);
};
console.log('Countdown finished!');

var i = 1;
while (i < 6) {
    console.log(i);
    i++;
};
console.log('Counting completed!');


var i = 5;
while (i > 0) {
    console.log(i);
    i = i - 1;
};
console.log('Counting completed!');

var year = 2018;
while (year < 2023) {
    console.log(year);
    year++;
};



for (var i = 1; i <= 10; i++) {
    if(i == 1) {
        console.log("Gold medal")
    } else if (i == 2) {
        console.log("Silver medal")
    } else if (i == 3) {
        console.log("Bronze medal")
    } else {
        console.log(i)
    }
}


for (var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log("Gold medal")
            break
        case 2:
            console.log("Silver medal")
            break
        case 3:
            console.log("Bronze medal")
            break
        default:
            console.log(i)
    }
}


  /*
   * Comment 4
   */

  var i = 7;
  var j = 2;

  if(i < 7 || j < 5) {
    console.log("Hello");
  } else {
    console.log("Goodbye");
  }
