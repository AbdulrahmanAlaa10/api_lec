// var let const === function scope 
// let const === block scope 
// var redeclaer
// let const === not redeclaer
// let var === reassign
// const === not reassign
// const let !== not hositing 
// var === hoisting 


// var function scope === redclear === reassign 

var  x = 10;
// Here x is 10
{  
  var x = 2;
  // Here x is 2
}
// Here x is 2
document.getElementById("demo").innerHTML = x;




// method return 
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.call(person1, "Oslo", "Norway");









/*

async function get() {
  const response = await fetch("https://breakingbadapi.com/api/characters");
  const data = await response.json();
  console.log(data);
  
  document.querySelector("#flexxx").style.display = "flex";
  document.querySelector("#test").style.margin = "2px";
  document.querySelector("#test1").style.margin = "2px";
  document.querySelector("#test2").style.margin = "2px";
  document.querySelector("#test3").style.margin = "2px";


  document.querySelector("#test h1").innerHTML = `${data[0].name}`;
  //document.querySelector("#test h1").style.textAlign = "center";
  document.querySelector("#test h5").innerHTML = data[0].birthday;
  // document.querySelector("#test h5").style.textAlign = "center";
  document.querySelector("#test img").src = data[0].img;

  document.querySelector("#test1 h1").innerHTML = data[1].name;
  document.querySelector("#test1 h1").style.textAlign = "center";
  document.querySelector("#test1 h5").innerHTML = data[1].birthday;
  document.querySelector("#test1 h5").style.textAlign = "center";
  document.querySelector("#test1 img").src = data[1].img;

  document.querySelector("#test2 h1").innerHTML = data[2].name;
  document.querySelector("#test2 h1").style.textAlign = "center";
  document.querySelector("#test2 h5").innerHTML = data[2].birthday;
  document.querySelector("#test2 h5").style.textAlign = "center";
  document.querySelector("#test2 img").src = data[2].img;

  document.querySelector("#test3 h1").innerHTML = data[3].name;
  document.querySelector("#test3 h1").style.textAlign = "center";
  document.querySelector("#test3 h5").innerHTML = data[3].birthday;
  document.querySelector("#test3 h5").style.textAlign = "center";
  document.querySelector("#test3 img").src = data[3].img;

  document.querySelector("#test4 h1").innerHTML = data[4].name;
  document.querySelector("#test4 h1").style.textAlign = "center";
  document.querySelector("#test4 h5").innerHTML = data[4].birthday;
  document.querySelector("#test4 h5").style.textAlign = "center";
  document.querySelector("#test4 img").src = data[4].img;

}
get();

*/

















/*


document.addEventListener('DOMContentLoaded', function() {
  document.querySelector('form').onsubmit = function() {
      fetch('https://api.exchangeratesapi.io/latest?base=USD')
      .then(response => response.json())


      .then(data => {


          const currency = document.querySelector("#Cuurrr").value.toUpperCase();
          const rate = data.rates[currency];


          if (rate !== undefined) { // right
              document.querySelector('body').innerHTML = `1 USD Is Equal to ${rate.toFixed(3)} ${currency}.`;
          } else { " " + " "
              document.querySelector("#result").innerHTML = 'Invaild currency';
          }
      });
      return false;
  }
});



*/












/*

fetch("https://api.exchangeratesapi.io/latest?base=USD")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
})

*/










/*
fetch("https://breakingbadapi.com/api/characters")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
})
*/




/*
function loadDoc() {
  var xhttp = new XMLHttpRequest(); // create request 
  xhttp.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) { // ok stutus fir req
      document.getElementById("demo").innerHTML = this.responseText; //  write in html // text.html 
    }
  };

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/posts", true); // as 
  xhttp.send();
}

*/









/*
const api = "https://www.breakingbadapi.com/api/characters";

async function getData() {
    const response = await fetch(api);
    const data = await response.json();

    const print = data.map(character => character.name)
    console.log(print);
}

getData();
*/

/*

const api = "https://www.breakingbadapi.com/api/characters";

async function getData() {
    const response = await fetch(api);
    const data = await response.json();
    printData(data)
}

function printData(data) {
    const header = document.querySelector("#header");
    const content = document.querySelector("#content")

    header.innerHTML +=
    `<select onchange="getCh(this.value)">
        <option>Choose The Carch</option>
        ${data.map(m => `<option>${m.name}</option>`) }
    
    </select> `

    console.log(header);
}

async function getCh(name) {
    const response = await fetch(`${api}?name=${name}`);
    const data = await response.json()

    content.innerHTML = `<h2>${data[0].name}</h2>
    <img src="${data[0].img}" width="250" >`
}
getData();

*/






/*
fetch('https://jsonplaceholder.typicode.com/photos')
.then(function(res) {
    console.log(res)
    return res.json();
})
.then(function(data){
    document.querySelector("#demmmo").src = data[8].thumbnailUrl;
    document.querySelector("#demmmo1").src = data[3].thumbnailUrl;
    document.querySelector("#demmmo2").src = data[3].thumbnailUrl;
    document.querySelector("#demmmo3").src = data[3].thumbnailUrl;

})

===============================================================

fetch("https://breakingbadapi.com/api/characters")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
})




*/


/*



*/














