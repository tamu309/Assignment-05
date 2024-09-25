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
  
