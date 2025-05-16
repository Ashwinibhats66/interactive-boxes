const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
  box.addEventListener('click', () => {
    boxes.forEach(b => {
      if (b !== box) b.classList.remove('expanded');
    });

    box.classList.toggle('expanded');
  });

  const colorSelect = box.querySelector('.color-select');
  const sizeSelect = box.querySelector('.size-select');

  if (colorSelect && sizeSelect) {
    colorSelect.addEventListener('change', (e) => {
      box.style.backgroundColor = e.target.value;
    });

    sizeSelect.addEventListener('change', (e) => {
      box.style.fontSize = e.target.value === 'large' ? '1.5rem' : '1rem';
    });
  }
});