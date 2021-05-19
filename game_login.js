function log_btn(){
player1=document.getElementById("lg1").value;
player2=document.getElementById("lg2").value;
localStorage.setItem("player1",player1);
localStorage.setItem("player2",player2);
window.location="game_page.html";
}