//Calling by Value in JS

function Man(name, salary) {
  this.name = name;
  this.salary = salary;
}

function Health(name, height) {
  Man.call(this, name, height);
  this.category = "health";
}

console.log(new Health("raj", 154).name);
// expected output: "raj"
