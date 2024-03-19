var livesRemaining = 1;
var selectedCheckbox = null;

function showHint() {
    document.getElementById('hintBox').style.right = '10px';
    var y = document.getElementById("hintBox");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }    
  }
  function Pause(){
    var x = document.getElementById("pasue-menu");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function resume(){
  var x = document.getElementById("Resume");
  var y= document.getElementById("pasue-menu");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  } 
}

function handleCheckboxClick(checkboxId) {
  if (selectedCheckbox !== null && selectedCheckbox !== checkboxId) {
    // Uncheck the previously selected checkbox
    document.getElementById(selectedCheckbox).checked = false;
  }

  // Update the selected checkbox
  selectedCheckbox = checkboxId;
}
function confirm(){
    var xyz= document.getElementById("real");
    var zxy= document.getElementById("fake");
    var disappearingText=document.getElementById("disText");
    if (xyz.checked){
        setTimeout(function() {
            window.location.href = 'file:///C:/Users/hussa/Desktop/MASTERM1ND/Vishing/Recap.html';
          }, 1000)
    } else{
        disappearingText.style.display = "block";
        disappearingText.style.color="red";
        setTimeout(function() {
          disappearingText.style.display = "none";
      }, 1000);
      livesRemaining--;
      document.querySelector(".top-bar .lives-remaining").textContent = "Lives Remaining: " + livesRemaining;
      if (livesRemaining==0){
        setTimeout(function() {
          window.location.href = 'file:///C:/Users/hussa/Desktop/MASTERM1ND/Vishing/GameOver.html';
        }, 1000)
      }
    }
}