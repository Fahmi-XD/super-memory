document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-click");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const state = button.getAttribute("data-login")
      localStorage.setItem("state", state)
    })
  });
})