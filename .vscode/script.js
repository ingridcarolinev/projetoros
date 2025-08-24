function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  // pega tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light (avatarr)
    img.setAttribute("src", "./assets/avatar.png")
  } else {
    //se tiver sem light mode, manter imagem normal
    img.setAttribute("src", "./assets/Avatarr.png")
  }
}
