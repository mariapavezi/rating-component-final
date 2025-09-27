// VARIÁVEIS GLOBAIS
const mainDiv = document.getElementById('main--div');
const hiddenDiv = document.getElementById('hidden--div');
const ratingNumbers = document.querySelectorAll('.number--circle'); 
const resultSpan = document.getElementById('result');
let selectedRating = 0; 

// Lógica de Seleção de Rating (Cliques nos números)
ratingNumbers.forEach(circle => {
    
    circle.addEventListener('click', () => {
        
        // Remove a classe 'active' de TODOS os círculos
        ratingNumbers.forEach(c => c.classList.remove('active'));

        // Adiciona a classe 'active' APENAS ao círculo clicado
        circle.classList.add('active');
        
        // *** CORREÇÃO APLICADA AQUI: Pega o textContent do *primeiro filho* (o span)
        // Isso garante que ele pegue o valor do número (1, 2, 3, 4 ou 5)
        const ratingValue = circle.firstElementChild.textContent;
        selectedRating = parseInt(ratingValue);

    });
});

// Lógica de Submissão (Chamada pelo onclick="thanks(event)" no HTML)
function thanks(event) {
    event.preventDefault(); 

    // 1. VERIFICAÇÃO: Garante que o usuário selecionou uma nota
    if (selectedRating === 0) {
        alert("Por favor, selecione uma nota antes de submeter!");
        return; 
    }

    // 2. EXIBIÇÃO DO RESULTADO: Insere a nota na tela de "Obrigado"
    resultSpan.textContent = selectedRating;

    // 3. TRANSIÇÃO DE TELA
    mainDiv.classList.add('hidden'); // Esconde a tela de avaliação
    hiddenDiv.classList.remove('hidden'); // Mostra a tela de agradecimento
}
