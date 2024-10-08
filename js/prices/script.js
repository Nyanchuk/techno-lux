const basePriceRoof = 2000;
const basePriceFacade = 3300;
const basePriceFinish = 650;

const slider = document.getElementById('slider');
const sliderValue = document.getElementById('sliderValue');
const roofPrice = document.getElementById('roofPrice');
const facadePrice = document.getElementById('facadePrice');
const finishPrice = document.getElementById('finishPrice');

slider.value = 1; 
sliderValue.textContent = slider.value;

function calculatePrice(basePrice, value) {
    return basePrice * value;
}

function updatePrices() {
    const value = +slider.value;
    sliderValue.textContent = value;
    
    roofPrice.textContent = `от ${calculatePrice(basePriceRoof, value)} руб`;
    facadePrice.textContent = `от ${calculatePrice(basePriceFacade, value)} руб`;
    finishPrice.textContent = `от ${calculatePrice(basePriceFinish, value)} руб`;

    slider.style.background = `linear-gradient(to right, #56d270 1%, #56d270 ${value}%, rgb(232, 232, 232) ${value}%, rgb(232, 232, 232) 100%)`;
}

slider.addEventListener('input', updatePrices);

updatePrices();