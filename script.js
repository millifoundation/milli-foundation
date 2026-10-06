function toggleMenu(){
  document.getElementById('nav').classList.toggle('open');
}
function closeMenu(){
  document.getElementById('nav').classList.remove('open');
}
function copyUPI(){
  const upi = document.getElementById('upi').textContent.trim();
  navigator.clipboard.writeText(upi).then(() => {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 1800);
  });
}
document.getElementById('year').textContent = new Date().getFullYear();

// Premium reveal animation
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.card,.about-premium,.stats-card,.section-title').forEach(el=>{
  el.classList.add('reveal');
  observer.observe(el);
});
