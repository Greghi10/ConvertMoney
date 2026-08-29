/**
 * SELEÇÃO DE ELEMENTOS GLOBAIS DA DOM
 * Mapeia os botões e seletores da tela para uso posterior nos eventos.
 */
const convertButton = document.querySelector(".convert-button")
const currencySelectFrom = document.querySelector(".currency-select-from")
const currencySelectTo = document.querySelector(".currency-select-to")

/**
 * Realiza o cálculo de conversão entre as moedas de origem e destino,
 * atualizando os valores formatados diretamente na tela.
 */
function convertValues() {
    // Captura os valores dos inputs e elementos onde os resultados serão exibidos
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Elemento do valor inserido
    const currencyValueConverted = document.querySelector(".currency-value")           // Elemento do valor convertido

    // Taxas de câmbio estáticas (Tendo o Real como moeda de referência base)
    const realToday = 1.0
    const dolarToday = 5.15
    const euroToday = 6.02
    const libraToday = 7.03

    // ---------------------------------------------------------------------------------
    // 1. PASSO: Descobrir quanto o valor digitado vale em Reais (Moeda de Origem)
    // ---------------------------------------------------------------------------------
    let valueInReal = 0

    // Se a moeda de origem for Real
    if (currencySelectFrom.value == "Real") {
        valueInReal = inputCurrencyValue * realToday
        // Formata o valor digitado no padrão monetário do Brasil (BRL)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    // Se a moeda de origem for Dólar
    if (currencySelectFrom.value == "Dolar") {
        valueInReal = inputCurrencyValue * dolarToday
        // Formata o valor digitado no padrão monetário dos EUA (USD)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    // Se a moeda de origem for Euro
    if (currencySelectFrom.value == "Euro") {
        valueInReal = inputCurrencyValue * euroToday
        // Formata o valor digitado no padrão monetário da Alemanha/Europa (EUR)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    // Se a moeda de origem for Libra
    if (currencySelectFrom.value == "Libra") {
        valueInReal = inputCurrencyValue * libraToday
        // Formata o valor digitado no padrão monetário do Reino Unido (GBP)
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    // ---------------------------------------------------------------------------------
    // 2. PASSO: Converter o valor base em Reais para a moeda selecionada (Moeda de Destino)
    // ---------------------------------------------------------------------------------
    
    // Converte de Real para Real
    if (currencySelectTo.value == "Real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInReal / realToday)
    }

    // Converte de Real para Dólar
    if (currencySelectTo.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInReal / dolarToday)
    }

    // Converte de Real para Euro
    if (currencySelectTo.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInReal / euroToday)
    }

    // Converte de Real para Libra
    if (currencySelectTo.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(valueInReal / libraToday)
    }
}

/**
 * Atualiza o nome textual e o ícone de imagem da moeda de DESTINO na interface,
 * e em seguida aciona a conversão dos valores.
 */
function changeCurrencyTo() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelectTo.value == "Real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/Real.png"
    }
    if (currencySelectTo.value == "Dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src = "./assets/Dolar.png"
    }
    if (currencySelectTo.value == "Euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelectTo.value == "Libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    // Recalcula os valores automaticamente após trocar a moeda de destino
    convertValues()
}

/**
 * Atualiza o nome textual e o ícone de imagem da moeda de ORIGEM na interface,
 * e em seguida aciona a conversão dos valores.
 */
function changeCurrencyFrom() {
    const currencyNameFrom = document.getElementById("currency-name-0")
    const currencyImageFrom = document.querySelector(".currency-img-0")

    if (currencySelectFrom.value == "Real") {
        currencyNameFrom.innerHTML = "Real"
        currencyImageFrom.src = "./assets/Real.png"
    }
    if (currencySelectFrom.value == "Dolar") {
        currencyNameFrom.innerHTML = "Dólar"
        currencyImageFrom.src = "./assets/Dolar.png"
    }
    if (currencySelectFrom.value == "Euro") {
        currencyNameFrom.innerHTML = "Euro"
        currencyImageFrom.src = "./assets/euro.png"
    }
    if (currencySelectFrom.value == "Libra") {
        currencyNameFrom.innerHTML = "Libra"
        currencyImageFrom.src = "./assets/libra.png"
    }

    // Recalcula os valores automaticamente após trocar a moeda de origem
    convertValues()
}

/**
 * REGISTRO DOS ESCUTADORES DE EVENTOS (EVENT LISTENERS)
 * Vincula as ações do usuário na página às funções correspondentes.
 */
// Clique no botão de converter
convertButton.addEventListener("click", convertValues)

// Alteração na seleção do select da moeda de destino
currencySelectTo.addEventListener("change", changeCurrencyTo)

// Alteração na seleção do select da moeda de origem
currencySelectFrom.addEventListener("change", changeCurrencyFrom)