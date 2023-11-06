'use strict';

// 1. The script will ask for the passenger's age and the length of their journey

const passengerAge = prompt('How old are you?');
const journeyLength = prompt('How long is your desired journey (in kilometers)?');

// 2. The strings will be converted to numbers using parseFloat()
// 3. The base price will be calculated by multiplying the length of the journey in kms times 0.21

const basePrice = parseFloat(journeyLength) * 0.21;

// 4. We'll introduce conditional discounts for passengers that are minors or over 65s

let finalPrice = basePrice;

if (passengerAge < 18) {
    finalPrice = basePrice * 0.8;
} else if (passengerAge >= 65) {
    finalPrice = basePrice * 0.6;
}