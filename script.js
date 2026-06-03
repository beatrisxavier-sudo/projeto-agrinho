document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica do Simulador Sustentável ---
    const btnCalcular = document.getElementById('btn-calcular');
    const inputHectares = document.getElementById('hectares');
    const resultadoBox = document.getElementById('resultado');
    
    const aguaSpan = document.getElementById('agua-economizada');
    const co2Span = document.getElementById('co2-reduzido');

    btnCalcular.addEventListener('click', () => {
        const hectares = parseFloat(inputHectares.value);

        if (isNaN(hectares) || hectares <= 0) {
            alert('Por favor, insira um número válido de hectares.');
            return;
        }

        // Cálculos fictícios baseados em médias de tecnologia sustentável no campo
        // Ex: Economia de 12.000 litros de água por hectare/ano com irrigação inteligente
        // Ex: Redução de 450kg de CO2 por hectare/ano com manejo de solo correto
        const aguaEconomizada = hectares * 12000;
        const co2Reduzido = hectares * 450;

        // Atualiza os valores na tela com formatação numérica local
        aguaSpan.textContent = aguaEconomizada.toLocaleString('pt-BR');
        co2Span.textContent = co2Reduzido.toLocaleString('pt-BR');

        // Exibe a caixa de resultados removendo a classe 'hidden'
        resultadoBox.classList.remove('hidden');
    });

    // --- Menu Mobile Básico ---
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Caso queira expandir o menu no mobile, pode alternar uma classe aqui
            alert('Funcionalidade de Menu responsivo ativada! Em telas menores você pode customizar a abertura do menu aqui.');
        });
    }
});
