/*
TODO: 
    typing new number after = , still saved the last result, only save of typing an
    operator
    
    keypress functionality

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
        //console.log('2 zeichen');       
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
    // console.log(first);
    // console.log(second1);
    // console.log(operator);
    if (lastOperator == '=') {
        onScreenExp = result.toString();
        remove_children(results);
        remove_children(typed);
        
    } else {
        onScreenExp = result.toString() + lastOperator;
        //console.log('bei andern:' + onScreenExp);
        remove_children(results);
        remove_children(typed);
        typed.appendChild(m);
        let lastop = document.createElement('span')
        lastop.textContent = lastOperator;
        typed.appendChild(lastop);
    }
    
    results.appendChild(m);
    console.log('Last: ' + onScreenExp);
    console.log(result);
    
}
function checking(number){
    let regex = /^[\-]?\d+(\.\d+)?[\+\-\*\/]{1}[\+\-]?\d+(\.\d+)?[\+\-\*\/\=]{1}$/

    let isNum = /\d/;
    let isOp = /[\+\-\*\/]/;


    let p = document.createElement('span');
    p.textContent = number;
    typed.appendChild(p);
    console.log('Len: ' + onScreenExp.length);
    console.log(results.hasChildNodes() + ' ' + typed.hasChildNodes());
    if((onScreenExp.length == 0)){
        onScreenExp = number.toString();
    }
    else if ((typed.hasChildNodes() == true) && (results.hasChildNodes() == true)) {
        console.log('hierher');
        onScreenExp = number.toString();
    }
    else{
        onScreenExp += number.toString();
    }
    //|| i 
    console.log(onScreenExp);

    if (regex.test(onScreenExp)) {
        let lastOperator = onScreenExp.slice(-1);
        //console.log(lastOperator);
        seperate(onScreenExp.slice(0,-1),lastOperator);
    } else {
        console.log('not valid')
    }
}


// function textAppear(number){
//     let p = document.createElement('span');
//     p.textContent = number;
//     typed.appendChild(p);
//     onScreenExp += number.toString();
//     console.log(onScreenExp);
// }

let onScreenExp = '';
//console.log(onScreenExp);

btn1.addEventListener('click',function(){checking(1)})
btn2.addEventListener('click',function(){//textAppear(2);
    checking(2)})
btn3.addEventListener('click',function(){checking(3)})
btn4.addEventListener('click',function(){checking(4)})
btn5.addEventListener('click',function(){checking(5)})
btn6.addEventListener('click',function(){checking(6)})
btn7.addEventListener('click',function(){checking(7)})
btn8.addEventListener('click',function(){checking(8)})
btn9.addEventListener('click',function(){checking(9)})
btn0.addEventListener('click',function(){checking(0)})
btndot.addEventListener('click',function(){checking('.')})


btnplus.addEventListener('click',function(){//textAppear('+');
checking('+')})
btnminus.addEventListener('click',function(){//textAppear('-');
checking('-')})
btnmul.addEventListener('click',function(){checking('*')})
btndiv.addEventListener('click',function(){checking('/')})
btnresult.addEventListener('click',function(){//textAppear('=');
checking('=')})
