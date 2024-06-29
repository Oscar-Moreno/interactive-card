// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';


const cardNumberElement = document.getElementById('card-number')
const cardNameElement = document.getElementById('card-name')
const cardMonthElement = document.getElementById('card-month')
const cardYearElement = document.getElementById('card-year')
const cardCvcElement = document.getElementById('card-cvc')

const nameElement = document.getElementById('name')
const numberElement = document.getElementById('number')
const monthElement = document.getElementById('month')
const yearElement = document.getElementById('year')
const cvcElement = document.getElementById('cvc')

const enterName = event =>{
    cardNameElement.textContent = nameElement.value 
    if(cardNameElement.textContent === ''){
        cardNameElement.textContent = 'JANE APLESSED'
    }
}
nameElement.addEventListener('input', enterName)



const enterNumber = event =>{
    cardNumberElement.textContent = numberElement.value
    if(cardNumberElement.textContent ===''){
        cardNumberElement.textContent = '0000 0000 0000 0000'
    }
}
numberElement.addEventListener('input', enterNumber)



const enterMonth = event =>{
    cardMonthElement.textContent = monthElement.value
    if(cardMonthElement.textContent === ''){
        cardMonthElement.textContent = ' 00'
    }
}
monthElement.addEventListener('input', enterMonth)



const enterYear = event =>{
    cardYearElement.textContent = yearElement.value
    if(cardYearElement.textContent === ''){
        cardYearElement.textContent = ' 00'
    }
}
yearElement.addEventListener('input', enterYear)




const enterCvc = event =>{
    cardCvcElement.textContent = cvcElement.value
    if(cardCvcElement.textContent==''){
        cardCvcElement.textContent = '000'
    }
}
cvcElement.addEventListener('input', enterCvc)