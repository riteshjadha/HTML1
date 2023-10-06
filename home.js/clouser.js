f1();

function f1() {
    document.write(`f1() function called <br/> `)
}

var f2 = function () {
    document.write(`f2() function called <br/> `)
}

f2();


function outer() {
    document.write(`inner fuction called <br/>`)
    function inner() {
        document.write(`inner function called <br/>`)
    }
    return inner;
}

var result = outer()();
document.write(result);


result = multiply(2, 3, 5);
document.write(`multiply(2,4,5):${result}<br/>`)

function multiply(a, b, c) {
    return a * b * c;
}

result1 = multiply1(3) (4) (5);  
document.write(`multiply1(3, 4, 5) : ${result1} <br/>`)


function multiply1(a) {
    function multiplya(b) {
        function multiplyb(c) {
            return a * b * c;
        }
        return multiplyb;
    }
    return multiplya;
}
