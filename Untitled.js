window.onload=function(){

  var spiel = document.getElementById("spiel");

  spiel.onclick=function(){
      spiel.removeAttribute("href");
      alert("Bitte persönliche Daten in Umfrage eingeben! Dann können Sie spielen");
    }

}
