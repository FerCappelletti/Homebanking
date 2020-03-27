window.onload = cargaPagina

function cargaPagina(){
    eventos();
}

async function sendForm(){
    let form = document.getElementById('formulario');
    event.preventDefault();
    const usuario = getUser();
    await postUsusario(usuario);
    form.reset()
}

function postUsusario(usuario){

    fetch('http://localhost:3001/usuarios', {
        method: 'POST',
        headers: {
            'Accept': 'aplication/json',
            'Content-type': 'application/json',
        },
        body: JSON.stringify(usuario)
    })

    .then(function(res) {
        return res.json()
    })
    .then(function(res){
        console.log(res)
    })
    .catch(function(res) {console.log(res)})
};



function getUser () {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const usuario= document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    return {
        nombre: nombre,
        apellido: apellido,
        usuario: usuario,
        password: password
    }
}

function eventos(){
    document.getElementById('formulario').addEventListener('submit', sendForm);
}


