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
    symbol:getRandomSymbol
}

function generatePassword(length, isNumber, isUpper, isSymbol, islower){
   
    var generatedPassword = "";
    const passwordType = [{isNumber}, {isUpper}, {islower}, {isSymbol}].filter(item => Object.values(item)[0]);
    console.log(passwordType);
    

    if(length == 0){
        
        return generatedPassword;
    }else{
    
        for(let i=0; i<length; i++){
console.log("hhhhhhhhhhh")
            funcArr.map(funcType => {
                console.log(funcType)
            })

            // generatedPassword += randomFunction.upper() + randomFunction.lower() + randomFunction.number() + randomFunction.symbol();
        }
    }
    console.log(generatedPassword)
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
