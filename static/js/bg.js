const canvas = document.getElementById("bg");
const ctx = canvas.getContext("2d");

canvas.width = innerWidth;
canvas.height = innerHeight;

let dots = Array.from({ length: 80 }, () => ({
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  r: Math.random() * 2,
  dx: Math.random() * .3,
  dy: Math.random() * .3
}));

function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  dots.forEach(d=>{
    ctx.beginPath();
    ctx.arc(d.x,d.y,d.r,0,Math.PI*2);
    ctx.fillStyle="rgba(0,200,255,.6)";
    ctx.fill();
    d.x+=d.dx; d.y+=d.dy;
    if(d.x>canvas.width) d.x=0;
    if(d.y>canvas.height) d.y=0;
  });
  requestAnimationFrame(draw);
}
draw();
