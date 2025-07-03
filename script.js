
const divs = document.querySelectorAll('.block');
let appendCount = 0;

divs.forEach(div => {
    div.addEventListener('click', () => {
        if (div.classList.contains('sel')) {
            // Deselect
            div.classList.remove('sel');
            setBgColorById(div.innerHTML, ''); // Optional: reset color
            appendCount--;
            setTextById('selectedSeat', appendCount);
            const minusSeat = elementById('availableSeat');
            setTextById('availableSeat', minusSeat + 1);
            // Optional: remove from appended list if needed
            removeLastChild('.flex-between'); // Assuming you want to remove the last appended child

            // minusTotalPrice();
        } else {
            // Select
            div.classList.add('sel');
            setBgColorById(div.innerHTML, '#1DD100');
            appendDivById(div.innerHTML, 'appendchild');
            appendCount++;
            setTextById('selectedSeat', appendCount);
            const minusSeat = elementById('availableSeat');
            setTextById('availableSeat', minusSeat - 1);

            totalPriceCalculate();
        }
    });
});

// divs.forEach(div => {
//     div.addEventListener('click', () => {
//         if (div.classList.contains('sel')) {
//             return; // Already selected, do nothing
//         }
//          div.classList.add('sel');

//         const divvalue = div.innerHTML;
//         // console.log(divvalue);
//         setBgColorById(divvalue, '#1DD100')

//         appendDivById(divvalue, 'appendchild');
//         appendCount++;
//         setTextById('selectedSeat', appendCount);
//         const minusSeat = elementById('availableSeat');

//         setTextById('availableSeat', minusSeat - 1);

//         totalPriceCalculate();

//     });
// });


// discount price function
function discountPrice() {
    const inputValue = getInputValueById('couponNumber');
    let countTicket = elementById('selectedSeat');

    if (inputValue === 'New15') {
        const totalPrice = elementById('totalPrice');
        const discount = totalPrice * 0.15;
        const grandTotal = totalPrice - discount;
        // console.log(grandTotal);
        setTextById('grandTotal', grandTotal);
    }

    else if (inputValue === 'Couple20' && countTicket >= 2) {
        const totalPrice = elementById('totalPrice');
        const discount = totalPrice * 0.20;
        const grandTotal = totalPrice - discount;
        // console.log(grandTotal);
        setTextById('grandTotal', grandTotal);
    }
    else {
        alert('Invalid coupon code or not enough tickets selected for discount.');
    }

}

// submit button function
function submitButton() {
    const modalSection = document.querySelector('.modal-section');
    modalSection.classList.remove('hidden');

}