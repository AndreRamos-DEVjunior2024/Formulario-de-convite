document.querySelector('#file').addEventListener('change',function(){
    document.querySelector('#name-file').textContent = this.files[0].name;
})

const toggle = document.querySelector('#dark input')

toggle.addEventListener('click',() => {
    const onOff = toggle.parentNode.querySelector('#onOff')
    onOff.textContent = toggle.checked ? 'Claro' : 'Escuro'
})