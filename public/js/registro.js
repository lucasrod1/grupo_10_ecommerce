window.addEventListener('load', function(){

    const formulario = document.querySelector('.registro');

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        var existingError=false;

        var inputs= document.querySelectorAll('.inputs');

        inputs.forEach(function(input){
            if(input.value == ""){
                input.nextElementSibling.style.color="red";
                input.nextElementSibling.style.fontSize= "11px";
                input.classList.add('is-invalid');                            
                input.nextElementSibling.innerHTML = "El campo esta vacio.";
                existingError = true;

            }else{
                input.classList.remove('is-invalid');
                input.nextElementSibling.innerHTML = "";
            }

        });
        
            //Empezamos a capturar los inputs
            let firstName = document.querySelector("#firstName")
            if (firstName.value != '' && (firstName.value.lenght < 2)){
                firstName.nextElementSibling.innerHTML = ('El nombre debe tener un minimo de 2 caracteres');
            }
            let emailSign = document.querySelector("#emailSign")
            if (emailSign.value.indexOf ('@') != -1 && (emailSign.value.indexOf('.'))){
                emailSign.nextElementSibling.innerHTML = ('Debes ingresar un email válido.');
            }
            let lastName = document.querySelector("#lastName")
            if (lastName.value != '' && (lastName.value.lenght < 2)){
                lastName.nextElementSibling.innerHTML = ('Su apellido debe tener un minimo de 2 caracteres');
            }
            let passwordSign = document.querySelector("#passwordSign")
            if (passwordSign.value != '' && (passwordSign.value.lenght < 2)){
                passwordSign.nextElementSibling.innerHTML = ('Ingrese una contraseña con un minimo de 2 caracteres');
            }
            let passwordValid = document.querySelector("#passwordValid")
            if (passwordValid.value != passwordSign.value){
                passwordValid.nextElementSibling.innerHTML = ('Las contraseñas deben coincidir');    
            }
            
            if (!existingError){
                this.submit();

        }

    })
})