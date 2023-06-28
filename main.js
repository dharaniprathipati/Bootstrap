
 //   const x=20;
//   const x=20;
//   console.log(x);


//   {
//     let x=50;
//     console.log(x);
//   }

//   var y=30;
//   console.log(y);
//   document.write(y);

//   window.alert("Home");
//   document.querySelector("#active").innerHTML="Microsoft";
//   document.querySelector(".office").innerHTML="Student";

// // javascript cases
//  const firstName="Dharani";
//  document.querySelector("#para").innerHTML= firstName;

// // operators
// // Arithmetic
//   var a=100;
//   var b=50;
//   var c=a/b;
//   console.log(c);

// // assignment operator
//   var a=200;
//   var b=5;
//   var d=a*=b;
//   console.log(d);
  
// // comparision
//   var s=18;
//   var v=5;
//   console.log(s>v)

// // string comparsion
//    var x=29;
//    var y=53;
//    var z="23";
//    console.log(x+y+z);
//    console.log(z+y+x);

// // logical operator
//    var x=29;
//    var y=53;
//    var z=23;
//    console.log(x<y && y>z);
//    console.log(x<y || y>z);
//    console.log(x<y && y<z);
//    console.log(x>y || y>z);

// // type operator
//    var c=40;
//    console.log(typeof(c))
   
// // bit operator
//    var e=9;
//    var f=90;
//    console.log(e&f);
//    console.log(e|f);
//    console.log(~f);


// // data types
//    var c="10";
//    console.log(typeof(c)); 
//    var Dharani;
//    console.log(typeof(Dharani));
//    const person={firstname:"Dharani", Middlename:"Prtahipati", age:21, eyecolor:"brown"};
//    console.log(person.age);
//    console.log(person.Middlename);
//    console.log(person.firstname);
//    console.log(person.eyecolor);

//    var fruits=["Mango", "Apple", "Papaya" ];
//    console.log(fruits[0]);

// // functions 
//     function functionname(){
//       return console.log(a+b);
//     }
//      functionname(40,500);
       
//      function myjava(d,y){
//       var u=70;
//       var h=57;
//       return console.log(u+h);
//      };
//      myjava();


// // button image hidden
//   //  const click=document.querySelector(".button");
//   //  const tag=document.querySelector(".head");

//   //  click.addEventListener("click",function myfunction(){
//   //    return tag.classList.toggle("head11");
//   //  });
   
//    const tag = document.querySelector(".head");
//    function myfunction(){
//     return tag.classList.toggle("head11");
//    };

  //  const image = document.querySelector(".image-10");
  //  function myfunction(){
  //   return image.classList.toggle("img_10");
  //  };

  
    // Arrays

    // to string
    // const array=["web", "Array", "phyton", "html"];
    // const array9=["java", "guery", "c++"]

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
    // person="dharaniprathipati";
    // const array6=person.slice(5,15);
    // console.log(array6);




    const ornaments=[
     {id:0, image:"download(4).jfif",title:"Bracelet",prize:"550",rating:"4.4"},
     {id:1, image:"download(5).jfif",title:"Ring",prize:"305",rating:"4.5"},
     {id:2, image:"download(6).jfif",title:"Bangle",prize:"540",rating:"5.0"},
     {id:3, image:"images(5).jfif",title:"Ring-1",prize:"423",rating:"3.5"},
     {id:4, image:"images(6).jfif",title:"Bangle-1",prize:"553",rating:"2.5"},
     {id:5, image:"images(7).jfif", title:"Ring-2",prize:"335",rating:"5.5"},
     {id:7, image:"download.jfif",title:"barcelet-2",prize:"754",rating:"6.4"},
     {id:8, image:"download(1).jfif",title:"Gold ring",prize:"345",rating:"3.6"},
     {id:9, image:"download(2).jfif",title:"Gold ring-1",prize:"586",rating:"6.4"},
     {id:10, image:"images(3).jfif",title:"Gold ring-2",prize:"655",rating:"5.5"},
     {id:11, image:"images(4).jfif",title:"barcelet-3",prize:"535",rating:"5.69"},
     {id:12, image:"download(3).jfif",title:"ear ring",prize:"556",rating:"7.68"},
    ];
    
    let data= "";
    ornaments.map(function myFunction(items){
      data += `
      <div class="col-lg-4" data-id=${items.id}>
      <div class="cards-ornaments">
      <h6>id: ${items.id}</h6>
       <img src=${items.image} alt="">
       <h4> title: ${items.title}</h4>
       <h6> prize: ${items.prize}</h6>
       <p> rating: ${items.rating}</p>
       <button onclick="deleteButton(${items.id})">delete</button>
       </div>
       </div>
      `
      document.querySelector(".support").innerHTML = data;
    });
     