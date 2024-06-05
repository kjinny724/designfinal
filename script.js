

function changeNumber() {
   // 숫자 1을 2로 바꿉니다.
   document.getElementById("number").style.display = "none";
   document.getElementById("number2").style.display = "block";
   document.getElementById("number5").style.display = "block";
   document.getElementById("number6").style.display = "block";
   document.getElementById("number7").style.display = "block";
}

function resetNumber() {
   // 숫자 2를 클릭하면 모든 숫자를 다시 초기화합니다.
   document.getElementById("number").style.display = "block";
   document.getElementById("number2").style.display = "none";
   document.getElementById("number5").style.display = "none";
   document.getElementById("number6").style.display = "none";
   document.getElementById("number7").style.display = "none";
}