window.addEventListener("load", function (){


    let form = document.querySelector(".product");
    form.addEventListener("submit", function(e){

        e.preventDefault();
        var existingError = false;

        var inputs = document.querySelector('.inputs');

        inputs.forEach(function(input){
            if(input.value == ''){
                input.nextElementSibling.style.color="red";
                input.nextElementSibling.style.fontSize= "11px";
                input.classList.add('is-invalid');                            
                input.nextElementSibling.innerHTML = "Por favor ingrese un valor.";
                existingError = true;
            }else{
                input.classList.remove('is-valid');
                input.nextElementSibling.innerHTML = "";
            }
        })
    })
})