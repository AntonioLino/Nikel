const nome = "Antonio Bezerra";
let nome1 = "Antonio A. E. B. Lino";
let pessoa = {
    nome: "Antonio Lino",
    idade: "39",
    profissao: "Vendedor Técnico"
}

let nomes = ["Antonio Lino", "Ana Paula", "Daura Regina"];
let pessoas = [
    {
    nome: "Antonio Lino",
    idade: "39",
    profissao: "Vendedor Técnico"
    },
    {
        nome: "Ana Paula",
        idade: "34",
        profissao: "Aquiteta"
    }
];


function alterarNome() {
    nome1 = "Antonio Bezerra";
    console.log("Nome alterado:");
    console.log(nome1);
}

function receberAlterarNome (novonome){
    nome1 = novonome
    console.log("Nome alterado:");
    console.log(nome1);
}

function imprimirPessoa(pessoa){
    console.log("Nome:");
    console.log(pessoa.nome);
    console.log("Idade:");
    console.log(pessoa.idade);
    console.log("Profissão:");
    console.log(pessoa.profissao);
}

function adicionarPessoa (pessoa) {
    pessoas.push(pessoa);
}

function imprimirpessoas() {
    console.log("--------------------------------------------------------------------------------");
    pessoas.forEach((item) =>{
        console.log("Nome:");
        console.log(item.nome);
        console.log("Idade:");
        console.log(item.idade);
        console.log("Profissão:");
        console.log(item.profissao);
    });
}

imprimirpessoas();

adicionarPessoa({
    nome: "Joana Souza",
    idade: "24",
    profissao: "Modelo"
})

imprimirpessoas();