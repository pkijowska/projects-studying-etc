**JAVASCRIPT:**
---
Javascript engine (for example Tamarin, V8, Chakra, Spidermonkey, written in c++) - so js runs asap on the browser on engine. Breaks the code in the tokens to understand what it means.
Interpreter - translate and read files line by line. Runs faster but no optimisation.
Complier - compiles down to the language that can be understood by our machine. Will write it in a new language ahead of the time. Tries to undertsnd what we try to do to a lower level code. All languages have to be compiled.
Babel and typescript are compilers. They take one language and convert into a different one. They also do optimisation behind the scene. Slower to run at first.
JIT Compliers - browsers started implementing it, combination of compilers and interpreter.

Low level language: Developer has to manage resources manually (C)
High level - developer does not have to worry, everything happens automatically (JS)

JS is:
JS is interpreted or just-in-time compiled - it interprets 0 and 1
Multi-paradigm - 1. Procedual programming, OOP, FP - > javascript can be all of them
Almost everything is an Object - except from primitives
First class functions - function streamed as variables, we can pass them etc
JS Is single threaded - takes one thing at a time (we have one call stack), otherwise we need to use event loop
JUST IN TIME COMPILATION- entire code is converted into machine code at once, then executed immediately
HAs access to web API, through global window object
Also access to callback queues, event loppp - manages callback queue

Execution context = environment in which a piece of js is executed, stores all the necessary info for some code to be executed.
				what is inside: variable environmertnt (let, const, var, functions)
				Scope chain
				this keyword
				ARROW FUNCTION DONT GET ACCESS TO ARGUMENTS OBJECT AND THIS KEYWORD

				function sayMyName() {
				  var a = 'a';
				  return function findName() {
				    var b = 'b';
				    console.log(c)
				    return function printName() {
				      var c = 'c';
				      return 'Andrei Neagoie'
				    }
				  }
				}

				sayMyName()()()
It will print Andrei Neagoie (as it will have an access to third function now)				

CALL STACK : where you are in your program. Place where execution context get stacked on top of each other, to keep track of where we are in the execution
			code runs in the call stack

