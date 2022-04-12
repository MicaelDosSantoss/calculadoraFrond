var n1 
var n2 
var operator


const Operators = () => {

    document.querySelectorAll('.operator')[0].onclick = function() {
      return operator = document.querySelector('p').innerText += "+"
    }
 
    document.querySelectorAll('.operator')[1].onclick = function() {
     return operator = document.querySelector('p').innerText += "-"
 }
 
 document.querySelectorAll('.operator')[2].onclick = function() {
     return operator = document.querySelector('p').innerText += "/"
 }
 
 document.querySelectorAll('.operator')[3].onclick = function() {
     return operator = document.querySelector('p').innerText += "*"
 }
 
 }
 
 Operators()




    
document.querySelectorAll(".number")[0].onclick = function() {

    if(operator == "") {
        var n1 = document.querySelector('p').innerText += 1 

        return n1   
        
    } else {
        return n2 = document.querySelector('p').innerText += 1  

    }
    
};


    
    
 


document.querySelectorAll(".number")[1].onclick = function() {
    if(operator == "") {
        var n1 = document.querySelector('p').innerText += 2 
        return console.log( Number(n1) )
    } else {
        var n2 = document.querySelector('p').innerText += 2
        return console.log(  Number(n2) )      
    }
    
    
};

document.querySelectorAll(".number")[2].onclick = function() {
    if(operator == "") {
        var n1 = document.querySelector('p').innerText += 3 
        return console.log( Number(n1) )
    } else {
        var n2 = document.querySelector('p').innerText += 3 
        return console.log(  Number(n2) )      
    }
    
};

document.querySelectorAll(".number")[3].onclick = function() {
    if(operator == "") {
        var n1 = document.querySelector('p').innerText += 4 
        return console.log( Number(n1) )
    } else {
        var n2 = document.querySelector('p').innerText += 4 
        return console.log(  Number(n2) )      
    }
    
};

document.querySelectorAll(".number")[4].onclick = function() {
    if(operator == "") {
        var n1 = document.querySelector('p').innerText += 5 
        return console.log( Number(n1) )
    } else {
        var n2 = document.querySelector('p').innerText += 5 
        return console.log(  Number(n2) )      
    }
    
};

document.querySelectorAll(".number")[5].onclick = function() {
    if(operator == "") {
        var n1 = document.querySelector('p').innerText += 6 
        return console.log( Number(n1) )
    } else {
        var n2 = document.querySelector('p').innerText += 6 
        return console.log(  Number(n2) )      
    }
    
};

document.querySelectorAll(".number")[6].onclick = function() {
    if(operator == "") {
        var n1 = document.querySelector('p').innerText += 7 
        return console.log( Number(n1) )
    } else {
        var n2 = document.querySelector('p').innerText += 7 
        return console.log(  Number(n2) )      
    }
    
};

document.querySelectorAll(".number")[7].onclick = function() {
    if(operator == "") {
        var n1 = document.querySelector('p').innerText += 8 
        return console.log( Number(n1) )
    } else {
        var n2 = document.querySelector('p').innerText += 8 
        return console.log(  Number(n2) )      
    }
    
};

document.querySelectorAll(".number")[8].onclick = function() {
    if(operator == "") {
        var n1 = document.querySelector('p').innerText += 9 
        return console.log( Number(n1) )
    } else {
        var n2 = document.querySelector('p').innerText += 9 
        return console.log(  Number(n2) )      
    }
    
};

document.querySelectorAll(".number")[9].onclick = function() {
    if(operator == "") {
        var n1 = document.querySelector('p').innerText += 0 
        return console.log( Number(n1) )
    } else {
        var n2 = document.querySelector('p').innerText += 0 
        return console.log(  Number(n2) )      
    }
  
    
};



 // Botão Apagar












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