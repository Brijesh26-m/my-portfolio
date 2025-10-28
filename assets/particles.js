// Light vanilla JS particles background
window.onload = function() {
  const canvas = document.createElement('canvas');
  canvas.id = 'particle-canvas';
  document.getElementById('particles-js').appendChild(canvas);

  const ctx = canvas.getContext('2d');
  let w, h;
  let particles = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function Particle() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.radius = Math.random() * 2.8 + 1;
    this.vx = (Math.random() - 0.5) * 0.7;
    this.vy = (Math.random() - 0.5) * 0.7;
    this.alpha = Math.random() * .73 + .23;
    this.color = `rgba(157,73,255,${this.alpha})`;
  }

  function initParticles(count) {
    particles = [];
    for(let i=0;i<count;i++) { particles.push(new Particle()); }
  }
  initParticles(98);

  function animate() {
    ctx.clearRect(0,0,w,h);
    ctx.save();
    ctx.globalAlpha = .77;
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.radius,0,2*Math.PI,false);
      ctx.fillStyle = p.color;
      ctx.shadowColor = "#fff";
      ctx.shadowBlur = 4;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if(p.x < 0 || p.x > w) p.vx *= -1;
      if(p.y < 0 || p.y > h) p.vy *= -1;
    });
    ctx.restore();
    requestAnimationFrame(animate);
  }
  animate();
}
