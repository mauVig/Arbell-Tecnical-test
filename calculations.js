window.addEventListener('DOMContentLoaded', () => {
    const ghostHeader = document.querySelector('.ghostHeader');
    const header = document.querySelector('header');
    const cellMenu = document.querySelector('.cellMenu');
    const cruz = document.querySelector('.cellMenu .cruz');
    const hambur = document.querySelector('.hambur');
    const menuItems = document.querySelectorAll('.cellMenu li');
    
    // Configurar altura del ghostHeader
    ghostHeader.style.height = `${header.offsetHeight}px`;
    
    // Manejador para abrir el menú
    hambur.addEventListener('click', () => {
        cellMenu.classList.add('active');
        
        // Animar cada elemento de la lista secuencialmente
        menuItems.forEach((item, index) => {
            setTimeout(() => {
                item.classList.add('fade-in');
            }, 200 * (index + 1)); // 200ms de retraso entre cada elemento
        });
    });
    
    // Manejador para cerrar el menú
    cruz.addEventListener('click', () => {
        // Remover las clases de animación
        menuItems.forEach(item => {
            item.classList.remove('fade-in');
        });
        
        // Esperar un momento antes de ocultar el menú
        setTimeout(() => {
            cellMenu.classList.remove('active');
        }, 300);
    });
});