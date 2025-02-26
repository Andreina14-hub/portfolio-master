document.addEventListener('DOMContentLoaded', function () {
    const contactButton = document.querySelector('.contact-button');
    const emailPopup = document.getElementById('emailPopup');
    const closeButton = document.querySelector('.close-button');
    const copyButton = document.getElementById('copyEmail');
    const emailText = document.getElementById('emailText');
    const email = 'l.andreina14@gmail.com';

    // Función para detectar si es dispositivo móvil o tablet
    function isMobileOrTablet() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
            window.innerWidth <= 1024;
    }

    // Configurar el botón de contacto
    contactButton.addEventListener('click', function (e) {
        if (isMobileOrTablet()) {
            // En móvil/tablet, abrir el cliente de correo
            window.location.href = `mailto:${email}?subject=Contacto%20Profesional&body=Hola%20Andreina%2C%0D%0A%0D%0A`;
        } else {
            // En desktop, mostrar popup
            e.preventDefault();
            emailPopup.style.display = 'flex';
            emailPopup.classList.add('show');
        }
    });

    // Copiar email al portapapeles
    copyButton.addEventListener('click', function () {
        navigator.clipboard.writeText(email).then(() => {
            // Feedback visual
            copyButton.textContent = '¡Copiado!';
            copyButton.classList.add('copied');

            // Restaurar después de 2 segundos
            setTimeout(() => {
                copyButton.textContent = 'Copiar Email';
                copyButton.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Error al copiar:', err);
            copyButton.textContent = 'Error al copiar';
        });
    });

    // Cerrar popup con el botón
    closeButton.addEventListener('click', function () {
        emailPopup.classList.remove('show');
        setTimeout(() => {
            emailPopup.style.display = 'none';
        }, 300);
    });

    // Cerrar popup al hacer clic fuera
    emailPopup.addEventListener('click', function (e) {
        if (e.target === emailPopup) {
            emailPopup.classList.remove('show');
            setTimeout(() => {
                emailPopup.style.display = 'none';
            }, 300);
        }
    });

    // Cerrar popup con la tecla Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && emailPopup.classList.contains('show')) {
            emailPopup.classList.remove('show');
            setTimeout(() => {
                emailPopup.style.display = 'none';
            }, 300);
        }
    });

    // Prevenir que el popup se cierre al hacer clic en su contenido
    document.querySelector('.popup-content').addEventListener('click', function (e) {
        e.stopPropagation();
    });
}); 