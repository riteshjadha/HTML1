var today = new Date();
document.write(`todays date : ${today } <br/>`)

var y = today.getFullYear();
document.write(`years : ${y}<br/>`)

var m = today.getMonth();
document.write(`month : ${m + 1} <br/>`)

var months = ['january', 'february', 'march', 'april' , 'may',
'june', 'july', 'augast', 'september', 'october', 'november', 'december'];
document.write(`month name : ${months[m]} <br/>`);


var d = today.getDate();
document.write(`date : ${d} <br/>`)

var day = today.getDay();
document.write(`day : ${day}<br/>`)


var d1 = today.getTimezoneOffset();
document.write(`getTimeZoneOffset() : ${d1} <br/>`)

var date = today.toDateString();
document.write(`date : ${date} <br/>`)

var result = today.formatteddate(today);
document.write(`date : ${result}<br/>`)

function formatteddate(inputdate){
    var y1 = inputdate.getFullYear();
    var m1 = inputdate.getMonth();
    var d1 = inputdate.getDate();
    return d1 + '/' + m1 + '/' + y1;
}