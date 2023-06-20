
 //   const x=20;
//   const x=20;
//   console.log(x);


  {
    let x=50;
    console.log(x);
  }

  var y=30;
  console.log(y);
  document.write(y);

  window.alert("Home");
  document.querySelector("#active").innerHTML="Microsoft";
  document.querySelector(".office").innerHTML="Student";

// javascript cases
 const firstName="Dharani";
 document.querySelector("#para").innerHTML= firstName;

// operators
// Arithmetic
  var a=100;
  var b=50;
  var c=a/b;
  console.log(c);

// assignment operator
  var a=200;
  var b=5;
  var d=a*=b;
  console.log(d);
  
// comparision
  var s=18;
  var v=5;
  console.log(s>v)

// string comparsion
   var x=29;
   var y=53;
   var z="23";
   console.log(x+y+z);
   console.log(z+y+x);

// logical operator
   var x=29;
   var y=53;
   var z=23;
   console.log(x<y && y>z);
   console.log(x<y || y>z);
   console.log(x<y && y<z);
   console.log(x>y || y>z);

// type operator
   var c=40;
   console.log(typeof(c))
   
// bit operator
   var e=9;
   var f=90;
   console.log(e&f);
   console.log(e|f);
   console.log(~f);


// data types
   var c="10";
   console.log(typeof(c)); 
   var Dharani;
   console.log(typeof(Dharani));
   const person={firstname:"Dharani", Middlename:"Prtahipati", age:21, eyecolor:"brown"};
   console.log(person.age);
   console.log(person.Middlename);
   console.log(person.firstname);
   console.log(person.eyecolor);

   var fruits=["Mango", "Apple", "Papaya" ];
   console.log(fruits[0]);

// functions 
    function functionname(){
      return console.log(a+b);
    }
     functionname(40,500);
       
     function myjava(d,y){
      var u=70;
      var h=57;
      return console.log(u+h);
     };
     myjava();


// button image hidden
  //  const click=document.querySelector(".button");
  //  const tag=document.querySelector(".head");

  //  click.addEventListener("click",function myfunction(){
  //    return tag.classList.toggle("head11");
  //  });
   
   const tag = document.querySelector(".head");
   function myfunction(){
    return tag.classList.toggle("head11");
   };

   const image = document.querySelector(".image-10");
   function myfunction(){
    return image.classList.toggle("img_10");
   };

  
    // Arrays

    // to string
    const array=["web", "Array", "phyton", "html"];
    const array9=["java", "guery", "c++"]

    // const array6=array.toString();
    // console.log(array6);

    // push
    // array.push("mysql");
    // const array6=array.toString();
    // console.log(array6);  

    // pop
    // array.pop();
    // const array6=array.toString();
    // console.log(array6);  

    // length
    // const array6=array.length;
    // console.log(array6);

    // unshift
    //  array.unshift("development");
    //  const array6=array.toString();
    //  console.log(array6);

    // shift
    // array.shift();
    // const array6=array.toString();
    // console.log(array6);
    
    // concat
    // const arr=array.concat(array9);
    // const marg=arr.toString();
    // console.log(marg);

    // splice
    // array.splice(1,0,"graphic","c");
    // const array6=array.toString();
    // console.log(array6);

    // slice
    person="dharaniprathipati";
    const array6=person.slice(5,15);
    console.log(array6);