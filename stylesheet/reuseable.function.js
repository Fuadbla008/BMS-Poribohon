function setTextById(id, data){
    const text = document.getElementById(id);
    text.innerText = data;
}

function setBgColorById(id, color){
    const element = document.getElementById(id);
    element.style.backgroundColor = color;
}

function appendDivById(id, idForContainer) {
    const newDiv = document.createElement('div');
    newDiv.className = 'flex-between';
    // newDiv.className += 'appendPrice';

    const span1 = document.createElement('span');
    span1.textContent = id;

    const span2 = document.createElement('span');
    span2.textContent = 'economy';
    const span3 = document.createElement('span');
    span3.textContent = '550';
    span3.className = 'appendPrice';

    newDiv.appendChild(span1);
    newDiv.appendChild(span2);
    newDiv.appendChild(span3);

    document.getElementById(idForContainer).appendChild(newDiv);

}

function totalPriceCalculate() {
    const price = document.querySelectorAll('.appendPrice');
    let totalPrice = 0;
    price.forEach(price => {
        totalPrice += parseInt(price.innerText);
        console.log(totalPrice);

        const setTotalPrice = document.getElementById('totalPrice');
        setTotalPrice.innerText = totalPrice;
        const setGrandTotal = document.getElementById('grandTotal');
        setGrandTotal.innerText = totalPrice;
    });
}
