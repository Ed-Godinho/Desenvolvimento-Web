//Função de deixar a senha visível.
function togglePasswordVisibility() {
    var passwordInput = document.getElementById("senha");
    var icon = document.querySelector(".fa-eye");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        var icon = document.querySelector(".fa-eye-slash");
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function togglePasswordVisibility2() {
    var passwordInput = document.getElementById("confirma-senha");
    var icon = document.querySelector(".fas2");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        var icon = document.querySelector(".fas2");
        passwordInput.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

function scrollToForm() {
    const formularioElement = document.getElementById('formulario_cadastro');
    formularioElement.scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const senhaInput = document.getElementById('senha');
    const confirmaSenhaInput = document.getElementById('confirma-senha');

    form.addEventListener('submit', function (event) {
        if (senhaInput.value !== confirmaSenhaInput.value) {
            // Senhas não correspondem
            event.preventDefault(); // Impede o envio do formulário

            // Estiliza o campo de senha e confirmação de senha
            senhaInput.style.borderColor = 'red';
            confirmaSenhaInput.style.borderColor = 'red';

            // Exibe um alerta informando que as senhas não correspondem
            alert('As senhas digitadas não correspondem.');
        }
    });
});

//event de load
window.addEventListener('load', function() {
  function animationSection1() {
    const textElement = document.querySelector('.animate-1');
    const originalText = 'Este é nosso WebSite e atualmente conseguimos colocar quase qualquer mídia com facilidade! \n Todo este conteúdo é servido por um backend construído em Python com FastAPI mas existem muitos outros serviços que podem ser utilizados. Como por exemplo o Django e Flask.';

    let index = 0;
    let intervalId;

    function startTextAnimation() {
      textElement.innerHTML = '';
      index = 0;
      intervalId = setInterval(() => {
        if (index >= originalText.length) {
          clearInterval(intervalId);
          return;
        }
        const currentText = originalText.substr(0, index + 1);
        textElement.innerHTML = currentText;
        index++;
      }, 40);
    }

    startTextAnimation();
    
  }

  setTimeout(animationSection1, 1600);
});


document.addEventListener('DOMContentLoaded', function () {
    const startButton = document.getElementById('startAnimation');
    const textElement = document.querySelector('.contact-me');
    const originalText = 'Aqui eu tenho um texto qualquer';
    const hiddenElement = document.querySelector('a img.hidden');

    let index = 0;
    let intervalId;

    function startTextAnimation() {
        textElement.innerHTML = '';
        index = 0;
        intervalId = setInterval(() => {
            if (index >= originalText.length) {
                clearInterval(intervalId);
                hiddenElement.classList.remove('hidden');
                hiddenElement.classList.add('visible');

                return;
            } else {
                hiddenElement.classList.remove('visible');
                hiddenElement.classList.add('hidden');
            }

            const currentText = originalText.substr(0, index + 1);
            textElement.innerHTML = currentText;
            index++;
        }, 40);
    }

    startButton.addEventListener('click', function () {
        //seta o valor do css para #startAnimation para display: None
        startButton.style.display = 'none';
        startTextAnimation();
        const barElement = document.createElement('span');
        barElement.className = 'blinking-bar';
        barElement.innerHTML = '|';
        textElement.appendChild(barElement);
    });
});


