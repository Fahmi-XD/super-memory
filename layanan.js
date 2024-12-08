document.addEventListener("DOMContentLoaded", () => {
  const btnPinjam = document.getElementById("folder");
  const btnCancel = document.getElementById("btn-cancel");
  const body = document.getElementById("iya");

  btnPinjam.addEventListener("click", () => {
    body.classList.add("layanan-dialog-show")
  })

  btnCancel.addEventListener("click", () => {
    body.classList.remove("layanan-dialog-show")
  })
})