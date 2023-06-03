const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

console.log(convertButton)

function convertValues(){
    {
        const inputCurrencyValue = document.querySelector(".input-currency").value
        const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
        const currencyValueConverted = document.querySelector(".currency-value")
    
        const dolarToday = 5.2
        const euroToday = 6.2
        const libraToday = 6.29
        const pesoArgentinoToday = 0.021
        
       
        if (currencySelect.value == 'dolar') {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue / dolarToday)
        }
    
        if (currencySelect.value == 'euro') {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue / euroToday)
        }
    
        if (currencySelect.value == 'libra') {
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday)
    
        }
    
        if (currencySelect.value == 'peso-argentino') {
            currencyValueConverted.innerHTML = new Intl.NumberFormat('es-ar', {
                style: 'currency',
                currency: 'ARS'
            }).format(inputCurrencyValue / pesoArgentinoToday)
        }
    
    
        currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
    
    
    
        }
}


function changeCurrency(){
    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if(currencySelect.value == "dolar"){
        currencyName.innerHTML = "Dólar Americano"
        currencyImage.src = "./assets/Dolar.png"
    }

    if(currencySelect.value == "euro"){
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/Euro.png"
    }

    if(currencySelect.value == "libra"){
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if(currencySelect.value == "peso-argentino"){
        currencyName.innerHTML = "Peso Argentino"
        currencyImage.src = "./assets/argentina.png"
    }
    
    convertValues()

}

currencySelect.addEventListener('change',changeCurrency)
convertButton.addEventListener('click', convertValues )
