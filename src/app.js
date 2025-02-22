import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function excuseGen() {
  var guilty = ["The pope ", "The president ", "Alf ", "Homer Simpson ", "Bob Marley "]
  var action = ["broke ", "stole ", "threw away ", "destroyed ", "corrupted "]
  var victim = ["my phone ", "the sport center ", "a brand new limousine ", "a piece of cake ", "your pants "]
  var when = ["this morning ", "at noon ", "just about now ", "on 1946", "while your wedding "]
  var how = ["while soaked in alcohol.", "being completely out of control.", "after drinking 35 coffees and an ice cream.", "being asleep (dont ask me how it happened).", "trying to do something funny."]

  var pt1 = guilty[Math.floor(Math.random()) * guilty.length]
  var pt2 = action[Math.floor(Math.random()) * action.length]
  var pt3 = victim[Math.floor(Math.random()) * victim.length]
  var pt4 = when[Math.floor(Math.random()) * when.length]
  var pt5 = how[Math.floor(Math.random()) * how.length]

  var excuse = pt1 + pt2 + pt3 + pt4 + pt5
  return excuse;
}

window.onload = function() {
  document.getElementById("excuse").textContent = excuseGen();
};