  // reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.15});
  document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

  // mobile menu
  const menuBtn = document.querySelector('.menu-btn');
  const navList = document.querySelector('nav ul');
  menuBtn.addEventListener('click', ()=>{
    const open = navList.style.display === 'flex';
    navList.style.display = open ? 'none' : 'flex';
    navList.style.flexDirection = 'column';
    navList.style.position='absolute';
    navList.style.top='68px';
    navList.style.left='0';
    navList.style.right='0';
    navList.style.background='#FFF9F7';
    navList.style.padding='20px 28px';
    navList.style.gap='18px';
    navList.style.borderBottom='1px solid rgba(201,120,120,.14)';
  });

  // Botão "Fazer sua encomenda" → WhatsApp
const whatsappButtons = document.querySelectorAll('.btn-primary');

whatsappButtons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();

    const numero = '5521989294981'; // coloque seu número aqui

    const mensagem = 'Olá! Gostaria de fazer uma encomenda na Sweet Lê. 🍰💕';

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
  });
});