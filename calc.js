function display(num){
    result.value += num
}

function clearScreen(){
    result.value = ''
}

function evaluateExp(){
    result.value=eval(result.value)
}

function backspace(){
    result.value = result.value.slice(0,-1)
}

function dispBracket(){
    if(result.value[result.value.length-1] == '1' || '2' ||'3'||'4'||'5'|| '6' || '7' ||'8'||'9'||'0'){
        result.value += ''
    }
}