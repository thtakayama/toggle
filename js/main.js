const toggle = document.querySelector('.toggle');
const btnToggle = document.querySelector('.toggle-btn');
const body = document.body;

const ativarTema = () => {
  toggle.classList.toggle('active');
  body.classList.toggle('escuro');
};

btnToggle.addEventListener('click', ativarTema);
