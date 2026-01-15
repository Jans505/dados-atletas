class Atleta {
    constructor(nome, idade, peso, altura, notas) {
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.notas = notas;
    }

    calculaCategoria() {
        if (this.idade >= 9 && this.idade <= 11) return "Infantil";
        if (this.idade >= 12 && this.idade <= 13) return "Juvenil";
        if (this.idade >= 14 && this.idade <= 15) return "Intermediário";
        if (this.idade >= 16 && this.idade <= 30) return "Adulto";
        return "Sem categoria";
    }

    calculaIMC() {
        return this.peso / (this.altura * this.altura);
    }

    calculaMediaValida() {
        let notasOrdenadas = this.notas.slice().sort((a, b) => a - b);
        let notasComputadas = notasOrdenadas.slice(1, 4);
        let soma = notasComputadas.reduce((total, atual) => total + atual, 0);
        return soma / notasComputadas.length;
    }

    obtemNomeAtleta() { return this.nome; }
    obtemIdadeAtleta() { return this.idade; }
    obtemPesoAtleta() { return this.peso; }
    obtemNotasAtleta() { return this.notas.join(", "); }
    obtemCategoria() { return this.calculaCategoria(); }
    obtemIMC() { return this.calculaIMC(); }
    obtemMediaValida() { return this.calculaMediaValida(); }

    exibirResultado() {
        console.log(`Nome: ${this.obtemNomeAtleta()}`);
        console.log(`Idade: ${this.obtemIdadeAtleta()}`);
        console.log(`Peso: ${this.obtemPesoAtleta()}`);
        console.log(`Altura: ${this.altura}`);
        console.log(`Notas: ${this.obtemNotasAtleta()}`);
        console.log(`Categoria: ${this.obtemCategoria()}`);
        console.log(`IMC: ${this.obtemIMC()}`);
        console.log(`Média válida: ${this.obtemMediaValida()}`);
        console.log("----------------------------");
    }
}

let atletas = [
    { nome: "Cesar Abascal", idade: 30, peso: 80, altura: 1.50, notas: [10, 9.34, 8.42, 10, 7.88] },
    { nome: "Fernando Puntel", idade: 52, peso: 70, altura: 1.70, notas: [8, 10, 10, 7, 9.33] },
    { nome: "Daiane Jelinsky", idade: 12, peso: 40, altura: 1.50, notas: [7, 10, 9.5, 9.5, 8] },
    { nome: "Bruno Castro", idade: 15, peso: 50, altura: 1.65, notas: [10, 10, 10, 9, 9.5] }
];

atletas.forEach(dadosAtleta => {
    let objetoAtleta = new Atleta(
        dadosAtleta.nome, 
        dadosAtleta.idade, 
        dadosAtleta.peso, 
        dadosAtleta.altura, 
        dadosAtleta.notas
    );

    objetoAtleta.exibirResultado();
});
