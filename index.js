const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");
  let formattedValue = "";

  if (value.length > 0) {
    formattedValue = "+7 (";
    if (value.length > 1) {
      formattedValue += value.substring(1, 4);
      if (value.length > 4) {
        formattedValue += ") " + value.substring(4, 7);
        if (value.length > 7) {
          formattedValue += "-" + value.substring(7, 9);
          if (value.length > 9) {
            formattedValue += "-" + value.substring(9, 11);
          }
        }
      }
    }
  }

  e.target.value = formattedValue;
});

phoneInput.addEventListener("keydown", function (e) {
  if (
    [46, 8, 9, 27, 13].indexOf(e.keyCode) !== -1 ||
    (e.keyCode == 65 && e.ctrlKey === true) ||
    (e.keyCode == 67 && e.ctrlKey === true) ||
    (e.keyCode == 88 && e.ctrlKey === true) ||
    (e.keyCode >= 35 && e.keyCode <= 39)
  ) {
    return;
  }

  if (
    (e.shiftKey || e.keyCode < 48 || e.keyCode > 57) &&
    (e.keyCode < 96 || e.keyCode > 105)
  ) {
    e.preventDefault();
  }
});
