function operacao() {

    //soma
    function realizarSoma() {
        const resultado = Number(valor1.value) + Number(valor2.value);
        exibirResultado(resultado);
    }

    //subtração
    function realizarSubtracao() {
        const resultado = Number(valor1.value) - Number(valor2.value);
        exibirResultado(resultado);
    }

    //divisão
    function realizarDivisao() {
        const valor2Float = Number(valor2.value);
        if (valor2Float !== 0) {
            const resultado = Number(valor1.value) / valor2Float;
            exibirResultado(resultado);
        } else{
            exibirResultado("não é possivel dividir por zero o idiota");
        }
    }

    //multiplicação
    function realizarMultiplicacao() {
        const resultado = Number(valor1.value) * Number(valor2.value);
        exibirResultado(resultado);
    }

    // Função para exibir o resultado na página
    function exibirResultado(resultado) {
        const span = document.getElementById("resultadoValor");
        span.textContent = resultado;
    }

    //capturando o valor de cada id
    const valor1 = document.getElementById("1");
    const valor2 = document.getElementById("2");

    //click no botão de cada operação
    document.getElementById("soma").addEventListener("click", realizarSoma);
    document.getElementById("subtracao").addEventListener("click", realizarSubtracao);
    document.getElementById("divisao").addEventListener("click", realizarDivisao);
    document.getElementById("multiplicacao").addEventListener("click", realizarMultiplicacao);
}


//função operação
operacao();
