// Cihuyyy

document.addEventListener('DOMContentLoaded', () => {
  const isLogin = localStorage.getItem("isLogin") || false;
  const preview = document.querySelectorAll(".img-preview") || null;
  const profile = document.querySelector(".btn-profile-listener") || null;

  if (window.location.pathname == "" || window.location.pathname == "/index.html") {
    localStorage.removeItem("isLogin")
  }

  if (preview) {
    preview.forEach(img => {
      img.addEventListener("click", () => {
        if (isLogin) {
          window.location.href = `${window.location.protocol}//${window.location.protocol == "http:" ? window.location.host : window.location.hostname}/pages/detail-login.html`;
        } else {
          window.location.href = `${window.location.protocol}//${window.location.protocol == "http:" ? window.location.host : window.location.hostname}/pages/detail.html`;
        }
      })
    })
  }
  
  if (profile) {
    profile.addEventListener("click", (e) => {
      e.preventDefault()
      if (isLogin) {
        window.location.href = `${window.location.protocol}//${window.location.protocol == "http:" ? window.location.host : window.location.hostname}/pages/profile-login.html`;
      } else {
        window.location.href = `${window.location.protocol}//${window.location.protocol == "http:" ? window.location.host : window.location.hostname}/pages/profile.html`;
      }
    })
  }
})