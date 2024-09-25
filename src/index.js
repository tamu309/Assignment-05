

// About Section 1 Start
document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    const inputBalance = getInputfieldValueById("noakhali-donate-input");
    const totalBalance = getTextfieldValueById("primary_money");
    if (totalBalance === 0) {
      alert("You don't have enough balance to donate.");
      return;
    } else if (inputBalance > totalBalance) {
      alert(
        `Your donation amount must be less than the main balance, which is = ${totalBalance}`
      );
    } else if (inputBalance == " ") {
      alert("Please write donation amount");
    } else if (!isNaN(inputBalance) && inputBalance !== 0) {
      const individualBalance = getTextfieldValueById("noakhali-total-donate");
      const newTotalBalance = totalBalance - inputBalance;
      document.getElementById("primary_money").innerText = newTotalBalance;
      const newIndividualBalance = individualBalance + inputBalance;
      document.getElementById("noakhali-total-donate").innerText =
        newIndividualBalance;

      showHistory("noakhali-donate-input", "noakhali");

    //    Modal section
      
     my_modal_1.showModal();
     document.getElementById(
       "modalInput"
     ).innerText = `You have succsefully ৳${inputBalance} ${
       document.getElementById("noakhali").innerText
     }`;
   } else {
     alert("Your donation amount is not valid");
   }
   document.getElementById("noakhali-donate-input").value = "";
 });

