// aa abrimos y cerramos el meni
document.getElementById('burger').addEventListener('click', () => {
  document.getElementById('menu').classList.toggle('abierto');
});

// formulario de contacto pero igual solo se sumula el envio 
const form = document.getElementById('form');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('gracias, recibimos tu mensaje');
    form.reset();
  });
}

const btnArriba = document.getElementById('btnArriba');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnArriba.style.display = 'block';
  } else {
    btnArriba.style.display = 'none';
  }
});

btnArriba.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});