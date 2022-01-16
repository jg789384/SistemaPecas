// Váriaveis, são um espaço na memória para guardar algum valor
let pesoPeca = 50

// pesoPeca - Camel Case
// peso_peca - Snake Case
// PesoPeca - Pescal Case

if(pesoPeca > 100) {
    console.log("Peso maior de 100g, logo, podemos cadastrar a peça")
    } else {
        console.log("Peso insuficiente, não é possível cadastrar")
    }

    let numeroPecas = 10

    if(numeroPecas < 10) { 
        console.log ("Ainda há espaço na caixa, podemos cadastrar a peça")
    } else {
        console.log ("Não há espaço disponível na caixa")
    }


    let nomePeca = "Disco"

    // ASCII Table

    console.log("O comprimento do nome da peça é:", nomePeca.length)

    if(nomePeca.length < 3) {
        console.log("Nome de peça muito curto, não é possível cadastrar")
    } else {
        console.log ("Nome de peça adequado, podemos cadastrar")
    }