// nav calls

let menuIcon = document.getElementById("menu-icon");
let nav = document.querySelector("nav");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-times");
    nav.classList.toggle("active");
}

if(menuIcon){
    menuIcon.classList.add('active');
}

/**
*!scroll activity
**/

window.onscroll = () =>{
    nav.classList.remove('active')
    menuIcon.classList.remove('fa-times')
}


document.addEventListener('DOMcntLoader', () =>{
    const expandMore = document.querySelectorAll('[expand-more]')

    function expand(){
        const showContent = document.getElementById(this.dataset.target)
        if (showContent.classList.contains('expand-active')){
            this.innerHTML = this.dataset.showtext;
        } else{
            this.innerHTML = this.dataset.hidetext
        }
        showContent.classList.toggle('expand-active')
    }

    expandMore.forEach(expandMore =>{
        expandMore.addEventListener('click', expand)
    })
})

/**
 * ? these are the read more js codes
 * **/


function myFunction() {
    let dots = document.getElementById("dots");
    let moreText = document.getElementById("more");
    let btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  };

  function readMore(){
    
    let myBtn = document.getElementById('myBtn')
    if(myBtn.innerHTML === 'Read more'){
        myBtn.innerHTML = 'hello'
    }
  };