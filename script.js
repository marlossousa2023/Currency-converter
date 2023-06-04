const convertButton = document.querySelector(".convert-button")
const currencyToConvert = document.querySelector(".currency-to-convert")
const currencySelect = document.querySelector(".currency-select")
const currencyValueConverted = document.querySelector(".currency-value")


function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const realToDolar = 5.2
    const realToEuro = 6.2
    const realToLibra = 6.29
    const realToPeso = 0.021
    const dolarToReal = 5.2
    const dolarToEuro = 0.93
    const dolarToLibra = 0.80
    const dolarToPeso = 241.11
    const euroToReal = 6.2
    const euroToDolar = 0.93
    const euroToLibra = 0.86
    const euroToPeso = 258.58
    const libraToReal = 6.29
    const libraToDolar = 0.80
    const libraToEuro = 0.86
    const libraToPeso = 300.20
    const pesoToReal = 0.021
    const pesoToDolar = 241.11
    const pesoToEuro = 258.58
    const pesoToLibra = 300.20


    if (currencyToConvert.value == 'real-to-convert') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    }

    if (currencyToConvert.value == 'dolar-to-convert') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue)
    }


    if (currencyToConvert.value == 'euro-to-convert') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue)
    }

    if (currencyToConvert.value == 'libra-to-convert') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue)
    }

    if (currencyToConvert.value == 'peso-to-convert') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue)
    }

    if (currencyToConvert.value == "dolar-to-convert" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / dolarToReal)
    }


    if (currencyToConvert.value == "dolar-to-convert" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / dolarToEuro)
    }

    if (currencyToConvert.value == "dolar-to-convert" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / dolarToLibra)
    }

    if (currencyToConvert.value == "dolar-to-convert" && currencySelect.value == "peso-argentino") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / dolarToPeso)
    }

    if (currencyToConvert.value == "euro-to-convert" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / euroToReal)
    }

    if (currencyToConvert.value == "euro-to-convert" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / euroToDolar)
    }

    if (currencyToConvert.value == "euro-to-convert" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / euroToLibra)
    }

    if (currencyToConvert.value == "euro-to-convert" && currencySelect.value == "peso-argentino") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / euroToPeso)
    }

    if (currencyToConvert.value == "libra-to-convert" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / libraToReal)
    }

    if (currencyToConvert.value == "libra-to-convert" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / libraToDolar)
    }

    if (currencyToConvert.value == "libra-to-convert" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / libraToEuro)
    }

    if (currencyToConvert.value == "libra-to-convert" && currencySelect.value == "peso-argentino") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / libraToPeso)
    }

    if (currencyToConvert.value == "peso-to-convert" && currencySelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue / pesoToReal)
    }

    if (currencyToConvert.value == "peso-to-convert" && currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / pesoToDolar)
    }

    if (currencyToConvert.value == "peso-to-convert" && currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / pesoToEuro)
    }


    if (currencyToConvert.value == "peso-to-convert" && currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / pesoToLibra)
    }

    if (currencyToConvert.value == "real-to-convert" && currencySelect.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / realToDolar)
    }

    if (currencyToConvert.value == "real-to-convert" && currencySelect.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / realToEuro)
    }



    if (currencyToConvert.value == "real-to-convert" && currencySelect.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / realToLibra)
    }

    if (currencyToConvert.value == "real-to-convert" && currencySelect.value == "peso-argentino") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputCurrencyValue / realToPeso)
    }
}

function changeFirstCurrency() {
    const firstCurrency = document.querySelector("#first-currency")
    const changeFlag = document.querySelector("#change-flag")




    if (currencyToConvert.value == 'real-to-convert') {
        firstCurrency.innerHTML = "Real Brasileiro"
        changeFlag.src = "./assets/Real.png"
    }

    if (currencyToConvert.value == 'dolar-to-convert') {
        firstCurrency.innerHTML = "Dolar Americano"
        changeFlag.src = "./assets/Dolar.png"
    }

    if (currencyToConvert.value == 'euro-to-convert') {
        firstCurrency.innerHTML = "Euro"
        changeFlag.src = "./assets/Euro.png"
    }

    if (currencyToConvert.value == 'libra-to-convert') {
        firstCurrency.innerHTML = "Libra"
        changeFlag.src = "./assets/libra.png"
    }

    if (currencyToConvert.value == 'peso-to-convert') {
        firstCurrency.innerHTML = "Peso Argentino"
        changeFlag.src = "./assets/argentina.png"
    }


}

function secondChange(){

    const currencyName = document.querySelector(".currency-name")
    const currencyImage = document.querySelector("#second-currency")

if (currencySelect.value == 'real') {
    currencyName.innerHTML = "Real Brasileiro"
    currencyImage.src = "./assets/Real.png"
}

if (currencySelect.value == 'dolar') {
    currencyName.innerHTML = "Dolar Americano"
    currencyImage.src = "./assets/Dolar.png"
}

if (currencySelect.value == 'euro') {
    currencyName.innerHTML = 'euro'
    currencyImage.src = "./assets/Euro.png"
}


if (currencySelect.value == 'libra') {
    currencyName.innerHTML = "Libra"
    currencyImage.src = "./assets/libra.png"
}

if (currencySelect.value == 'peso-argentino') {
    currencyName.innerHTML = "Peso Argentino"
    currencyImage.src = "./assets/argentina.png"
}

convertValues()

}

convertButton.addEventListener('click', convertValues)
currencyToConvert.addEventListener('change', changeFirstCurrency)
currencySelect.addEventListener('change',secondChange)





