document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form")

  form.addEventListener("submit", (e) => {
    e.preventDefault()
    const state = localStorage.getItem("state");
    localStorage.setItem("isLogin", true)
    switch (state) {
      case "admin":
        window.location.href = `${window.location.protocol}//${window.location.protocol == "http:" ? window.location.host : window.location.hostname}/pages/manajemen-buku.html`;
        break
      case "member":
        window.location.href = `${window.location.protocol}//${window.location.protocol == "http:" ? window.location.host : window.location.hostname}/pages/beranda.html`;
        break
    }
  })
})