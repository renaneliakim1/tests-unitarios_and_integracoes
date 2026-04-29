class SistemaAlunos {
    calcularMedia(n1, n2, n3, n4) {
        if (
            typeof n1 !== 'number' || typeof n2 !== 'number' || 
            typeof n3 !== 'number' || typeof n4 !== 'number'
        ) {
            throw new TypeError("Todas as notas devem ser parâmetros numéricos.");
        }

        const notas = [n1, n2, n3, n4];
        for (let nota of notas) {
            if (nota < 0 || nota > 10) {
                throw new Error("As notas devem estar entre 0 e 10.");
            }
        }

        const media = (n1 + n2 + n3 + n4) / 4;
        return Number(media.toFixed(2));
    }

    verificarStatus(media) {
        if (typeof media !== 'number' || media < 0 || media > 10) {
            throw new Error("A média informada é inválida.");
        }

        if (media >= 7.0) {
            return "Aprovado";
        } else if (media >= 5.0) {
            return "Recuperação";
        } else {
            return "Reprovado";
        }
    }
}


module.exports = SistemaAlunos