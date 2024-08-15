function calcularFaixaEtaria(formulario){
    let faixaEtaria1 = 0;
    let faixaEtaria2 = 0;
    let faixaEtaria3 = 0;
    let idade1 = formulario.idade1.value;
    let idade2 = formulario.idade2.value;
    let idade3 = formulario.idade3.value;
    let idade4 = formulario.idade4.value;
    let idade5 = formulario.idade5.value;

    let idades = [idade1, idade2 , idade3, idade4, idade5];

    for(i = 0; i < idades.length; i++){
        if(idades[i] <= 15){
            faixaEtaria1++;
        }
        else if(idades[i] <= 40){
            faixaEtaria2++;
        }
        else{
            faixaEtaria3++;
        }
    }

    maior = Math.max(...idades);
    resultado = document.getElementById("resultado").innerHTML = 
    `Pessoas na faixa Etária 1: ${faixaEtaria1}<br>
    Pessoas na faixa Etária 2: ${faixaEtaria2}<br>
    Pessoas na faixa Etária 3: ${faixaEtaria3}<br>
    Maior Idade: ${maior}`
}