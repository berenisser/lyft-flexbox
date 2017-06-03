window.addEventListener('scroll', function () {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
  header = document.getElementById('header');
  
  if (distanceY > 60) {
    header.classList.add("non-opaque");
  } else {
    header.classList.remove("non-opaque");
  }
});
