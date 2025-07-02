
const divs = document.querySelectorAll('.block');

divs.forEach(div => {
    div.addEventListener('click', () => {
        const divvalue = div.innerHTML;
        // console.log(divvalue);
        setBgColorById(divvalue, '#1DD100')

        appendDivById(divvalue, 'appendchild');

        totalPriceCalculate();
        
    });
});

