let btn = document.querySelector('.menu-btn');
const menubar = document.querySelector('nav');

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menubar.classList.toggle('hide');
    btn.classList.toggle('change');
};

const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    if (e.target.tagName !== 'IMG') {
        return;
    }

    console.log(e.target);
    const img = e.target;

    const src = img.getAttribute('src');
    const alt = img.getAttribute('alt');
    const full = src.replace('sm', 'full');

    modalImage.src = full;
    modalImage.alt = alt;

    modal.showModal();
// Code to show modal  - Use event parameter 'e'   
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          
