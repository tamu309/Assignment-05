

// About Section 1 Start
document.getElementById("noakhaliDonate_btn").addEventListener("click", function () {
    const inputBalance = getInputfieldValueById("noakhaliDonateInput");
    const totalBalance = getTextfieldValueById("primaryMoney");
    if (totalBalance === 0) {
      alert("You don't have enough balance.");
      return;
    } else if (inputBalance > totalBalance) {
      alert(
        `Your donation amount must be less than the main balance, which is = ${totalBalance}`
      );
    } else if (inputBalance == " ") {
      alert("Please write donation amount");
    } else if (!isNaN(inputBalance) && inputBalance !== 0) {
      const individualBalance = getTextfieldValueById("noakhaliTotalDonate");
      const newTotalBalance = totalBalance - inputBalance;
      document.getElementById("primaryMoney").innerText = newTotalBalance;
      const newIndividualBalance = individualBalance + inputBalance;
      document.getElementById("noakhaliTotalDonate").innerText =newIndividualBalance;

    
    //    Modal section
      
    myModal.showModal();
    document.getElementById("modalInput").innerText = `You have succsefully ৳${inputBalance} ${
       document.getElementById("noakhali").innerText
     }`;
   } else {
     alert("Your donation amount is not valid");
   }
    document.getElementById("noakhaliDonateInput").value = "";
 });


//  About Section 2 start 

document.getElementById("feniDonate_btn").addEventListener("click", function () {
    const inputBalance = getInputfieldValueById("feniDonate_input");
    const totalBalance = getTextfieldValueById("primaryMoney");

    if (totalBalance === 0) {
      alert("You don't have enough balance to donate.");
      return;
    } else if (inputBalance == " ") {
      alert("Please write donation amount");
    } else if (inputBalance > totalBalance) {
      alert(
        `Your donation amount must be less than the main balance, which is = ${totalBalance}`
      );
    } else if (!isNaN(inputBalance) && inputBalance !== 0) {
      const newTotalBalance = totalBalance - inputBalance;
      document.getElementById("primaryMoney").innerText = newTotalBalance;

      const individualBalance = getTextfieldValueById("feni-total-donate");
      const newIndividualBalance = individualBalance + inputBalance;
      document.getElementById("feni-total-donate").innerText =
        newIndividualBalance;

    //
      
        // Modal section
       
      myModal.showModal();
      document.getElementById(
        "modalInput"
      ).innerText = `You have succsefully ৳${inputBalance} ${
        document.getElementById("feni").innerText
      }`;
    } else {
      alert("Your donation amount is not valid");
    }
    document.getElementById("feniDonate_input").value = "";
  });


// Section 3 start

document.getElementById("qoutaDonate_btn").addEventListener("click", function () {
    const inputBalance = getInputfieldValueById("qoutaDonate_input");
    const totalBalance = getTextfieldValueById("primaryMoney");

    if (totalBalance === 0) {
      alert("You don't have enough balance to donate.");
      return;
    } else if (inputBalance == " ") {
      alert("Please write donation amount");
    } else if (inputBalance > totalBalance) {
      alert(
        `Your donation amount must be less than the main balance, which is = ${totalBalance}`
      );
    } else if (!isNaN(inputBalance) && inputBalance !== 0) {
      const newTotalBalance = totalBalance - inputBalance;
      document.getElementById("primaryMoney").innerText = newTotalBalance;

      const individualBalance = getTextfieldValueById("quota-total-donate");
      const newIndividualBalance = individualBalance + inputBalance;
      document.getElementById("quota-total-donate").innerText =
        newIndividualBalance;
      
      
    
     
    //    Modal section
       
      myModal.showModal();
      document.getElementById(
        "modalInput"
      ).innerText = `You have succsefully donate ৳${inputBalance} ${
        document.getElementById("qouta").innerText
      }`;
    } else {
      alert("Your donation amount is not valid");
    }
    document.getElementById("qoutaDonate_input").value = "";
  });


