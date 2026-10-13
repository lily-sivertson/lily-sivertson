document.addEventListener("DOMContentLoaded", () => {
  fetch("header.html")
    .then(response => response.text())
    .then(data => {
      const placeholder = document.getElementById("header-placeholder");
      if (placeholder) {
        placeholder.innerHTML = data;
      }
    })
    .catch(error => console.error("Error loading header:", error));
});