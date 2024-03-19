function retry(){
var retryBut = document.getElementById("retry");
window.location.href= 'file:///C:/Users/hussa/Desktop/MASTERM1ND/Password/PasswordL1.html'
}
function cont(){
var continueBut = document.getElementById("continue");
window.location.href= 'file:///C:/Users/hussa/Desktop/MASTERM1ND/Password2/PasswordL2.html'
}
window.onload = function() {
    var y = document.getElementById("timeTaken");
    var totalTimeInSeconds = localStorage.getItem('totalTimeInSeconds');
    y.textContent = "Time taken: "+totalTimeInSeconds;
  };
  