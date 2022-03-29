var paymentForm = document.getElementById("paymentForm");
paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack() {
  var handler = PaystackPop.setup({
    key: "pk_test_b0a94f12be53c3669ba633c6e81ebef39a381363", // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
    currency: "NGN", // Use GHS for Ghana Cedis or USD for US Dollars
    ref: "" + Math.floor(Math.random() * 1000000000 + 1),
    callback: function (response) {
      var reference = response.reference;
      window.location =
        "http://localhost/SUPPORT/pay.php?reference=" + reference;
      alert("Payment complete! Reference: " + reference);
    },
    onClose: function () {
      alert("Transaction was not completed, window closed.");
    },
  });
  handler.openIframe();
}
