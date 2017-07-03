var printForm = function(myVar) {

  if (myVar % 2 == 0) {
    document.getElementById("box").innerHTML = "paire";
  } else {
    document.getElementById("box").innerHTML = "impaire";
  }
}
