
const divs = document.querySelectorAll('.block');

  divs.forEach(div => {
    div.addEventListener('click', () => {
      const divvalue = div.innerHTML;
    //   console.log(divvalue);
    return divvalue;
    });
  });

console.log(divvalue);