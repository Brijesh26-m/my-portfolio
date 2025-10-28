// Minimal interactive behaviors for the demo (Style A)
document.getElementById('year')?.textContent = new Date().getFullYear();
document.getElementById('year2')?.textContent = new Date().getFullYear();
document.getElementById('year3')?.textContent = new Date().getFullYear();

// Graceful submit handlers for static demo (won't interrupt Netlify form)
document.querySelectorAll('form[data-netlify]').forEach(form=>{
  form.addEventListener('submit', function(e){
    // Let Netlify handle submission; show friendly UI
    setTimeout(()=>{ alert('Thanks — your submission should be received (check Netlify dashboard for form entries).'); }, 300);
  });
});
