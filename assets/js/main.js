window.addEventListener('scroll', function () {
  const distanciaVertical = window.pageYOffset || document.documentElement.scrollTop,
  header = document.getElementById('header');
  
  if (distanciaVertical > 60) {
    header.classList.add("non-opaque");
    document.getElementById("logo").classList.add("logo-rosa");
    document.getElementById("uno").classList.add("link-gray");
    document.getElementById("dos").classList.add("link-gray");
    document.getElementById("tres").classList.add("link-gray");
    document.getElementById("cuatro").classList.add("cuatro-borde");
    document.getElementById("cinco").classList.add("cinco-aparece");
  } else {
    header.classList.remove("non-opaque");
    document.getElementById("logo").classList.remove("logo-rosa");
    document.getElementById("uno").classList.remove("link-gray");
    document.getElementById("dos").classList.remove("link-gray");
    document.getElementById("tres").classList.remove("link-gray");
    document.getElementById("cuatro").classList.remove("cuatro-borde");
    document.getElementById("cinco").classList.remove("cinco-aparece");
  }
});
