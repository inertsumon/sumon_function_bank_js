//get the input Function
function getTheInput(inputId) {
    const input = document.getElementById(inputId);
    const value = parseFloat(input.value);
    input.value = "";
    return value;
    
}
//show to the  Account- deposit,withdraw,main balance
function showBalance(inputValue, showId, isAdding) {
    const total = document.getElementById(showId);
    const totalValue = parseFloat(total.innerText);
    total.innerText = totalValue + inputValue;

   const mainBal = document.getElementById("balance-total");
   const mainBalValue = getCurrentBal();
    
    if (isAdding == true) {
        
        mainBal.innerText = mainBalValue + inputValue;
      
        
    }
    else {
        mainBal.innerText = mainBalValue - inputValue;

    }
    
 
}
//current main balance func
function getCurrentBal() {
    const mainBal = document.getElementById("balance-total");
    const mainBalValue = parseFloat(mainBal.innerText);
    return mainBalValue;
}

//deposit button
const depositBTN = document.getElementById("deposit-button");

depositBTN.addEventListener("click", function () {
    
    const depositValue = getTheInput("deposit-input");

    if (depositValue > 0) {
        showBalance(depositValue, "deposit-total", true)
    }
   
})

//withdraw button
const withdrawBTN = document.getElementById("withdraw-button");

withdrawBTN.addEventListener("click", function () {
    
    const withdrawValue = getTheInput("withdraw-input");

    const currentBalanceValue = getCurrentBal();
    //
    if (withdrawValue > 0 && currentBalanceValue > withdrawValue) {
        showBalance(withdrawValue, "withdraw-total", false);
    }
   
})
