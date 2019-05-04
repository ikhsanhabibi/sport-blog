 window.onload= function(){

console.log("test");

   function NameValidator(){
       var name = document.getElementById("name").value;
       if (name==""){
           alert("Bitte Name eingeben !");
           return false;
       }

       else if (!(/^[A-Za-z\s]+$/.test(name))){
           alert("Bitte Buchstaben benutzen !");
           return false;
       }

       else return true;
   }//ende namevalid

var submit = document.getElementById("sub");
submit.onclick=function(){
  valid();
}

   function valid()
   {
       var x = document.getElementById("form");
       if (!(NameValidator()))
       {
           x.setAttribute("onsubmit","return false");
       }
       else {
           x.removeAttribute("onsubmit");
           x.setAttribute("action","spiel.html");
       }
   }


   var spiel = document.getElementById("spiel");
   spiel.onclick=function(){
       spiel.removeAttribute("href");
       alert("Bitte persönliche Daten in Umfrage eingeben !");
   }


 }//onload ende
