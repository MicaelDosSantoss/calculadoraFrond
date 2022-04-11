var n1 = 3;
var n2 = 2;
var operator = "+";

const numbers = () => {
    
document.querySelectorAll(".number")[0].onclick = function() {
    document.querySelector('p').innerText += 1 
};

document.querySelectorAll(".number")[1].onclick = function() {
    document.querySelector('p').innerText += 2
};

document.querySelectorAll(".number")[2].onclick = function() {
    document.querySelector('p').innerText += 3
};

document.querySelectorAll(".number")[3].onclick = function() {
    document.querySelector('p').innerText += 4
};

document.querySelectorAll(".number")[4].onclick = function() {
    document.querySelector('p').innerText += 5
};

document.querySelectorAll(".number")[5].onclick = function() {
    document.querySelector('p').innerText += 6
};

document.querySelectorAll(".number")[6].onclick = function() {
    document.querySelector('p').innerText += 7
};

document.querySelectorAll(".number")[7].onclick = function() {
    document.querySelector('p').innerText += 8
};

document.querySelectorAll(".number")[8].onclick = function() {
    document.querySelector('p').innerText += 9
};

document.querySelectorAll(".number")[9].onclick = function() {
    document.querySelector('p').innerText += 0
};

document.querySelectorAll('.OperatorRed')[2].onclick = function() {
    document.querySelector('p').innerHTML = ""
}

}

numbers()

const operatorFilter = (operator,n1,n2) => {
    if(operator === "+") {
        return console.log(n1 + n2)
    }
    if(operator === "-") {
        return console.log(n1 - n2)
    }
    if(operator === "/") {
        return console.log(n1 / n2)
    }
    if(operator === "x") {
        return console.log(n1 * n2)
    }
}




operatorFilter(operator,n1,n2)