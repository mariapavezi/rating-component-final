const mainDiv = document.getElementById('main--div');
const hiddenDiv = document.getElementById('hidden--div');
const ratingNumbers = document.querySelectorAll('.number--circle'); // Pega todos os círculos de 1 a 5
const resultSpan = document.getElementById('result');
let selectedRating = 0; // Variável para armazenar a nota selecionada

//Função de Seleção de Rating (Cria o estado "ativo" no clique)
ratingNumbers.forEach(circle => {
    // Adiciona um 'ouvinte' de evento de clique para cada círculo
    circle.addEventListener('click', () => {
        
        // Remove a classe 'active' de TODOS os círculos primeiro
        ratingNumbers.forEach(c => c.classList.remove('active'));

        // Adiciona a classe 'active' APENAS ao círculo clicado
        circle.classList.add('active');
        
        // Pega o valor do número (que está dentro do <span>)
        // Usamos textContent pois você não colocou o atributo value no div, mas sim no span.
        const ratingValue = circle.querySelector('span').textContent; 
        selectedRating = parseInt(ratingValue); // Converte para número e armazena

    });
});

// Função de Submissão (Manipula a transição de tela)
// Esta função é chamada pelo onclick="thanks(event)" no botão Submit
function thanks(event) {
    event.preventDefault(); // Impede o comportamento padrão do botão (se estivesse em um form)

    // 1. VERIFICAÇÃO: Garante que o usuário selecionou uma nota
    if (selectedRating === 0) {
        alert("Por favor, selecione uma nota antes de submeter!");
        return; // Sai da função se nenhuma nota foi selecionada
    }

    // 2. EXIBIÇÃO DO RESULTADO: Insere a nota na tela de "Obrigado"
    resultSpan.textContent = selectedRating;

    // 3. TRANSIÇÃO DE TELA: Esconde a tela principal e mostra a tela de agradecimento
    mainDiv.classList.add('hidden'); // Esconde a tela de avaliação
    hiddenDiv.classList.remove('hidden'); // Mostra a tela de agradecimento
}