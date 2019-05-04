window.onload=function(){

  console.log("test");

  var spiel = document.getElementById("spiel");
  spiel.onclick=function(){
      spiel.removeAttribute("href");
      alert("Bitte persönliche Daten in Umfrage eingeben !");
  }

}//load ende