SCOPE: 3 types of scope - global scope, function scope (variables only accessible inside), block scope (variables are accessible only inside block, so between {} HOWEVER this only applies to let and const!

**CLASSES**
A class defines the shape of a type of object
Why not using prototypes? It is easier with classes.

**HOISTING**
= Makes some types of variables accessible in the code before they are actually declared. LET and CONST variables are unitialized. Var variables are hoisted. function example() will not be accessible before. But var example = function() will be hoisted, so we can call it earlier. IF WE TRY TO ACCESS VAR VARIABLE VEFORE INITIALIZATION IT WILL SHOW US UNDEFINED BECAUSE THE JS KNOWS IT WILL BE THERE BUT THIS IS NOT THE CASE WITH CONST AND LET. SAME WITH ARROW FUNCTION, won’t see it. ALSO VARIABLES WITH VAR Will be declared in the window object. UNLIKE CONST AND LET. (console.log(x === window.x)

**THIS KEYWORD**
= one of the component of every execution context. The value of this is not static.
If we call it in the method it will point to the method = const Jonas = {age: 12, callAge: function(){return 2020- this.name}}
Arrow function don’t get own this. So it will be using this of the parent scope which will be the global scope so it will be posting to the window.
Event listener - this will be the DPM element that the handler is attached to.
If we are calling ‘this’ in a reg function it will be undefined. If it doesn’t have an owner or is not attached to

Restructuring arrays:  
let [first, , second] =[‘’butter’’, “milk”];
[first, second] = [second, first];
REST operator is used on the left
Const [a,b, …others] = [1,2,3,,4,5]
console.log(others =) will be 3,4,5,

Null values = null and undefined //optional chaining
Restaurant.openingHours.mon?.open = only if the mon property exists (so not null or undefined)  add open  otherwise return undefined

//NULLISH OPERATOR distinguishes between nullish values (null, undefined_ and falser but defined values (false, 0, ‘’, NaN, -0, “”)
x=0
Y = x || ‘hello’ (result is hello because 0 is a falser value)
Y = x ?? ‘hello’ (result is gonna be 0 because it is not a nullsh value)
Restaurant.order?.(1,2) ?? ‘Method does not exist)
Because if order is not true it will show undefined

**SETS**
Give us unique values. Even if you put 5 elements to an array but 3 elements are the same the result in arr.length will be 3.
IT IS HIGH PERFOMANR> IF YOU WANNA REMOVE DUPLICATES

**MAPS**
Everything can be a key, array, obj, string number, boolean. Data stracure, mapping Keyes to value. In objects the key is usually a stringconst rest = new Map();
rest.set(‘name’, ‘classico italiano’)//primitives
Number, boolean, string, null, undefined

**objects**
Arrays, functions

**passing by value**
The simple rule of passing by value is that all primitive values in JavaScript are passed by value
var a = 5;
var b = a;
b++
console.log a will be 5 and b will be 6.
Passing by value means that every time you assign a value to a variable, a copy of that value is created. Every single time.
These values will be not connected, just copied.

**passing by reference**
On the other side objects (including plain objects, array, functions, class instances) are references. If you modify the object, then all variables that reference that object are going to see the change. It won't be the copy but it will be linked. Only way to omit it is by using Object.assign({}, obj) or spread operator


**first class function**
Means that functions are values
Functions are just another type of object

**higher order function**
A function that receives another function as an argument that returns a new function or both
Const greet = () = {
btnClose.addEventListener(‘click’, greet)
}

[1,3,4].map is also a higher order function

**CALLBACK function is a very popular concept in programming**
Make it easier to split the code.
Helps to create abstraction =

Const high5 = function() {
	console.log(‘hey’)
}

//document.body.addEventListener(‘click’, high5)
[‘marta’, ‘janek’].forEach(high5)

**closure**


//FOR EACH Will never break out of the function comparing to normal loops
//map creates a new array , for each not really.


**create arrays:**
Const x = new Array(7)
x.fill(1,2,5,6,,7)
OR
Const y = Array.from({length: 7}, () => 1);
Const y = Array.from({ length: 7}, (cur,i) => i+1); //it’d be [1,2,3,4,5,6,7]


**reduce advanced**
const sums = accounts.flatMap(acc => acc.movements).reduce((sums, cur) => {
    cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
return sums
}, {deposits: 0, withdrawals: 0})
console.log(sums)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

**/numbers in javascript**
2**53-1 -> this is the biggest nr = 9007199254740991

//handling numbers in js = big numbers
BigInt

//intersection observer api
Const observer = new IntersectionObserver(obsCallback, obsOptions) ;
observer.obsreve(section1)

**async or defer**
Html parsed - fetched script - execute
Async - script loaded as html parsed (page load shorter). Usually domcontent loaded waits for all scripts to execute. Except from async scripts. Scripts not guaranteed to execute in order. Use for 3rd party scrips where order doesn’t matter like google analytics.
Defer. = execution till the end, but fetch asynchronously script first . Domcontentloaded event fires after defer script is executed. Scripts are executed in order. That is the best solution.

**OOP In Javascript. Object Oriented Programming**
Is a programming paradigm based on concept of objects
We use objects to model real world or abstract features;
Objects may contain data and code. By using objects we pack data and the corresponding behaviour into one black.
In OOP objects are self contained pieceds of code.
Objects are building blocks of applications and interact with each other
Interaction happen through a public interface (API): methods that the code outside of the object can access and use to communicate with object.
OOP was developed to organise code and easier to maintain
OOP paragdims:
- Abstraction: Ignoring or hiding details that don’t matter, allowing us to get an overview perspective of the thing we are implementing, instead of messing with details that don’t really matter to our implementation. //addEventListener - we don’t know how it works but we don’t care
- Encapsulation: Keeping properties and methods private inside the class, so they are not accessible from outside the class. Some methods can be exposed as a public interface(API).Prevent external code from accidentaly manipulating internal state.
- Inheritance: child class extends parent class. Reuse common logic and to model real world relationship.
- Polymporishm: A child class can overwrite a method it inherited

 from a parent class.

OOP in js -> objects are linked to a prototype object. Prototypal inheritance: the prototype contains methods that are accessible to all objects linked to that prototype. Behavior is delegated to the linked prototype object.
￼
￼

**CONSTRUCTOR FUNCTIONS AND THE NEW OPERATOR**
Const Person = function (first name, birthYear) {
	this.firstname = first name = first name;
	this.birthyear = birth year
}
If you want to add a method you will never do it there but like this (because it will be called always and bad for performance)
Person.prototype.accelerate = function() {
	this.name + ‘Rodrigo’
}

But we could do this instead:class Person {
	constructor(firstname, birthyear) {
		this.firstname = firstname;
		this.birthyear = birthyear;
	}
	calcAge() {
		console.log(‘test’)
	}
}
Const Jessica = new Person(‘Jessica’, test)
Jessica.calcAgE()

If we do console.log(this) in the object, then we would get an empty {} which is the reason why we need to do this.firstname stuff
Const Jonas = new Person(‘Jonas’, 1991);
//New {} is created
//function is called, this = {}
//{} linked to prototype. IT WILL LINK THE NEW TO THE PROTOTYPE OF THE OBJECT
//Function automatically return {}

**callback hell.How to avoid? Using promises and fetch api**

**PROMISE - es6**
An object that is used as a placeholder for the future result of an async operation. (Like a lottery ticket, you buy ticket and if I win I get the ticket). By using promises you can chain promises instead of callback hell.
Lifecycle of a promise = PENDING - SETTLED - FULLFILLED OR REJECTED


myPromise.then(value=> console.log('sth').catch(rejectedVal=> console.log(rejectedVal)))
if we want to see the rejected value we need to catch it
it will show you if api call was successful or not. So that is the whoe point of using it.

YOU CAN ONLY CALL .THEN ON RESOLVED Promises
PIC INCLUDED OF EXAMPLE

With async and await we need to use try and catch block for us to catch the eventual errors. we also use await instead of chaining then.
**how async javascript works behind the scenes?**
Event loop checks if the call stack is empty.Promises will have a priority at all times so if we do set timeout vs promise, promise will be first

**Getters&Setters**
classess and object literals have getters and setters. Can be very useful for data validations. Provides a simpler syntax.

**Static methods**
Array.from(document.querySelector('h1')) is a static method
Number.parseFloaT(12) - method on Number.


**prototype, class, object.new**
do the same thing! but this one is the least used oout of these three
const protoObj = {
    calcAge() {
        console.log(2037-this.birthYear)
    }
 }
 const steven = Object.create(PersonProto);
 steven.name = 'Steven'
 steven.birthYear = 2000;
 const steven = Object.create(PesonProto);
 steven.--proto__ -> we will see the calcAge()

---


**modules**
ES6
import and exports possible
top level variable scoped to module - in a script it will be global
top level 'this' points to undefined, in a script it will point to a window
modules are imported synchronously
> import './shoppingCart.js'

**npm**
1. having js in our html is messy
2. If there is an upgrade of e.g jquery we would need to update it manually

**Copy Object**
Object.assign({}, state);

**Memory leak**
unused memory  (global variables are bad - we filled memory )

**Javascript Environment**
Is included in a browser. It has extra things like web APIs (DOM, AJAX, Timeout)
Callback Queue and Event Loop.
settimeout triggers webapi

call stack -< webapi -> callback queue -> event loop(check if the call back is empty)
console.log('1')
setTImetout, 0
console.log('2')

first will be console.log 1, then, 2 then settimeout
coz settimeout needs to go from call stack to webapi, and call stack will be empty in the meantime so console.log will jump in there

**IIFE**
One way to prevent the functions and variables from polluting the global object is to use immediately invoked function expressions.

**THIS**
This is the object that the function is a property of
function b() {
	'use strict'
	console.log(this)
}
Benefits of using : gives methods access to their object
Execute same code for multiples objects

**Session storage**
As long as our tab is open, even if we referesh we still have an access to what we have been saving. If we close the tab we will loose the session.

**local storage**
window.localStorage.setItem

**undefined vs null**
null-abscence of value
undefined - abscence of definitiion

**built in objects**
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects

**memoization**
picture included
caching. Code optimisation. Remembering solution.

**split by few different characters**
//'123*45+'.split(/([-+*/])/) will give us array of  ['123', '*', '45', '+', '']

**flatten array using reduce**
const initialValue = [];
const sumWithInitial = arr.reduce(
  (previousValue, currentValue) => previousValue.concat(currentValue),
  initialValue
);
sumWithInitial
(8) [1, 2, 2, 4, 5, 98, 7, 2]
arr = [[1,2], [2,4,5], [98,7,2]]

**using parameters differently**
function countBy(items, groupName) {
	let counts = []
	for (let item of items) {
		let name = groupName(item)
		let known = counts.findIndex(c=> c.name == name)
		if (known == -1) {
			counts.push({name, count:1})
		} else {
			counts[known].count++
		}
	}
	return counts;
}
countBy([1,2,3,4,5], n => n > 2)



function every(arr, num){
    for (let i in arr) {
        console.log(num(i))
    }
}
every([1,3,5,6,90], n => n >2)

**how to display elements of arrays in array**
const arr = [["example", "example1"], ["another", "another1"]]
for (let [from, to] of resy) {
    addEdge(from, to)
}
if we need to use first and last el from each array we can do this

**difference for...in and for...of**
The for...in statement iterates over the enumerable properties of an object.

The for...of statement iterates over values that the iterable object defines to be iterated over.

**benefits of use strict**
"use strict";
x = 3.14;       // This will cause an error because x is not declared
otherwise without use strict it will work and add let or var in the background

**how to test**
try{
    console.log("you see ", look())
} catch(error) {
    console.log( "something went wrong" + error)
} finally {
	console.log("do this too")
}

finally - no matter what happens in the try block run this

it will give us this: "something went wrongReferenceError: look is not defined"


**increment a value whilst calling a function by using a closure**

Closures are functions that refer to independent (free) variables.

In short, variables from the parent function of the closure remain bound from the parent's scope.

var increment = (function(n) {
  return function() {
    n += 1;
    return n;
  }
}(0)); // -1 if you want the first increment to return 0

console.log(increment());
console.log(increment());
console.log(increment());

or you can do this: var n = 0;

function increment(){

  n++;
  return n;
}

**throw an error**

class PrimitiveMultiply extends Error {}

function promptDirection(question) {
    let result = prompt(question)
    if (result == "left") return "L";
    throw new PrimitiveMultiply("Invalid"+ result)
}

promptDirection("where do you wanna go")

**working with object and non mutable elemenets**
const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content
    }
}_

