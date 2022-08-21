document.addEventListener("DOMContentLoaded", () => {
  const selects = document.querySelectorAll("select");

  selects.forEach(function (select) {
    NiceSelect.bind(select);
  });
});
