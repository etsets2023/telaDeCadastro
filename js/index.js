let btn = document.querySelector("#verSenha")

//código para mostrar e esconder a senha//
btn.addEventListener('click', () => { 
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else {
    inputSenha.setAttribute('type', 'password') 
 }
})

//Autenticação
function entrar(){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector("#msgError")
    let listaUser = []
   
    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }
    //Desestruturar o array listaUser de objeto que está no localStorage para poder trabalhar no código com cada objeto
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    //Varrer o array agora desestruturado listaUser  
    listaUser.forEach((item) => {
        //e se o valor do input for igual o listaUser,
        if(usuario.value == item.userCad && senha.value == item.senhaCad){
            //será adicionado no objeto userValid se não, sai do if
            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }
        }
    }) 

    //trabalhar com o objeto userValid, verificar se senha e usuario estão corretos, se tiver correto fazer login, 
    if(usuario.value == userValid.user && senha.value == userValid.senha){
        setTimeout(()=> {
            window.location.href = 'http://127.0.0.1:5500/tela-de-inicio.html';
        }, 1000)
        //se estiver errado, mensagem de erro
    } else {
        userLabel.setAttribute('style', 'color: red')
        usuario.setAttribute('style', 'border-color: red')
        senhaLabel.setAttribute('style', 'color: red')
        senha.setAttribute('style', 'border-color: red')
        msgError.setAttribute('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        usuario.focus()
        
    }
}