content is mutable, meaning you should not mutate it

**REGEX**
/abc/.test("abcde") => true
\d any digit
\w an alphanumeric character
\s any whitespace character
\D a character that is not a digit
\W a nonalphanumeric character
\S a nonwhitespace characters
. any char except from a new line

EXCEPT = ^
I want to match any character excpet the one I will specify

MORE THAN ONE DIGIT = +
Indicated that the element may be repeated more than once
MORE THAN ONE DIGIT or zerotimes = *
ONE TIME OR ZERO = ?
PATTERN SHOULD OCCUR EXACTLY SPECIFIC NR OF TIMES  {4} OR {2,4}
CHECK MORE THAN ONE ELEMENT AT A TIME = ++
CHECK ONE OF FEW ELEMENTS IF THEY MATCH = |OR|OR

**what does CI|CD mean?**
it means continous development.
CI = Continous integration

Both involve taking the code continuously integrated and getting it able to deploy to an environment either QA or production. Continuous deployment takes the process one step further and performs the actual deployment to an environment.

Successful CI means new code changes to an app are regularly built, tested, and merged to a shared repository. It’s a solution to the problem of having too many branches of an app in development at once that might conflict with each other.

**how does the https work**
HTTP was invented alongside HTML to create the first interactive, text-based web browser: the original World Wide Web. Today, the protocol remains one of the primary means of using the Internet.

