var printForm =function () {
  var box = document.getElementById('box');
  box.innerHTML=
  "Prénom: " + document.getElementById("firstname").value + "<br>" +
  "Nom: " + document.getElementById("lastname").value + "<br>" +
  "Age: " + document.getElementById("age").value + "<br>" +
  "Sexe: " + document.querySelector("input[name = 'sexe']:checked").value + "<br>" +
  "Email: " + document.getElementById("email").value + "<br>" +
  "Mot de passe: " + document.getElementById("password").value + "<br>"

  ;
}
