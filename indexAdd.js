function sum(){
    var num1 = parseFloat(document.getElementById("txtfirstNum").value);
    var num2 = parseFloat(document.getElementById("txtSecondNum").value);
     var result = num1 + num2;
     
     if( !isNaN(result))
     {
        document.getElementById("txtResult").value = num1 + num2;
     }
     else{
        alert("Pl enter a valid number!!");
     }
    

   }