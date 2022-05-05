// Business Logic
function add(number1, number2, number3) {
    return number1 + number2 + number3;

}
function subtract(number1, number2, number3) {
    return number1 - number2 - number3;
}
function divide(number1, number2, number3) {
    return number1 / number2 / number3;
}
function modulo(number1, number2, number3) {
    return number1 % number2 ;
}
function multiply(numb1 , numb2 , numb3){
    return numb1 * numb2 * numb3;
}

// User Interface Logic
$(document).ready(function () {
    $("#add").click(function (e) {
        e.preventDefault();
        const number1 = parseInt($("#number1").val());
        const number2 = parseInt($("#number2").val());
        let number3 = parseInt($("#number3").val());

        if (isNaN(number3)) {
            number3 = 0;
        }
        const result = add(number1, number2, number3)
        $("#result").text(result);
    });
});

$(document).ready(function () {
    $("#divide").click(function (e) {
        e.preventDefault();
        const number1 = parseInt($("#number1").val());
        const number2 = parseInt($("#number2").val());
        let number3 = parseInt($("#number3").val());

        if (isNaN(number3)) {
            number3 = 1;
        }
        const result = divide(number1, number2, number3)
        $("#result").text(result);
    });
});

$(document).ready(function () {
    $("#multiply").click(function (e) {
        e.preventDefault();
        const number1 = parseInt($("#number1").val());
        const number2 = parseInt($("#number2").val());
        let number3 = parseInt($("#number3").val());

        if (isNaN(number3)) {
            number3 = 1;
        }
        const result = multiply(number1, number2, number3)
        $("#result").text(result);
    });
});

$(document).ready(function () {
    $("#modulo").click(function (e) {
        e.preventDefault();
        const number1 = parseInt($("#number1").val());
        const number2 = parseInt($("#number2").val());
        // input 3 is not needed for modulo
         
        const result = modulo(number1, number2, number3)
        $("#result").text(result);
    });
});

$(document).ready(function () {
    $("#subtract").click(function (e) {
        e.preventDefault();
        const number1 = parseInt($("#number1").val());
        const number2 = parseInt($("#number2").val());
        let number3 = parseInt($("#number3").val());

        if (isNaN(number3)) {
            number3 = 0;
        }
        const result = subtract(number1, number2, number3)
        $("#result").text(result);
    });
});

















