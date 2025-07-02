
const divs = document.querySelectorAll('.block');

divs.forEach(div => {
    div.addEventListener('click', () => {
        const divvalue = div.innerHTML;
        console.log(divvalue);
        setBgColorById(divvalue, '#1DD100')

        appendDivById(divvalue, 'appendchild');

        const price = document.querySelectorAll('.appendPrice');
        price.forEach(price => {
            // Assuming the price is in the third span of each div
            const ticketPrice =parseInt(price.innerHTML);
            console.log(ticketPrice);
        });
    });
});

