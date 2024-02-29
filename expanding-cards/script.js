const $paneles = document.querySelectorAll('.panel');

$paneles.forEach((panel) => {
    panel.addEventListener('click', () => {
        removerClasses();
        panel.classList.add('active');
    })
})

function removerClasses(){
    $paneles.forEach((panel) => {
        panel.classList.remove('active')
    })
}