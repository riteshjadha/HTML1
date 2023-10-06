function print(){
    document.write(`print() function called </br>`)
}

print();

function printA(a , b){
    document.write(`printA() function called ${a* b} </br> `)
}

printA(10, 10);


var result = function printB(){
    return 100;
}
//result=printB();
document.write(`printB() function called ${result}</br>`)