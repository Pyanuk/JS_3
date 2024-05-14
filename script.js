document.querySelectorAll('.btn-clone').forEach((button, index) => {
    button.addEventListener('click', () => {
        const cloneBlock = document.querySelector(`.col-md-4:nth-child(${index + 2})`).cloneNode(true);
        document.querySelector('.row.text-center').appendChild(cloneBlock);
    });
});

document.querySelector('.btn-delete').addEventListener('click', () => {
    document.querySelectorAll('.img-2').forEach(img => {
        img.style.display = 'none';
    });
});

document.querySelector('.btn-add').addEventListener('click', () => {
    document.querySelectorAll('.img-2').forEach(img => {
        img.style.display = 'block';
    });
});
