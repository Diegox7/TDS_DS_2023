document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Verificar as credenciais (exemplo simples)
    if (username === "usuario" && password === "senha") {
        alert("Login bem-sucedido!");
        // Aqui você pode redirecionar para outra página ou fazer outras ações
    } else {
        alert("Credenciais inválidas. Tente novamente.");
    }
});
