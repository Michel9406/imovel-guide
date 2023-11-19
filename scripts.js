function calcularRegraDeTres() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const x = parseFloat(document.getElementById("x").value);

    if (!isNaN(a) && !isNaN(b) && !isNaN(x)) {
        const resultado = (x * b) / a;
        const resultadoSpan = document.getElementById("resultadoSpan");
        resultadoSpan.textContent = resultado;
        const orangeBox = document.getElementById("resultado");
        orangeBox.style.display = "block";
    }
}

function abrirmodal() {
    const modal = document.getElementById('modal-janela')
    modal.classList.add('abrir')

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'fechar' || e.target.id == 'modal-janela') {
            modal.classList.remove('abrir')
        }
    })
}

window.addEventListener('load', function () {
    const image = document.querySelector('.zoom-in');
    image.

        style.transform = 'scale(1)';
});