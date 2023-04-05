
function input(me) {
    calc = document.getElementById("input").value;
    let equal = calc.length -1;

    if( me.value == 'AC' ) {
        document.getElementById("input").value = '';
    }else if( me.value == 'DEL'){
        calc = calc.slice(0, -1);
        document.getElementById("input").value = calc;
    }else if( me.value == '=' ||  calc.charAt(equal) == '='){
        let output = eval(calc);
        document.getElementById("input").value += '=' + output;
            
    }else if(me.value == 'Ans'){
        //analyse the string the last 2 positions have to contain =
        // and result in order to save it
        let getPos = calc.indexOf("=");
        let ssize = calc.length - getPos;
        let result = "";
        for(let i = 1; i <= ssize; i++ ){
            result += calc.charAt(getPos + i);
        }
        document.getElementById("input").value = result;
    }else {
        document.getElementById("input").value +=  me.value;
    }
}

