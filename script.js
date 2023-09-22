


  document.getElementById("change-circle").addEventListener("click", function() {
    document.body.classList.add("fade-out"); // Aplica a classe que diminui a opacidade

    setTimeout(function() {
        window.location.href = "Quemsomos.html"; // Navega para a tela2.html após um atraso
    }, 500); // Tempo de atraso correspondente à duração da transição em milissegundos (0.5s)
});

// Adicione esse trecho de código se você quiser aplicar a transição ao carregar a página 2 também
if (window.location.href.includes("quemSomos.html")) {
    document.body.classList.add("fade-in"); // Aplica a classe que aumenta a opacidade
}

