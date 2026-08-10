  const tabs = document.querySelectorAll('.tab');
  const groups = document.querySelectorAll('.cat-group');
  const map = {1:'avulsos', 2:'kits'};
  tabs.forEach((tab, i)=>{
    tab.addEventListener('click', ()=>{
      tabs.forEach(t=>t.classList.remove('active'));
      tab.classList.add('active');
      if(i===0){ groups.forEach(g=>g.style.display='block'); return; }
      groups.forEach(g=> g.style.display = (g.dataset.cat === map[i]) ? 'block' : 'none');
    });
  });

  const menuBtn = document.querySelector('.menu-btn');
  const navList = document.querySelector('nav ul');
  menuBtn.addEventListener('click', ()=>{
    const open = navList.style.display === 'flex';
    navList.style.display = open ? 'none' : 'flex';
    Object.assign(navList.style, {flexDirection:'column', position:'absolute', top:'68px', left:'0', right:'0', background:'#FFF9F7', padding:'20px 28px', gap:'18px', borderBottom:'1px solid rgba(201,120,120,.14)'});
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