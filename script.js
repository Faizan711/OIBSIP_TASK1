const buttons = document.querySelectorAll('button');
const clear = document.getElementById('clear');
let screen = document.getElementById('screen');
let screenValue = '';

clear.addEventListener('click', (e)=>{
    document.getElementById('screen').value = "";
    
});
for(item of buttons){
    item.addEventListener('click', (e)=>{
        buttonText = e.target.innerText;

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}