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