As a request-response protocol, HTTP gives users a way to interact with web resources such as HTML files by transmitting hypertext messages between clients and servers. HTTP clients generally use Transmission Control Protocol (TCP) connections to communicate with servers.

HTTP requests and responses, and they carry information about the client browser, the requested page, the server, and more.

**network protocol**
it is a style of communication over a network. There are protocols for sending email, fetching email, sharing files etc.
HTTP is a protocol for retrieving named resources (chunks of information, such as web pages or pictures)
A TCP connection works as follows: one computer must be waiting, or listening, for other computers to start talking to it. To be able to listen for different kinds of communication at the same time on a single machine, each listener has a number (called a port) associated with it. Most protocols specify which port should be used by default. For example, when we want to send an email using the SMTP protocol, the machine through which we send it is expected to be listening on port 25.
Another computer can then establish a connection by connecting to the target machine using the correct port number. If the target machine can be reached and is listening on that port, the connection is successfully created. The listening computer is called the server, and the connecting computer is called the client.
To become part of the Web, all you need to do is connect a machine to the Internet and have it listen on port 80 with the HTTP protocol so that other computers can ask it for documents.

Each document on the Web is named by a Uniform Resource Locator (URL), which looks something like this:

  http://eloquentjavascript.net/13_browser.html
 |      |                      |               |
 protocol       server               path

