//regex:
// while string regex is not 'number operator number =' or 'number operator number operator'
//     if operator && string is empty
//         hint: type number first pls
//         break;
//     if number && string is empty
//         string += number;
//     else
//         string += number/operator


// if string regex 'number operator number ='
//     remove = 
//     result = calculate num op num
//     string = result;
// else (number operator number operator)
//     tmp =  operator 
//     result = calculate num op num
//     string = result operator;

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
function seperate(value){
    
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


    // console.log(first);
    // console.log(second1);
    // console.log(operator);

    console.log(result);
    
}

let onScreenExp = '-3.5--3=';

let regex = /^[\-]?\d+(\.\d+)?[\+\-\*\/]{1}[\+\-]?\d+(\.\d+)?[\+\-\*\/\=]{1}$/

if (regex.test(onScreenExp)) {
    let lastOperator = onScreenExp.slice(-1);
    seperate(onScreenExp.slice(0,-1));
} else {
    console.log('not valid')
}

// function textAppear(number){
//     let p = document.createElement('span');
//     p.textContent = number;
//     result.appendChild(p);
//     onScreenStr += number.toString();
    
// }

// btn1.addEventListener('click',function(){textAppear(1)})
// btn2.addEventListener('click',function(){textAppear(2)})
// btnplus.addEventListener('click',function(){textAppear('+')})
// btnplus.addEventListener('click',function(){textAppear('-')})
// btnresult.addEventListener('click',function(){operate()})
