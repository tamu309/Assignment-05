document.getElementById("blogBtn").addEventListener("click", function () {
  window.location.href = "./Blog.html";
});



function getTextfieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
  
    return textNumber;
  }
  function getInputfieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = Number(inputValue);
    return inputNumber;
  }
  
  function getInputfieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = Number(inputValue);
    return inputNumber;
  }


  function makeBtnactive(id) {
    const designBtn = document.getElementById(id);
    const historyBtn = document.getElementById("historyId");
    const donationBtn = document.getElementById("donationId");
    historyBtn.classList.remove("bg-lime-400");
    donationBtn.classList.remove("bg-lime-400");
    designBtn.classList.add("bg-lime-400");
  }

  
//   document.getElementById("historyId").addEventListener("click", function (event) {
//       event.preventDefault();
//       makeBtnactive("historyId");
//       document.getElementById("donationSection").classList.add("hidden");
//       document.getElementById("historySection").classList.remove("hidden");
//     });
  
//   document.getElementById("donationId").addEventListener("click", function (event) {
//       event.preventDefault();
//       makeBtnactive("donationId");
//       document.getElementById("donationSection").classList.remove("hidden");
//       document.getElementById("historySection").classList.add("hidden");
//     });