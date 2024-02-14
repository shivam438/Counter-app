let counter = 99999;

const DISPLAY = document.getElementById('display');
const error_msg = document.getElementById('alert');
const high_error = 'Out of memory';
const low_error = 'Zero is the low limit';
 
function updateDisplay(){
    const spanElements = DISPLAY.children;
    let numberToString = counter.toString().padStart(4,0);
    for(let i = 0; i < numberToString.length; i++) {
        spanElements.item(i).innerText = numberToString[i];
    }
}

function increment(){
    const boxCount = DISPLAY.children.length;
    counter++;
    if(counter.toString().length === 5 && boxCount === 4) {
        addBox();
    } else if(counter.toString().length === 6 && boxCount === 5) {
        addBox();
    }else if(counter.toString().length > 6) {
        error_msg.innerText = high_error;
        return;
    }
    error_msg.innerText = '';
    
    updateDisplay();
}



function addBox() {
    const SPAN = document.createElement('span');
    SPAN.classList.add('box');
    SPAN.innerText = 0;
    DISPLAY.append(SPAN);
}

function decrement(){
    if(counter === 0) {
        error_msg.innerText = low_error;
        return
    };
    counter--;
    updateDisplay();
}

function reset(){
    counter =0;
    updateDisplay();
}

function addPaddingAtStart(originalString, desiredLength, paddingCharacter) {
    const originalStringLength = originalString.length;
    const remainingSpace = desiredLength - originalStringLength;
    if(remainingSpace > 0) {
        let newString = originalString;
        for(let i=0; i < remainingSpace; i++) {
            newString = paddingCharacter + newString;
        }
        return newString
    }
    return originalString;
}

updateDisplay();