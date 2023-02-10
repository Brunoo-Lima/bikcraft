export default function initRotationImage() {
  const galery = document.querySelectorAll('.bike-intern-img img');
  const galeryContainer = document.querySelector('.bike-intern-img');


  function changeImage(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 950px)').matches;
    if (media) {
      galeryContainer.prepend(img);
    }
  }

  function activeGalery(img) {
    img.addEventListener('click', changeImage)
  }

  galery.forEach(activeGalery);
}
