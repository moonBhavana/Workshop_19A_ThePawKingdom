

var Total_Value ; 

function Checkbox_Click() {
    let checkboxes = document.querySelectorAll('input[type=checkbox]');
    let total = 0
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        total += parseFloat(checkboxes[i].value);
      }
    }
    Total_Value=total.toFixed(2);
    document.getElementById("output").innerHTML ="Total is: $" + Total_Value; 
    console.log(Total_Value);

    // calculating the discount and returning the output
    let applyDiscountCheckbox = document.getElementById("discountedTotal");
    if(!applyDiscountCheckbox.checked){
        console.log(Total_Value);
        document.getElementById("output").innerHTML ="Total is: $" + Total_Value; 
    }

    else{
        Total_Value = Total_Value*0.9;
        console.log(Total_Value);
        document.getElementById("output").innerHTML ="After discount total is: $" + Total_Value; 
         
    }
  }

  module.exports = Checkbox_Click;
  



  
  
  
  
  
  






