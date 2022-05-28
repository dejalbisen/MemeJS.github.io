const memeBtn=document.getElementById('memeBtn')
const bg=["#273c75", "#227093", "#4b6584", "#c44569", "#8e44ad", "#2c3e50"]
const fg=["#111","#fff","#111","#111","#fff"]
function color(){
    let limit=bg.length
    let index=Math.floor(Math.random()*limit);
    memeBtn.style.background=bg[index]
    memeBtn.style.color=fg[index]
}