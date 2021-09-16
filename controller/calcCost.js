// Definição do custo estipulado em contrato
const custoEstip = 1000

// Definição do custo dos ultimos 3 meses
let custoMes1 = 900
let custoMes2 = 950
let custoMes3 = 880

// Pegando a médida desse tempo
let mediaCusto = (custoMes1 + custoMes2 + custoMes3) / 3

console.log(`A média do custo dos meses é de R$${mediaCusto}`)

// Verificando se a média está acima do custo estipulado em até 5%
if (mediaCusto > custoEstip + (custoEstip*0.05)) {
    console.log('Status da conta: Acima do valor!')
} else {
    console.log('Status da conta: Entre o valor permitido!')
}
