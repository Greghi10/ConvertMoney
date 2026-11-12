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
const convertValues = async () => {
    // Captura o valor do input convertendo para número (padrão 0 se estiver vazio)
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value) || 0
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // Elemento do valor inserido
    const currencyValueConverted = document.querySelector(".currency-value")             // Elemento do valor convertido

    // Busca as cotações atuais em tempo real da API
    const data = await fetch('https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,GBP-BRL').then(response => response.json())
    
    const realToday = 1.0
    const dolarToday = Number(data.USDBRL.bid)
    const euroToday = Number(data.EURBRL.bid)
    const libraToday = Number(data.GBPBRL ? data.GBPBRL.bid : 7.03) // Caso a API não retorne GBP, usa um fallback

    let valueInReal = 0

    // ---------------------------------------------------------------------------------
    // 1. PASSO: Descobrir quanto o valor digitado vale em Reais (Moeda de Origem)
    // ---------------------------------------------------------------------------------
    if (currencySelectFrom.value == "Real") {
        valueInReal = inputCurrencyValue * realToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "Dolar") {
        valueInReal = inputCurrencyValue * dolarToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "Euro") {
        valueInReal = inputCurrencyValue * euroToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencySelectFrom.value == "Libra") {
        valueInReal = inputCurrencyValue * libraToday
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    // ---------------------------------------------------------------------------------
    // 2. PASSO: Converter o valor base em Reais para a moeda selecionada (Moeda de Destino)
    // ---------------------------------------------------------------------------------
    if (currencySelectTo.value == "Real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(valueInReal / realToday)
    }

    if (currencySelectTo.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(valueInReal / dolarToday)
    }

    if (currencySelectTo.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(valueInReal / euroToday)
    }

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

    convertValues()
}

// REGISTRO DOS ESCUTADORES DE EVENTOS (EVENT LISTENERS)
convertButton.addEventListener("click", convertValues)
currencySelectTo.addEventListener("change", changeCurrencyTo)
currencySelectFrom.addEventListener("change", changeCurrencyFrom)