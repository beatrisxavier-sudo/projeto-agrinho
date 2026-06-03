document.addEventListener('DOMContentLoaded', () => {
    
    // --- Lógica do Simulador AgroTech Sustentável ---
    const btnCalcular = document.getElementById('btn-calcular');
    const inputHectares = document.getElementById('hectares');
    const resultadoBox = document.getElementById('resultado');
    
    const aguaSpan = document.getElementById('agua-economizada');
    const co2Span = document.getElementById('co2-reduzido');

    // DICA AGRINHO 2026: Executa o cálculo ao clicar no botão
    btnCalcular.addEventListener('click', () => {
        const hectares = parseFloat(inputHectares.value);

        if (isNaN(hectares) || hectares <= 0) {
            alert('Por favor, insira um número válido de hectares para calcular o impacto.');
            return;
        }

        // Métricas atualizadas para a realidade da Agricultura 5.0:
        // 1. Economia de 15.000 litros de água/ano por hectare com sensores IoT e gotejamento de precisão.
        // 2. Retenção/Redução de 520kg de CO₂ equivalente/ano por hectare com Plantio Direto e ILPF.
        const aguaEconomizada = hectares * 15000;
        const co2Reduzido = hectares * 520;

        // Animação suave nos números (Rolagem rápida de 0 até o valor real)
        animarValor(aguaSpan, 0, aguaEconomizada, 1000);
        animarValor(co2Span, 0, co2Reduzido, 1000);

        // Exibe a caixa de resultados removendo a classe 'hidden'
        resultadoBox.classList.remove('hidden');
    });

    // --- Função Auxiliar: Animação de Números (Diferencial para os Jurados) ---
    function animarValor(elemento, inicio, fim, duracao) {
        let inicioTempo = null;

        const passo = (timestamp) => {
            if (!inicioTempo) inicioTempo = timestamp;
            const progresso = Math.min((timestamp - inicioTempo) / duracao, 1);
            const valorAtual = Math.floor(prog