**how to convert obj into array**
let arrayish = {0: "one", 1: "two", length: 2};
let array = Array.from(arrayish)
//["one","two"]

**linear search**
searching one by one.
INCLUDES, FIND, FINDINDEX, INDEXOF is one of these.
BIG O of this is O(n) => basically if there are thousand items and our item is last we need to check them all.

**binary search**
We basically put it in half and check the half. It only works on sorted arrays.
We can do it recursevely or using while loop.
BIG O of this is O(log n) much better than the worst case scenario!

**bubble sort**
we swap the values one by one, it bubbles to the top.
VERY GOOD IF YOU KNOW IT IS NEARLY sorted O(N), but for anything else not a god candidate O(n)2 :D

function bubble(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp

            }
        }
    }
}

**pure function**
only depends on the parameters provided, doesnt rely on for example other variable declared outside of the function

**selection sort**
similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position

**insertion sort**
start by picking the second element in the array
build up the sort by gradually creating a larger half whichi is always sorted

 function inserSort(arr) {
	 for (var i = 0; i< arr.length; i++) {
		 var currentVal = arr[i];
		 for (var j = i-1; j >=0; j--) {
			 arr[j+1] = arr[j]
		 }
		 arr[j+1]= currentVal;
	 }
	 return arr
 }

 or
 function insertionSort(arr){
    //Start from the second element.
    for(let i = 1; i < arr.length;i++){

        //Go through the elements behind it.
        for(let j = i - 1; j > -1; j--){

            //value comparison using ascending order.
            if(arr[j + 1] < arr[j]){

                //swap
                [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];

            }
        }
    };

  return arr;
}

console.log(insertionSort([2,1,9,76,4]));


IF YOU NEED DATA COMING LIVE AND you want to sort the data then this is a good algorithm.
In terms of performance insertion sort is similar to bubble sort
They excel very good with smaller data

**merge sort**
[8,9,2,3]
will split into 2 element array and compare the elements.
[8,9] [2,3]
will sort them and merge and compare

function merge(arr1, arr2){
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j])
            j++;
        }
    }
    while(i < arr1.length) {
        results.push(arr1[i])
        i++;
    }
    while(j < arr2.length) {
        results.push(arr2[j])
        j++;
    }
    return results;
}

// Recrusive Merge Sort
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, sright);
}

mergeSort([10,24,76,73,2,5])

**CSS Specificity**
<div id="baz" class="bar">
  <div id="foo" class="bip bop">Hello</div>
</div>  

the css code for if FOO will be taking precedence as it is tatgerting the element and it overrides the parent inherited element.

**Request Headers**
The HTTP header is part of the Hypertext Transfer Protocol (HTTP) and transmits additional information during HTTP requests or responses. In addition to the data that is delivered to a browser by the web server of the called website, server and browser exchange meta information about the document via the HTTP header.

An HTTP request contains a header area with information such as the date of the request, the referrer, or the preferred language. The HTTP response also contains a header field in which the server sends its information to the user's browser. This information exchange is usually invisible to the end user.

HTTP headers include fields which themselves consist of one line. Each line contains a name/value pair - called key-value pair - separated by a colon and is terminated by a line break.

HTTP HEADERS:
for example
date,
cookie,
content type,
accept a language

**relative path etc**
https://www.w3schools.com/html/html_filepaths.asp

