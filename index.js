document.querySelectorAll('.story-btn').forEach( btn=>{
    btn.addEventListener('click',() =>{
        btn.classList.toggle('change')
        btn.nextElementSibling.classList.toggle('change')
    })
})


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }