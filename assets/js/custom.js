// let hamburgerImg = document.querySelector('.hamburgerImg')

// hamburgerImg.addEventListener('click', ()=>{
//     let bannerSlider =document.querySelector('.mobile-menu')
//     console.log('bannerSlider')
//     bannerSlider.style.width= "100%"
//     // bannerSlider.classList.toggle('showContent')

// })


const menu = document.querySelector("button.toogle")
const crossSideMenu = document.querySelector(".sidemenuCross")

menu.addEventListener("click",()=>{
    var left = document.querySelector(".sildeMenu").style.width="320px"
})

crossSideMenu.addEventListener('click',()=>{
    // alert('sasa')
    var rigth = document.querySelector(".sildeMenu").style.width="0"

})


/* ashu js */
 document.getElementById("year").innerHTML=new Date().getFullYear();
