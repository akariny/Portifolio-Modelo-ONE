const nome = document.querySelector('[data-nome]');
const email = document.querySelector('[data-email]');
const mensagem = document.querySelector('[data-mensagem]');


function validaFormulario() {
    validaNome();
    validaEmail();
    validaMensagem();
}

nome.onblur = function validaNome() {
    const erroNome = document.querySelector('[data-erro-nome]');

    if(nome.value === '') {
        erroNome.innerHTML = 'O campo nome não pode estar vazio';
    } else {
        erroNome.innerHTML = '';
    }
}

email.onblur = function validaEmail() {
    const erroEmail = document.querySelector('[data-erro-email]');

    if(email.value === '') {
        erroEmail.innerHTML = 'O campo email não pode estar vazio';
    } else {
        if(email.value.indexOf('@') === -1) {
            erroEmail.innerHTML = 'O email digitado não é valido'
        } else {
            erroEmail.innerHTML = '';
        }
    }
}

mensagem.onblur = function validaMensagem() {
    const erroMensagem = document.querySelector('[data-erro-mensagem]');

    if(mensagem.value === '') {
        erroMensagem.innerHTML = 'Escreva a sua mensagem :)';
    } else {
        erroMensagem.innerHTML = '';
    }
}