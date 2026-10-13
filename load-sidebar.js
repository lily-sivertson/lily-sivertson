document.addEventListener("DOMContentLoaded", () => {
  // Find the placeholder element
  const sidebarContainer = document.getElementById("sidebar-container");

  if (sidebarContainer) {
    // Fetch the external HTML file
    fetch("sidebar.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to load sidebar");
        }
        return response.text();
      })
      .then(data => {
        // Inject the HTML content
        sidebarContainer.outerHTML = data;
      })
      .catch(error => console.error("Error loading sidebar:", error));
  }
});