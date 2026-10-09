(function () {
  const root = document.documentElement;
  const button = document.getElementById("theme-toggle");
  if (!button) return;

  function apply(theme) {
    root.setAttribute("data-theme", theme);
    button.setAttribute(
      "aria-label",
      theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
    );
  }

  apply(root.getAttribute("data-theme") || "light");

  button.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
})();