/*
TODO: 
    
    design
*/

function calculate(val1,val2,operator){
    let result = 0;

    switch (operator) {
        case ('+'):
            result = val1 + val2;
            break;

        case ('-'):
            result = val1 - val2;
            break;

        case ('*'):
            result = val1 * val2;
            break;

        case ('/'):
            result = val1 / val2;
            break;
    
        default:
            console.log('whooops');
            break;
    }

    return result;
}

function remove_children(parent) {
    while(parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function seperate(value,lastOperator){
    
    let result = 0;
    let operator = '';

    let firstnum = /^[\-]?\d+(\.\d+)?[\+\-\*\/]{1}/;
    let first = Number(value.match(firstnum)[0].slice(0,-1));

    let secondnum = /[\+\-\*\/]{1}[\+\-]?\d+(\.\d+)?$/;
    let second = value.match(secondnum)[0];
    let second1 = 0;

    let checkbegin = /^[\+\-\*\/]{1}[\-\+]/;

    if (checkbegin.test(second) == true) {
        operator = second.slice(0,1);
        second1 = Number(second.slice(1));
        result = calculate(first,second1,operator);
    }
    else{
        second1 = Number(second.slice(1));
        operator = second.slice(0,1);
        result = calculate(first,second1,operator);
    }

    let m = document.createElement('span');
    m.textContent = result;
    
    if (lastOperator == '=') {
        onScreenExp = result.toString();
        remove_children(results);
        remove_children(typed);
        
    } else {
        onScreenExp = result.toString() + lastOperator;
        remove_children(results);
        remove_children(typed);
        typed.appendChild(m);
        let lastop = document.createElement('span')
        lastop.textContent = lastOperator;
        typed.appendChild(lastop);
    }
    
    results.appendChild(m);    
}


function checking(number){
    let regex = /^[\-]?\d+(\.\d+)?[\+\-\*\/]{1}[\+\-]?\d+(\.\d+)?[\+\-\*\/\=]{1}$/
    let errorText = 'No valid math expression';
    let p = document.createElement('span');
    p.textContent = number;
    remove_children(error);
    

    if((onScreenExp.length == 0)){
        onScreenExp = number.toString();
        
    }
    else if ((typed.hasChildNodes() == false) && (results.hasChildNodes() == true) && (typeof number) == 'number') 
    {
        remove_children(results);
        onScreenExp = number.toString();
    }
    else{
        typed.appendChild(p);
        onScreenExp += number.toString();
    }
    typed.appendChild(p);

    if (regex.test(onScreenExp)) {
        let lastOperator = onScreenExp.slice(-1);
        seperate(onScreenExp.slice(0,-1),lastOperator);
    }
    else if ((number == '=') && !regex.test(onScreenExp)) {
        
        remove_children(typed);
        remove_children(results);
        p.textContent = errorText;
        error.appendChild(p);
        onScreenExp = '';

    }
    else {
        //console.log('not valid')
    }
}
function deleteLast(){
    typed.removeChild(typed.lastChild);
    console.log(typed);
    onScreenExp = onScreenExp.slice(0,-1);
    console.log(onScreenExp);

}

function deleteAll(){
    remove_children(results);
    remove_children(typed);
    onScreenExp = '';
}

let onScreenExp = '';

btn1.addEventListener('click',function(){checking(1)})
btn2.addEventListener('click',function(){checking(2)})
btn3.addEventListener('click',function(){checking(3)})
btn4.addEventListener('click',function(){checking(4)})
btn5.addEventListener('click',function(){checking(5)})
btn6.addEventListener('click',function(){checking(6)})
btn7.addEventListener('click',function(){checking(7)})
btn8.addEventListener('click',function(){checking(8)})
btn9.addEventListener('click',function(){checking(9)})
btn0.addEventListener('click',function(){checking(0)})
btndot.addEventListener('click',function(){checking('.')})
btnplus.addEventListener('click',function(){checking('+')})
btnminus.addEventListener('click',function(){checking('-')})
btnmul.addEventListener('click',function(){checking('*')})
btndiv.addEventListener('click',function(){checking('/')})
btnresult.addEventListener('click',function(){checking('=')})

btnDeleteAll.addEventListener('click',function(){deleteAll()});

btnDelete.addEventListener('click',function(){deleteLast()})

window.addEventListener('keydown', function(event){
    switch (event.key) {
        case '1':
            checking(1);
            break;
        case '2':
            checking(2);
            break;
        case '3':
            checking(3);
            break;
        case '4':
            checking(4);
            break;
        case '5':
            checking(5);
            break;
        case '6':
            checking(6);
            break;
        case '7':
            checking(7);
            break;
        case '8':
            checking(8);
            break;
        case '9':
            checking(9);
            break;
        case '0':
            checking(0);
            break;
        case '.':
            checking('.');
            break;
        case '+':
            checking('+');
            break;
        case '-':
            checking('-');
            break;
        case '*':
            checking('*');
            break;
        case '/':
            checking('/');
            break;
        case 'Enter':
            checking('=');
            break;
        default:
            break;
    }
})