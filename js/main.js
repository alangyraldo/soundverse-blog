// El menú ya lo maneja Bootstrap (navbar-toggler), no hace falta JS propio.

// Formulario de contacto: muestra una alerta en vivo de Bootstrap
// con botón para cerrar.
const form = document.getElementById('form');
const contenedorAlerta = document.getElementById('alertaContenedor');

if (form && contenedorAlerta) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    contenedorAlerta.innerHTML = `
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        Mensaje enviado
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Cerrar">
        </button>
      </div>
    `;

    form.reset();
  });
}

// Botón para volver arriba.
const btnArriba = document.getElementById('btnArriba');

if (btnArriba) {
  window.addEventListener('scroll', () => {
    btnArriba.style.display =
      window.scrollY > 300 ? 'block' : 'none';
  });

  btnArriba.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}