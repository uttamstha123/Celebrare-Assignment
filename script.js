var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
});
const hamMenu = document.getElementById("menu");
const closeMenu = document.getElementById('close');
const responsiveNav = document.querySelector(".responsive-nav");
hamMenu.addEventListener("click", () => {
  hamMenu.style.display = "none";
  responsiveNav.style.display = "block";
  responsiveNav.style.width = "50%";
});

closeMenu.addEventListener('click',()=>{
  hamMenu.style.display = "block";
  responsiveNav.style.display = "none";
  responsiveNav.style.width = "0%";
})