//hide pre loader


//window event list


window.addEventListener('load',function(){
    document.querySelector('.preloader').style.display="none";
})

//nav button
document.querySelector('.navbtn').addEventListener('click',function(){
    document.querySelector('.nav').classList.toggle('nav--show')
})