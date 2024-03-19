var livesRemaining = 3;

function submit() {
  var ec1 = document.getElementById("ec1");
  var ec2 = document.getElementById("ec2");
  var ec3 = document.getElementById("ec3");
  var ec4 = document.getElementById("ec4");
  var ec5 = document.getElementById("ec5");

  if (ec1.checked && ec2.checked) {
    // Redirect to the next level if both ec1 and ec2 are checked
    setTimeout(function () {
      window.location.href = 'file:///C:/Users/hussa/Desktop/MASTERM1ND/Email Phishing/Recap.html';
    }, 500);
  } else {
    // Handle the case where either ec1 or ec2 is checked
    if (ec1.checked) {
      checkAnswer(ec1, [ec3, ec4, ec5]);
    } else if (ec2.checked) {
      checkAnswer(ec2, [ec3, ec4, ec5]);
    } else {
      // Handle the case where only ec3, ec4, or ec5 are checked without ec1 and ec2
      checkAnswer(null, [ec3, ec4, ec5]);
    }
  }
}

function checkAnswer(selectedCheckbox, otherCheckboxes) {
  var incorrectChecked = otherCheckboxes.some(function (checkbox) {
    return checkbox.checked;
  });

  if (selectedCheckbox && incorrectChecked) {
    // Decrease lives
    livesRemaining--;
    document.querySelector(".top-bar .lives-remaining").textContent = "Lives Remaining: " + livesRemaining;

    // Hide the selected checkbox
    selectedCheckbox.parentNode.style.display = "none";

    // Check if lives are exhausted
    if (livesRemaining === 0) {
      // Handle game over logic here
      window.location.href = 'file:///C:/Users/hussa/Desktop/MASTERM1ND/GameOver.html';
    }
  } else if (!selectedCheckbox && incorrectChecked) {
    // Decrease lives
    livesRemaining--;
    document.querySelector(".top-bar .lives-remaining").textContent = "Lives Remaining: " + livesRemaining;

    // Check if lives are exhausted
    if (livesRemaining === 0) {
      // Handle game over logic here
      window.location.href = 'file:///C:/Users/hussa/Desktop/MASTERM1ND/GameOver.html';
    }
  }
}
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
