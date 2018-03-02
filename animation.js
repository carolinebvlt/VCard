var name = document.getElementsByTagName('h2')[0];
var recto = document.getElementById('recto');
var verso = document.getElementById('verso');

function switchVerso(){
  recto.style.display = "none";
  verso.style.display = "block";
}
function switchRecto(){
  verso.style.display = "none";
  recto.style.display = "flex";
}
