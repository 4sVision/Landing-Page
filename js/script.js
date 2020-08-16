var burgerMenu = document.getElementById('burger-menu');
var show = document.getElementById('menu2');

burgerMenu.addEventListener('click', function(){
    this.classList.toggle("close");
    show.classList.toggle("show");
})