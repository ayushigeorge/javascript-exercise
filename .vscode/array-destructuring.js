// when destructuring array, we use the index operator.
let array = [1, 2, 3, 4, 5];
let first, second;

[first, second] = array;
console.log(first, second);
// 1,2

// to extract the random value in given array (1 4)

let [one,,two,three,,,]= array;
console.log(one)
console.log(three)   
// 1 4

// to extract output from string of array

array2 = ["apple", "banana", "cherry"];
[1,2,3]= array2;
console.log(1);
console.log(2);
console.log(3);
// apple, banana, cherry
