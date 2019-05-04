/*

-The innerHTML property sets or returns the HTML content (inner HTML) of an element.

-The getElementsByTagName() method returns a collection of all elements in the document with the specified tag name, as a NodeList object.

-The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button.
    true - the user clicked "OK"
    false - the user clicked "Cancel" (or the "x" (close) button in the top right corner that is available in all major browsers, except Firefox)

-The visibility property sets or returns whether an element should be visible.
The visibility property allows the author to show or hide an element. It is similar to the display property. However, the difference is that if you set display:none, it hides the entire element, while visibility:hidden means that the contents of the element will be invisible, but the element stays in its original position and size.

-The reload()method is used to reload the current document.

*/


window.onload = function() {


  var papier1 = document.getElementById("papier1");
  var schere1 = document.getElementById("schere1");
  var stein1 = document.getElementById("stein1");
  var papier2 = document.getElementById("papier2");
  var schere2 = document.getElementById("schere2");
  var stein2 = document.getElementById("stein2");
  var allImgs = document.getElementsByTagName('img'); //8 bilder
  var punktWin = 0;
  var punktLose = 0;

  function draw() {
    var r = confirm('Das Spiel ist unentschieden, wollen Sie das Spiel wiederstarten?');
    if (r == true) {
      for (var i = 0; i < allImgs.length; i++) {
        allImgs[i].style.visibility = 'visible';
      }
    } else {
      //location.reload();
      alert('Danke, dass Sie schon gespielt haben.');
    }
  }

  function alertWin() {
    var s = confirm('Sie sind gewonnen, wollen Sie das Spiel wiederstarten? ');
    if (s == true) {
      for (var i = 0; i < allImgs.length; i++) {
        allImgs[i].style.visibility = 'visible';
      }
      punktWin++;
    } else {
      //location.reload();
      alert('Danke, dass Sie schon gespielt haben.');
    }
  }

  function alertLose() {
    var t = confirm('Sie sind verloren, wollen Sie das Spiel wiederstarten? ');
    if (t == true) {
      for (var i = 0; i < allImgs.length; i++) {
        allImgs[i].style.visibility = 'visible';
      }
      punktLose++;
    } else {
      //location.reload();
      alert('Danke, dass Sie schon gespielt haben.');
    }
  }


  /*
  -Math.random(): Return a random number between 0 (inclusive) and 1 (exclusive).

  -The floor() method rounds a number DOWNWARDS to the nearest integer, and returns the result. If the passed argument is an integer, the value will not be rounded.

  -The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds.
  Tip: 1000 ms = 1 second.

  */

papier1.onclick=function() {
  hidden(schere1,stein1);
  computer();
}
schere1.onclick=function() {
  hidden(papier1,stein1);
  computer();
}
stein1.onclick=function() {
  hidden(papier1,schere1);
    computer();
}


function hidden(erste, zweite){
  erste.style.visibility = 'hidden';
  zweite.style.visibility = 'hidden';
}

function computer() {
  var computerChoice = Math.floor(Math.random() * 3 + 1);
   console.log(computerChoice);
   if (computerChoice == 1) {
     computerChoice = '1';
     schere2.style.visibility = 'hidden';
     stein2.style.visibility = 'hidden';
     setTimeout(draw, 1000);
    }
   else if (computerChoice == 2) {
     computerChoice = '2';
     papier2.style.visibility = 'hidden';
     stein2.style.visibility = 'hidden';
     setTimeout(alertLose, 1000);
   }
  else if (computerChoice == 3) {
     computerChoice = '3';
     papier2.style.visibility = 'hidden';
     schere2.style.visibility = 'hidden';
     setTimeout(alertWin, 1000);
   }
}//ende computer

} //onloadende
