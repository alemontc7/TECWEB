function copiar(celda) {
    const codigo = celda.querySelector('.codigo-contenedor').textContent;
    const texto = document.createElement('textarea');
    texto.value = codigo;
    document.body.appendChild(texto);
    texto.select();
    document.execCommand('copy');
    document.body.removeChild(texto);
    const boton = celda.querySelector('.boton-copiar');
    boton.style.backgroundColor = 'green';
    boton.textContent = '✓';
}
