var livesRemaining = 9;
function showHint() {
    document.getElementById('hintBox').style.right = '10px';
    var y = document.getElementById("hintBox");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }    
  }

  function checkPassword() {

    var passwordInput = document.getElementById("passwordInput").value;
    var resultMessage = document.querySelector(".center-box h2");

    if (passwordInput === "**************************************8") {
      resultMessage.style.color = "green";
      resultMessage.textContent = "The password is correct";
    } else {
      resultMessage.style.color = "red";
      resultMessage.textContent = "The password is incorrect";
      livesRemaining--;

      // Update lives remaining display
      document.querySelector(".top-bar .lives-remaining").textContent = "Lives Remaining: " + livesRemaining;

      // Check if lives are exhausted
      if (livesRemaining === 0) {
        // Handle game over logic here
        window.location.href= 'file:///C:/Users/hussa/Desktop/MASTERM1ND/Password3/GameOver.html'
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