function sayhi(){
    alert('Hi there');
}


function add(){
    var text1 = document.getElementById('input1').value; // get text from text input
    var text2 = document.getElementById('input2').value;
    
    var output = parseFloat(text1) + parseFloat(text2)

   document.getElementById('output').innerHTML = 'The answer is '+ output;
}

function subtract(){
    var text1 = document.getElementById('input1').value; // get text from text input
    var text2 = document.getElementById('input2').value;
    
    var output = parseFloat(text1) - parseFloat(text2)

   document.getElementById('output').innerHTML = 'The answer is '+ output;
}

function multiply(){
    var text1 = document.getElementById('input1').value; // get text from text input
    var text2 = document.getElementById('input2').value;
    
    var output = parseFloat(text1) * parseFloat(text2)

   document.getElementById('output').innerHTML = 'The answer is '+ output;
}

function division(){
    var text1 = document.getElementById('input1').value; // get text from text input
    var text2 = document.getElementById('input2').value;
    
    var output = parseFloat(text1) / parseFloat(text2)

   document.getElementById('output').innerHTML = 'The answer is '+ output;
}

