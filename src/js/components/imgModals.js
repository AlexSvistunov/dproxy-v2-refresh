const workRowImgs = document.querySelectorAll(".work__row-img");
const workModal = document.querySelector(".work__modal");
workRowImgs.forEach((workRowImg) => {
  document.addEventListener("click", (e) => {
    if (e.target === workModal && e.target !== workRowImg) {
      workModal.classList.remove("work__modal--active");
    }
  });

  workRowImg.addEventListener("click", (e) => {
    if (window.innerWidth >= 768) {
      const currentImg = e.currentTarget;
      console.log(currentImg);
      const currentImgUrl = currentImg.src;
      console.log(currentImg);
      workModal.classList.add("work__modal--active");
      workModal.querySelector(".work__modal-inner").innerHTML = `
    <img loading="lazy" src="${currentImgUrl}" class="work__row-img--modal"
    alt="покупка прокси в телеграме">

    `;
    } else {
      return false
    }
  });
});
