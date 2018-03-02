var name = document.getElementsByTagName('h2')[0];
var recto = document.getElementById('recto');
var verso = document.getElementById('verso');

function switchView(){
  recto.style.display = "none";
  verso.style.display = "block";
}
