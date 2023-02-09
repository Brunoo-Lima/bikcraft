export default function initItensBudget() {
  const parameters = new URLSearchParams(location.search);

  function activeParameter(parameter) {
    const elementID = document.getElementById(parameter);

    if (elementID) {
      elementID.checked = true;
    }
  }

  parameters.forEach(activeParameter);
}