**accessibility**
https://scottaohara.github.io/accessibility_interview_questions/
breadcrumbs
alt and src
semantic html
aria
color contrast
contrast ratio
follow the Web Content Accessibility Guidelines
focusable elements (where the user exactly is)
it can be clickable with both mouse and keys, and it can be tabbed between (using the tab key on the keyboard).
when having links underline works well as well as it will change color when hovered or focused

**radix sort**
function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,2345,9852])

**single linked list**
collection of nodes, no indexes, so inserting will be less expensive
class Node {
	constructor(val){
		this.val = val;
		this.next = next;
	}
}

var first = new Node('Hi')
first.next = new Node('there')
first.next.next = new Node('ther')

**js promises**
https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/ -> some excercise at the bottom!
<!-- https://javascript.info/promise-basics -->

<!-- function wait(sec) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("done");
    }, sec);
  });
}
function createImage(img) {
  return new Promise(function (resolve, reject) {
    const imge = document.createElement("img");
    imge.src = img;

    imge.addEventListener("load", function () {
      resolve(document.body.appendChild(imge));
    });
    imge.addEventListener("error", function () {
      reject("error!!");
    });
  });
}
var curr;
createImage(
  "https://images.unsplash.com/photo-1660241208826-ed0c6b9ee77f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80"
)
  .then((data) => {
    curr = data;
    return wait(5000);
  })
  .then((e) => {
    return curr.classList.add("hide");
  })
  .then((data) => console.log("finished"))
  .then( ()=> {
    createImage(
      "https://images.unsplash.com/photo-1546268060-2592ff93ee24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3lkbmV5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    )
  }
  )
  .catch((err) => console.log(err + " nooo")); -->

	const arr = [
  "https://images.unsplash.com/photo-1523608401-53eb5741c1a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHN5ZG5leXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1548565495-a692bd1c1d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHN5ZG5leXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
];
async function loadAll(arry) {
  const res = arry.map((el) => {
    return new Promise(function (resolve, reject) {
      const imge = document.createElement("img");
      imge.src = el;

      imge.addEventListener("load", function () {
        resolve(document.body.appendChild(imge));
      });
      imge.addEventListener("error", function () {
        reject("error!!");
      });
    });
  });
  console.log(res);
  Promise.all(res).then((values) => {
    console.log(values, 'h');

  });
}

loadAll(arr);

**different sort of tests**
unit tests
integration tests
functional tests

**styled components or css modules**
https://dev.to/alexsergey/css-modules-vs-css-in-js-who-wins-3n25
pro styled components:
u can use javascript with the code and js logic
some issues with typescript

pro css modules:
loads faster

**what is bind in react**
https://www.freecodecamp.org/news/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb/

**door challenge**
class Door {
  constructor(){
    this.state=0;
    this.direction='neutral';
    this.paused=false;
  }
  open(){
    this.state++;
    this.direction='opening';
  }
  close(){
    this.state--;
    this.direction='closing';
  }
  reverse(){
    if (this.direction=='opening') {
      this.state--;
      this.direction='closing';
    } else {
      this.state++;
      this.direction='opening';
    }
  }
  pause(){
    if (!this.paused) {
      this.paused=true;
    } else {
      this.paused=false;
      if (this.direction=='opening') {
        this.state++;
      } else this.state--;
    }
  }
}
function door(events) {
  console.log(events)
  var a=new Door;
  var ans='';
  for (var i=0;i<events.length;i++) {
    switch (events[i]) {
      case '.':
        if (a.state===0||a.state===5||a.paused) {
          ans+=String(a.state);
        } else if (a.direction=='opening') {
          a.open();
          ans+=String(a.state);
        } else {
          a.close();
          ans+=String(a.state);
        }
        break;
      case 'O':
        a.reverse();
        ans+=String(a.state);
        break;
      case 'P':
        if (a.state===0) {
          a.open();
          ans+=String(a.state);
        } else if (a.state===5) {
          a.close();
          ans+=String(a.state);
        } else {
          a.pause();
          ans+=String(a.state);
        }
        break;
    }
  }
  return ans;
}

**example of redux**
https://codesandbox.io/s/github/reduxjs/redux-essentials-example-app/tree/checkpoint-3-postRequests/?from-embed=&file=/src/features/posts/postsSlice.js
