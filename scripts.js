const convertButton = document.querySelector(".convert-button")
const currencySelectFrom = document.querySelector(".currency-select-from")
const currencySelectTo = document.querySelector(".currency-select-to")

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor inserido
    const currencyValueConverted = document.querySelector(".currency-value") // valor convertido

    const realToday = 1.0
    const dolarToday = 5.15
    const euroToday = 6.02
    const libraToday = 7.03

    // 1. PASSO: Descobrir quanto o valor digitado vale em Reais (Moeda de Origem)
    let valueInReal = 0

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

    // 2. PASSO: Converter o valor em Reais para a moeda selecionada (Moeda de Destino)
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

// Atualiza nome e imagem da moeda de DESTINO
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

// Atualiza nome e imagem da moeda de ORIGEM
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

// Ouvintes de eventos
convertButton.addEventListener("click", convertValues)
currencySelectTo.addEventListener("change", changeCurrencyTo)
currencySelectFrom.addEventListener("change", changeCurrencyFrom)