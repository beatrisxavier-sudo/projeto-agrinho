// Tema: Agro forte, futuro sustentável
// Equilíbrio entre produção e meio ambiente

const agro = {
    producaoToneladas: 1250,
    areaPreservadaHectares: 320,
    consumoAguaLitros: 45000,
    energiaRenovavel: true
};

function mostrarRelatorio() {
    console.log("🌱 AGRO FORTE, FUTURO SUSTENTÁVEL 🌱");
    console.log("----------------------------------");
    console.log(`Produção agrícola: ${agro.producaoToneladas} toneladas`);
    console.log(`Área preservada: ${agro.areaPreservadaHectares} hectares`);
    console.log(`Consumo de água: ${agro.consumoAguaLitros.toLocaleString()} litros`);
    
    if (agro.energiaRenovavel) {
        console.log("☀️ Utiliza energia renovável.");
    } else {
        console.log("⚡ Utiliza energia convencional.");
    }

    console.log("\nProduzir mais e preservar melhor é o caminho para um futuro sustentável.");
}

mostrarRelatorio();
