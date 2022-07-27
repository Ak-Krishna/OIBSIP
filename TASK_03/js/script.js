const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertButton = document.querySelector('.convertButton');
const resetButton = document.querySelector('.resetButton');
const changeButton = document.querySelector('.changeButton');
const C = document.querySelector('.C')
const F = document.querySelector('.F')

var white='#ffffff';
const swap = () => {
    if (C.innerHTML === '°C') {
        C.innerHTML = '°F';
        F.innerHTML = '°C';
        document.title = "Converter °F to °C";
        converter.placeholder = "°F";

    } else {
        F.innerHTML = '°F';
        C.innerHTML = '°C';
        document.title = "Converter °C to °F";
        converter.placeholder = "°C";
    };
};

const reset = () => {
    converter.value = '';
    result.innerHTML = '';
}
const ChangeColor = () => {
  console.log("chnge color clicc");
  document.body.style.backgroundColor =white;;
  document.body.button.style.color="#111";
  document.body.style.color="#111";
};
const convert = () => {
    if (/^(-?)(\d+)(\.{1}\d+)?$/.test(converter.value)) {
        result.style.color = "yellow"
        if (C.innerHTML === '°C') {
            let value = (converter.value * 1.8) + 32;
            result.innerHTML = `${converter.value}°C to ${value.toFixed(2)}°F`;
        } else {
            let value = (converter.value - 32) / 1.8;
            result.innerHTML = `${converter.value}°F to ${value.toFixed(2)}°C`;
        }
    } else if (converter.value == '') {
        result.style.color = "#993300"
        result.innerHTML = 'Write correct value!';
    } else {
        result.style.color = "#993300"
        result.innerHTML = 'Wrong value!';
    }
}

changeButton.addEventListener('click', swap);
resetButton.addEventListener('click', reset);
convertButton.addEventListener('click', convert);