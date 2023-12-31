'use strict';

// 1. The script will ask for the passenger's age and the length of their journey

const passengerAge = prompt('How old are you?');
const journeyLength = prompt('How long is your desired journey (in kilometers)?');

// 2. The strings will be converted to numbers using parseFloat()
// 3. The base price will be calculated by multiplying the length of the journey in kms times 0.21

const basePrice = parseFloat(journeyLength) * 0.21;

// 4. We'll introduce conditional discounts for passengers that are minors or over 65s

let discountedPrice = basePrice;
const discountPercentageMinors = 20;
const discountPercentageElders = 40;

if (passengerAge < 18) {
    discountedPrice = basePrice - ((basePrice / 100) * discountPercentageMinors);
} else if (passengerAge >= 65) {
    discountedPrice = basePrice - ((basePrice / 100) * discountPercentageElders);
}

// 5. We'll limit the result to two decimal places by using toFixed(2)

const finalPrice = discountedPrice.toFixed(2);

// 6. We'll use Number.isFinite() to check whether our result is a finite number (excluding Infinity, -Infinity, and NaN)
// 7. If so, we are going to output the final price into the console and into the html document

if (Number.isFinite(discountedPrice)) {
    console.log(`The final price is ${finalPrice}€`);
    document.getElementById('price').innerHTML = `${finalPrice}€`;
} else {
    console.log('The script encountered an error. Please reload the page.');
    document.getElementById('price').innerHTML = 'Si è verificato un errore, riprova';
}