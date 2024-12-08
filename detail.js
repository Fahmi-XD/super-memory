document.addEventListener("DOMContentLoaded", () => {
  const btnPinjam = document.getElementById("pinjam");
  const btnAccept = document.getElementById("btn-accept");
  const btnCancel = document.getElementById("btn-cancel");
  const body = document.getElementById("saput");

  btnPinjam.addEventListener("click", () => {
    body.classList.add("dialog-show")
  })

  btnCancel.addEventListener("click", () => {
    body.classList.remove("dialog-show")
  })

  btnAccept.addEventListener("click", () => {
    body.classList.add("dialog-show-accept")
    setTimeout(async () => {
      body.classList.remove("dialog-show-accept")
      await new Promise((resolve) => setTimeout(resolve, 500))
      body.classList.remove("dialog-show")
    }, 2000)
  })
})