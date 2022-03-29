//Call by Value
// when two different variables having same value points different location of memory is called call by value
var a = 10;
var b;
b = a;
a = 3;
console.log("a:", a);
console.log("b:", b);

// call by reference
// when two variables having same data points to same memory location of it.
var c = { greet: "good day" };
var d;
d = c;
c.greet = "Have a good day!";
console.log("c:", c);
console.log("d: ", d);
