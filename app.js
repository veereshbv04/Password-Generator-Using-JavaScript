const generatePasswordBtn = document.getElementById("generate");
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

function generatePassword(length, isNumber, isUpper, isSymbol, islower){

    var generatedPassword = "";

    if(length == 0){
        console.log("o")
        return generatedPassword;
    }else{
        
    }
}

function getAllUserInput(){
    const length = lengthInput.value;
    const isUpper = uppercaseInput.checked;
    const islower = lowercaseInput.checked;
    const isNumber = numbersInput.checked;
    const isSymbol = symbolsInput.checked;

    generatePassword(length, isNumber, isUpper, isSymbol, islower);
}

generatePasswordBtn.addEventListener("click", getAllUserInput);
