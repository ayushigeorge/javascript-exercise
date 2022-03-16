//Difference btw Let, var, const

//1. var 
//scope: global;
//eg. square root of number by var, globally declared and called

    var a=3;
        function sqr(){
            console.log(a*a);
        }
        sqr();

        
//2. let : upper of var
//scope: only in the block


//eg. cube of number by let, it will excecute only if inside the block of code / function

    let o = 10;
    function cube(){
        let c=8;
        console.log(o*o*o);
        console.log(c*c*c);
        }
    cube();


//3. const: same as let, but immutable
//scope: only in block
 const a=10;
 function sqrt(){
     const a=9;
     console.log(a^a);
 }
 f();




