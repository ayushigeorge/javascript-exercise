//Functions in Array
//Applying array operations

// 1. Some operation
// If at least one of the element satisfy the condition
const array = [1, 2, 3, 4, 5];
const odd = (element) => element % 2 !== 0;
console.log(array.some(odd));
// true

// 2. Index of()
// It returns the first index number to us
const array2 = ["apple", "grapes", "cherry", "banana", "apple", "apple"];
console.log(array2.indexOf("apple"));
console.log(array2.indexOf("mango"));
console.log(array2.indexOf("apple", 3));
//0,-1,4

// 3. Find()
// This operation returns the FIRST output that satisfy the condition
const array3 = [10, 12, 23, 34, 54, 32, 20];
const found = array3.find((element) => element > 20);
console.log(found);
//23

// 4. Every()
// It returns boolean value if all the elements pass the condition or not.
const some_condition = (currentValue) => currentValue < 100;
const array4 = ["10", "43", "90", "22", "42", "23"];
console.log(array4.every(some_condition));
//true

//5. Filter()
//It returns new array of  the specific values
const array5 = [
  "ayushi",
  "alisha",
  "aditi",
  "ayushay",
  "jay",
  "britania",
  "ayushire",
];
const result = array5.filter((array5) => array5.length < 6);
console.log(result);
//[aditi, jay]

// 6. Map
//it returns the  specific output as per the condition

const array6 = [2, 4, 3, 1, 5];
const map1 = array6.map((x) => {
  return x * x;
});
console.log(map1);
//[4,16,9,1,25]
