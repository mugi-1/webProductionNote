// heroのアニメーション

window.addEventListener("load", () => {
  // .js-heroを取得
  const heroAnimation = document.querySelector(".js-hero");

  if (!heroAnimation) {
    return;
  }

  // .is-showを追加
  heroAnimation.classList.add("is-show");
});

// 各セクションのアニメーション表示
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("c-animation-show");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.1,
  },
);

const showItems = document.querySelectorAll(".js-show");
showItems.forEach((item) => {
  observer.observe(item);
});
