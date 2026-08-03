document.addEventListener("DOMContentLoaded",()=>{


/* ==========================================
TELA DE CARREGAMENTO
========================================== */


const loading = document.querySelector(".loading-screen");


if(loading){


setTimeout(()=>{


loading.style.opacity="0";


setTimeout(()=>{


loading.style.display="none";


},500);


},800);


}





/* ==========================================
MENU MOBILE
========================================== */


const menuButton = document.querySelector(".menu-mobile");

const menu = document.querySelector(".menu");



if(menuButton){


menuButton.addEventListener("click",()=>{


menu.classList.toggle("active");


});


}





/* ==========================================
FECHAR MENU AO CLICAR NO LINK
========================================== */


const linksMenu = document.querySelectorAll(".menu a");



linksMenu.forEach(link=>{


link.addEventListener("click",()=>{


if(menu){

menu.classList.remove("active");

}


});


});



 
/* ==========================================
ANIMAÇÕES AO ROLAR A PÁGINA
========================================== */


const elementos = document.querySelectorAll(

".about-card, .benefit-item, .transformation-content, .highlight-box, .cta-content"

);



const observer = new IntersectionObserver((entries)=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.classList.add("show");


}


});


},{

threshold:0.15

});




elementos.forEach(elemento=>{


elemento.classList.add("hidden");


observer.observe(elemento);


});





/* ==========================================
ROLAGEM SUAVE
========================================== */


document.querySelectorAll('a[href^="#"]').forEach(link=>{


link.addEventListener("click",function(e){


const destino=document.querySelector(this.getAttribute("href"));


if(destino){


e.preventDefault();


destino.scrollIntoView({

behavior:"smooth"

});


}


});


});



 
/* ==========================================
EFEITO DE SCROLL NO HEADER
========================================== */


const header = document.querySelector(".header");



window.addEventListener("scroll",()=>{


if(window.scrollY > 50){


header.classList.add("scrolled");


}else{


header.classList.remove("scrolled");


}


});





/* ==========================================
ANO AUTOMÁTICO NO FOOTER
========================================== */


const ano = document.querySelector(".footer p");


if(ano){


ano.innerHTML = 

`© ${new Date().getFullYear()} Além da Advocacia. Todos os direitos reservados.`;


}


});
