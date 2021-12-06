const generateBtn = document.getElementById("generate");
const lengthInput = document.getElementById("length");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const resultDiv = document.getElementById("result");
const clipboard = document.getElementById("clipboard");

function getRandomLower(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper(){
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber(){
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol(){
    const symbols = "!@#$%^&*()_+-={}[];:,./<>?";
    return symbols[Math.floor(Math.random() * symbols.length)]
}

const randomFunction = {
    lower: getRandomLower,
    upper:getRandomUpper,
    number:getRandomNumber,
    Symbol:getRandomSymbol
}




