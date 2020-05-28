import "../styles/styles.css";
import MobileMenu from "./module/mobileMenu";
import RevealOnScroll from "./module/RevealOnScroll";
import StickyHeader from "./module/StickyHeader";

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonials"), 60);
let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();
let modal;
document.querySelectorAll(".open-modal").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    if (typeof modal == "undefined") {
      import("./module/Modal")
        .then((f) => {
          modal = new f.default();
          setTimeout(() => modal.openTheModal(), 20);
        })
        .catch();
    } else {
      modal.openTheModal();
    }
  });
});

if (module.hot) {
  module.hot.accept();
}
