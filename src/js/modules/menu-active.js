export default function initMenu() {
    const menuHeader = document.querySelectorAll('.header-menu li a');
    console.log(menuHeader);

  function activeLink(link) {
    const url = location.href;
    const href = link.href;

    if(url.includes(href)){
      link.classList.add('active');
    };
  }
  menuHeader.forEach(activeLink);
}