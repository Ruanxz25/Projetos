// Seleciona todas as abas com a classe ".tab"
const tabs = document.querySelectorAll('.tab');

// Seleciona todos os grupos de categorias com a classe ".cat-group"
const groups = document.querySelectorAll('.cat-group');

// Mapeia o índice das abas para suas respectivas categorias
const map = {1:'avulsos', 2:'kits'};

// Percorre todas as abas
tabs.forEach((tab, i)=>{

// Adiciona um evento de clique em cada aba
tab.addEventListener('click', ()=>{

// Remove a classe "active" de todas as abas
tabs.forEach(t=>t.classList.remove('active'));

// Adiciona a classe "active" somente na aba clicada
tab.classList.add('active');

// Se for a primeira aba, exibe todos os grupos
if(i===0){ groups.forEach(g=>g.style.display='block'); return; }

// Exibe somente os grupos que correspondem à categoria selecionada
groups.forEach(g=> g.style.display = (g.dataset.cat === map[i]) ? 'block' : 'none');
});
});

// Seleciona o botão do menu
const menuBtn = document.querySelector('.menu-btn');

// Seleciona a lista de navegação
const navList = document.querySelector('nav ul');

// Adiciona um evento de clique ao botão do menu
menuBtn.addEventListener('click', ()=>{

// Verifica se o menu está atualmente aberto
const open = navList.style.display === 'flex';

// Alterna entre abrir e fechar o menu
navList.style.display = open ? 'none' : 'flex';

// Define os estilos do menu quando ele é aberto
Object.assign(navList.style, {
flexDirection:'column',
position:'absolute',
top:'68px',
left:'0',
right:'0',
background:'#FFF9F7',
padding:'20px 28px',
gap:'18px',
borderBottom:'1px solid rgba(201,120,120,.14)'
});
});

// Botão "Fazer sua encomenda" → WhatsApp

// Seleciona todos os botões com a classe ".btn-primary"
const whatsappButtons = document.querySelectorAll('.btn-primary, .order-link');

// Percorre todos os botões encontrados
whatsappButtons.forEach(button =>{

// Adiciona um evento de clique em cada botão
button.addEventListener('click', (e) =>{

// Impede o comportamento padrão do botão/link
e.preventDefault();

// Número de WhatsApp que receberá a mensagem
const numero = '5521989294981'; 

// Mensagem que será preenchida automaticamente no WhatsApp
const mensagem = 'Olá! Gostaria de fazer uma encomenda na Sweet Lê. 🍰💕';

// Monta a URL do WhatsApp com a mensagem codificada
const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

// Abre o WhatsApp em uma nova aba
//window.open(url, '_blank');
window.location.href = url;
});
});