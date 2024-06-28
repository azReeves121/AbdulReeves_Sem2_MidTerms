// <!-- Abdul Reeves
// Date: june, 28, 2024 -->

document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("orderForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const address = document.getElementById("address").value;
      const item = document.getElementById("item").value;
      const quantity = parseInt(document.getElementById("quantity").value);

      let isValid = true;

      document.querySelectorAll(".error-message").forEach(function (element) {
        element.remove();
      });

      const inputs = document.querySelectorAll('input[type="number"]');
      for (let input of inputs) {
        if (input.value < 0) {
          const errorDiv = document.createElement("div");
          errorDiv.textContent = "Please enter a valid quantity!";
          errorDiv.className = "error-message";
          input.parentNode.appendChild(errorDiv);
          input.style.borderColor = "red";
          isValid = false;
        } else {
          input.style.borderColor = "";
        }
      }

      if (!isValid) return;

      const orderSummary = `
      Order Summary:
      Name: ${name}
      Address: ${address}
      Item: ${item}
      Quantity: ${quantity}
    `;

      const confirmationMessage = document.createElement("div");
      confirmationMessage.textContent =
        "Thank you for your order! Here's your order summary:\n" + orderSummary;
      document.body.appendChild(confirmationMessage);

      this.reset();
    });
});
