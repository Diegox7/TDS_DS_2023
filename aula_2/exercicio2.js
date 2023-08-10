var n = 15;
var i = 0;

function calcularFatorial(n) {
    var f = 1;
    for (var i = 1; i <= n; i++) {
        f *= i;
    }
    return f;
}

console.log("O valor fatorial é: " + calcularFatorial(n));






















