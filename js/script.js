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
const observerOptions = {
  root: null, // ブラウザ画面を基準にする
  rootMargin: "0px 0px -10% 0px", // 画面の下から10%内側に入ったら発火
  threshold: 0.1, // 10%が見えたらアニメーション開始
};
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("c-animation-show");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const showItems = document.querySelectorAll(".js-show");
showItems.forEach((item) => {
  observer.observe(item);
});
