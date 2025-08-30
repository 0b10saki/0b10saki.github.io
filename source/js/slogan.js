(function() {
  // slogans 从 Hexo 注入的全局变量读取
  var slogans = window.FLUID_RANDOM_SLOGANS || [];
  var defaultSlogan = window.FLUID_DEFAULT_SLOGAN || "";

  var el = document.querySelector(".slogan");
  if (!el) return;

  if (slogans.length > 0) {
    var random = slogans[Math.floor(Math.random() * slogans.length)];
    el.innerText = random;
  } else {
    el.innerText = defaultSlogan;
  }
})();
