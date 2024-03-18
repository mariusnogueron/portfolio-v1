const lenis = new Lenis();
let scrollSpeed = 1; 

lenis.on('scroll', (e) => {
   console.log(e);
});

function raf(time) {
   lenis.raf(time * scrollSpeed); 
   requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


const str = "scrolldown scrolldown scrolldown";
const text = document.getElementById("arrow-scroll");
window.onload = function(){
for (let i = 0; i < str.length; i++) {
    let span = document.createElement ('span');
    span.innerHTML = str[i];
    text.appendChild(span);  
    span.classList.add('scrolldown-span'); // Ajout de la classe reconnaissable
    span.style.transform = `rotate(${11*i}deg)`;
}
}




