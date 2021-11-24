window.addEventListener('load', function(){

    let error = [];

    let formulario = document.querySelector('.registro');

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        

        //Empezamos a capturar los inputs
        let firstName = document.querySelector('#firstName')
        if (firstName.value != '' && (fistName.value.lenght < 2)){
            error.push('El nombre debe tener un minimo de 2 caracteres');
        }
        let emailSign = document.querySelector('#emailSign')
        if (emailSign.value.indexOf ('@') != -1 && (email.value.indexOf('.'))){
            error.push('Por favor ingrese un email valido');
        }
        let lastName = document.querySelector('#lastName')
        if (lastName.value != '' && (lastName.value.lenght < 2)){
            error.push('Por favor ingrese su apellido');
        }
        let passwordSign = document.querySelector('#passwordSign')
        if (passwordSign.value != '' && (passwordSign.value.lenght < 2)){
            error.push('Ingrese una contraseña con un minimo de 2 caracteres');
        }
        let passwordValid = document.querySelector('#passwordValid')
        if (passwordValid.value != passwordSign){
            error.push('Las contraseñas deben coincidir');    
        }
        
    if (error.lenght > 0){
        e.preventDefault();

        let errores = document.querySelector('.text-danger');
        for (let i = 0; i < error.lenght; i++) {
            errores.innerHTML += "<li>" + error[i] + "</li>"
        }
    }

})})