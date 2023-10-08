alert ("Sumando numeros");
let boton = document.getElementById("boton");
let resultado = document.getElementById("resultado");
boton.addEventListener("click", function()
    {
        var valor1 = parseFloat(document.getElementById("valor1").value);
        var valor2 = parseFloat(document.getElementById("valor2").value);
        var valor3 = parseFloat(document.getElementById("valor3").value);
        var valor4 = parseFloat(document.getElementById("valor4").value);
        var suma = valor1 + valor2 + valor3 + valor4;

        if(isNaN(suma)){
            resultado.textContent = "NO ingresó un numero";
        }
        else{
            resultado.textContent = suma;
        }
    }
)