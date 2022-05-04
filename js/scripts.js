// Business Logic
function add(number1, number2) {
    return number1 + number2;
}
function subtract(number3, number4) {
    return number3 - number4;
}
function divide(number5, number6) {
    return number5 / number6;
}
function multiply(number7, number8) {
    return number7 * number8
}

// user interface Logic

$(document).ready(function () {
    $("form#calculator").submit(function (event) {
        event.preventDefault();
        const number1 = parseInt($("#add1").val());
        const number2 = parseInt($("#add2").val());
        const result = add(number1, number2);
        $("#result").text(result);
    });
});

$(document).ready(function () {
    $("form#calculator").submit(function (event) {
        event.preventDefault();
        const number3 = parseInt($("#subtract1").val());
        const number4 = parseInt($("#subtract2").val());
        const answer = subtract(number3, number4);
        $("#answer").text(answer);
    
});
});

$(document).ready(function () {
    $("form#calculator").submit(function (event) {
        event.preventDefault();
        const number5 = parseInt($("#divide1").val());
        const number6 = parseInt($("#divide2").val());
        const after = divide(number5, number6);
        $("#resultant").text(resultant);
    
});
});

$(document).ready(function () {
    $("form#calculator").submit(function (event) {
        event.preventDefault();
        const number7 = parseInt($("#multiply1").val());
        const number8 = parseInt($("#multiply2").val());
        const resultant = multiply(number7, number8);
        $("#after").text(after);
    
});
});