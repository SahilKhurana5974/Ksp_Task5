console.log("hello")
// length,slice,replace,chartat,touppercase,toLowerCase,trim,trimStart,trimEnd :-

let name ="    my name is sahil khurana    ";

console.log(name .length);
console.log(name.slice(11,28));
console.log(name.replace("name","brother"));
console.log(name.charAt(12));
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.trim())
console.log(name.trimStart())
console.log(name.trimEnd())

//********************* the end*************************

//concat method & replaceAll  :-
var myaddress = "123 fake street"
var mycity = "hyderabad"
var mystreet = "new malakpet"
var myphoneno = "123456789"

var myaddress = mystreet.concat(" ", mycity);

console.log(myaddress);

myphoneno = myphoneno.replaceAll("-","")
console.log(myphoneno);

//***************************the end ************************


// padstart & padend method
var alphabets = "abc"

console.log(alphabets.padStart(5,12))
console.log(alphabets.padEnd(5,12))

//***************************the end ************************

//split method  :-
var myaddress = "123 fake street";
var words = myaddress.split(" ")
console.log(words)

//***************************the end ************************

//charcodeAt method  :-
var myaddress = "123 fake street";
console.log(myaddress.charCodeAt(3))

//***************************the end ************************





