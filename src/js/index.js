// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';


const cardNumberElement = document.getElementById('card-number')
const cardNameElement = document.getElementById('card-name')
const cardDateElement = document.getElementById('card-date')
const cardCvcElement = document.getElementById('card-cvc')

const nameElement = document.getElementById('name')
const numberElement = document.getElementById('name')
const monthElement = document.getElementById('month')
const yearElement = document.getAnimations('year')

const enterName = event =>{
    cardNameElement.textContent = nameElement.value 
    if(cardNameElement.textContent === ''){
        cardNameElement.value = 'JANE APLESSED'
    }
}
nameElement.addEventListener('input',enterName)