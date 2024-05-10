let profile =document.getElementById("profile");
let share =document.getElementById("share");
let shareBtn =document.getElementById("shareBtn");

shareBtn.addEventListener('click',function(){
    if(screen.width > 450 ){
    share.classList.toggle("hide") 
    }else{
        share.classList.toggle("hide")
        shareBtn.style.zIndex="100"
    }
    
})