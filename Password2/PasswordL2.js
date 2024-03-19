var livesRemaining = 5;
function showHint() {
    document.getElementById('hintBox').style.right = '10px';
    var hintBox = document.getElementById("hintBox");
    if (hintBox.style.display === "none") {
      hintBox.style.display = "block";
    } else {
      hintBox.style.display = "none";
    }    
  }

  function checkPassword() {

    var passwordInput = document.getElementById("passwordInput").value;
    var resultMessage = document.querySelector(".center-box h2");
    var hintBox = document.getElementById("hintBox");
    if (passwordInput === "Jan3rd2005") {
      resultMessage.style.color = "green";
      resultMessage.textContent = "The password is correct";
      setTimeout(function() {
        window.location.href = 'file:///C:/Users/hussa/Desktop/MASTERM1ND/Password2/Recap.html';
      }, 1500)
    } else {
      resultMessage.style.color = "red";
      resultMessage.textContent = "The password is incorrect";
      livesRemaining--;

      // Update lives remaining display
      document.querySelector(".top-bar .lives-remaining").textContent = "Lives Remaining: " + livesRemaining;
      if (livesRemaining===2){
        hintBox.textContent="Remember that it follows the m/d/y and maybe it is capitalized"
      }
      // Check if lives are exhausted
      if (livesRemaining === 0) {
        // Handle game over logic here
        window.location.href= 'file:///C:/Users/hussa/Desktop/MASTERM1ND/Password2/GameOver.html'
      }
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
    var y=document.getElementById("Resume");
    var z=document.getElementById("pasue-menu");
    if (y.style.display==="none"){
      z.style.display="block";
    } else {
      z.style.display = "none";
    }
  }