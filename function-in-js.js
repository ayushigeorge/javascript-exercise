// Implementing TRUTHY EXPRESSION
var morning = true;
var noon = false;
var night = false;

function greeting() {
  if (morning == true && noon == false && night == false) {
    return "Good Morning!";
  } else if (morning == false && noon == true && night == false) {
    return "Good Afternoon";
  } else {
    return "Good night";
  }
}
greeting();

// Implementing Truthy VALUES
false == 0;
0 == " ";
null == undefined;
[] == false;
!![0] == true;

// Implementing FALSY Value
false == null;
NaN == NaN;
Infinity == true;
[] == true;
[0] == true;
