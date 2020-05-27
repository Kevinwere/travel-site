import "../styles/styles.css";
import MobileMenu from "./module/mobileMenu";
import RevealOnScroll from "./module/RevealOnScroll";
import StickyHeader from "./module/StickyHeader";
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75);
new RevealOnScroll(document.querySelectorAll(".testimonials"), 60);
let mobileMenu = new MobileMenu();
let stickyHeader = new StickyHeader();

if (module.hot) {
  module.hot.accept();
}
