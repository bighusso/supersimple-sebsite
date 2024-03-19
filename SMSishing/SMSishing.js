var livesRemaining = 2;
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
function confirm(){
  var z= document.getElementById("real");
  var y= document.getElementById("real2");
  var x= document.getElementById("fake");
  var disappearingText=document.getElementById("disText");
  var resultMessage = document.querySelector(".center-box h3");
  if (z.checked){
    livesRemaining--;
    document.querySelector(".top-bar .lives-remaining").textContent = "Lives Remaining: " + livesRemaining;
    if (livesRemaining==0){
      setTimeout(function() {
        window.location.href = 'file:///C:/Users/hussa/Desktop/MASTERM1ND/SMSishing/GameOver.html';
      }, 1000)
    }
  }
  if (y.checked){
    livesRemaining--;
    document.querySelector(".top-bar .lives-remaining").textContent = "Lives Remaining: " + livesRemaining;
    if (livesRemaining==0){
      setTimeout(function() {
        window.location.href = 'file:///C:/Users/hussa/Desktop/MASTERM1ND/SMSishing/GameOver.html';
      }, 1000)
    }
  } 
  if (x.checked){
    setTimeout(function() {
      window.location.href = 'file:///C:/Users/hussa/Desktop/MASTERM1ND/SMSishing/Recap.html';
    }, 1000)
  }

}