/*
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('form').onsubmit = function() {
        fetch('https://api.exchangeratesapi.io/latest?base=USD')
        .then(response => response.json())
        .then(data => {
            const currency = document.querySelector("#Cuurrr").value.toUpperCase();
            const rate = data.rates[currency];
            if (rate !== undefined) {
                document.querySelector('body').innerHTML = `1 USD Is Equal to ${rate.toFixed(3)} ${currency}.`;
            } else {
                document.querySelector("#result").innerHTML = 'Invaild currency';
            }
        });
        return false;
    }
});
*/
// class 
 class Car {
   // constructor
  constructor(name) {
    this.carname = name;
  }



  // method
  present() {
    return 'I have a ' + this.carname;
  }
}



/// inehirt from car class
class Model extends Car {
  // constructor
  constructor(name, mod) {
    super(name); // brand from car class

    this.model = mod;
  }

  // method 
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");


document.getElementById("demo").innerHTML = myCar.show();

// ECMAScript 2015, also known as ES6, introduced JavaScript Classes.

// JavaScript Classes are templates for JavaScript Objects.

// JavaScript Class Syntax
// Use the keyword class to create a class.

// Always add a method named constructor():

// Syntax
// class ClassName {
  // constructor() { ... }
// }

// 
// A JavaScript class is not an object.
// It is a template for JavaScript objects.


// class Car {
   // constructor(name, year) {
     // this.name = name;
     // this.year = year;
    // }
// }
// When you have a class, you can use the class to create objects: 
 // myCar = new Car("Ford", 2014);
  // document.getElementById("demo").innerHTML = myCar.name + " " + myCar.year;


// ADD METHOD 

// class Car {
  // constructor(name, year) {
    // this.name = name;
   // this.year = year;

  // }
  // age() {
    // let date = new Date();
    // return date.getFullYear() - this.year;
  // }
// }

// let myCar = new Car("Ford", 2014);
// document.getElementById("demo").innerHTML = "My car is " + myCar.age() + " years old.";

/*
class Car {
    constructor(brand) {
      this.carname = brand;
    }
    present() {
      return 'I have a ' + this.carname;
    }
  }
  
  class Model extends Car {
    constructor(brand, mod) {
      super(brand);
      this.model = mod;
    }
    show() {
      return this.present() + ', it is a ' + this.model;
    }
  }
  
  let myCar = new Model("Ford", "Mustang");
  document.getElementById("demo").innerHTML = myCar.show();


  Hoisting
Unlike functions, and other JavaScript declarations, class declarations are not hoisted.

That means that you must declare a class before you can use it:

Example
//You cannot use the class yet.
//myCar = new Car("Ford")
//This would raise an error.

class Car {
  constructor(brand) {
    this.carname = brand;
  }
}

//Now you can use the class:
let myCar = new Car("Ford")


*/



/*

Class Inheritance
To create a class inheritance, use the extends keyword.

A class created with a class inheritance inherits all the methods from another class:

Example
Create a class named "Model" which will inherit the methods from the "Car" class:

class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar = new Model("Ford", "Mustang");
document.getElementById("demo").innerHTML = myCar.show();


The super() method refers to the parent class.

By calling the super() method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.


*/

/*

Static class methods are defined on the class itself.

You cannot call a static method on an object, only on an object class.

Example
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello() {
    return "Hello!!";
  }
}

let myCar = new Car("Ford");

// You can calll 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.

If you want to use the myCar object inside the static method, you can send it as a parameter:

Example
class Car {
  constructor(name) {
    this.name = name;
  }
  static hello(x) {
    return "Hello " + x.name;
  }
}
let myCar = new Car("Ford");
document.getElementById("demo").innerHTML = Car.hello(myCar);

*/

/*
What is AJAX?
AJAX = Asynchronous synchronous JavaScript And XML.

AJAX is not a programming language.

AJAX just uses a combination of:

A browser built-in XMLHttpRequest object (to request data from a web server)
JavaScript and HTML DOM (to display or use the data)
AJAX is a misleading name. AJAX applications might use XML to transport data, but it is equally common to transport data as plain text or JSON text.

AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. This means that it is possible to update parts of a web page, without reloading the whole page.

How AJAX Works
AJAX




onreadystatechange	Defines a function to be called when the readyState property changes
readyState	Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready
responseText	Returns the response data as a string
responseXML	Returns the response data as XML data
status	Returns the status-number of a request
200: "OK"
403: "Forbidden"
404: "Not Found"
For a complete list go to the Http Messages Reference
statusText	Returns the status-text (e.g. "OK" or "Not Found")


function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "text.html", true);
    xhttp.send();
  }



1. An event occurs in a web page (the page is loaded, a button is clicked)




2. An XMLHttpRequest object is created by JavaScript
3. The XMLHttpRequest object sends a request to a web server
4. The server processes the request
5. The server sends a response back to the web page
6. The response is read by JavaScript
7. Proper action (like page update) is performed by JavaScript






Holds the status of the XMLHttpRequest.
0: request not initialized
1: server connection established
2: request received
3: processing request
4: request finished and response is ready






*/



/*


class Car {
  constructor(name) {
    this.name = name;
  }

  // class 
  static hello() {
    return "Hello!!";
  }
}

// error object 
let myCar = new Car("Ford");

// You can calll 'hello()' on the Car Class:
document.getElementById("demo").innerHTML = Car.hello();

// But NOT on a Car Object:
// document.getElementById("demo").innerHTML = myCar.hello();
// this will raise an error.

  */