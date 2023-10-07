
const calcular = document.getElementById("calcular");


function imc(){
    const nome = document.getElementById("nome").value;
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
    const resultado = document.getElementById("resultado");

    if(nome !== "" && altura !== "" && peso !== ""){

        const valorImc = (peso / (altura * altura)).toFixed(1);

        let classificacao = "";

        if (valorImc <18.5){
            classificacao = "Abaixo do peso. Cuide da saúde!";
        } else if (valorImc <25){
            classificacao = "com peso ideal";
        } else if (valorImc <30){
            classificacao = "Acima do peso. Cuide da saúde!";
        } else if (valorImc <35){
            classificacao = "Obesidade Grau 1. Cuide da saúde!";
        } else if (valorImc <40){
            classificacao = "Obesidade Grau 2. Cuide da saúde!";
        } else {
            classificacao = "Obesidade Grau 3. Cuide da saúde!";
        }

        resultado.textContent =`${nome} seu IMC é ${valorImc} e você está ${classificacao}`;

    }else {
        resultado.textContent = "Preencha todos os campos."
    }
}

calcular.addEventListener("click", imc);
