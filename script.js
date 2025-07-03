
const divs = document.querySelectorAll('.block');
let appendCount = 0;

divs.forEach(div => {
    div.addEventListener('click', () => {
        const divvalue = div.innerHTML;
        // console.log(divvalue);
        setBgColorById(divvalue, '#1DD100')

        appendDivById(divvalue, 'appendchild');
        appendCount++;
        setTextById('selectedSeat', appendCount);
        const minusSeat = elementById('availableSeat');

        setTextById('availableSeat', minusSeat - 1);

        totalPriceCalculate();

    });
});
// discount price function
function discountPrice() {
    const inputValue = getInputValueById('couponNumber');
    if (inputValue === 'New15') {
        const totalPrice = elementById('totalPrice');
        const discount = totalPrice * 0.15;
        const grandTotal = totalPrice - discount;
        console.log(grandTotal);
        setTextById('grandTotal', grandTotal);
    }
    else if (inputValue === 'Couple20') {
        const totalPrice = elementById('totalPrice');
        const discount = totalPrice * 0.20;
        const grandTotal = totalPrice - discount;
        console.log(grandTotal);
        setTextById('grandTotal', grandTotal);
    }


}