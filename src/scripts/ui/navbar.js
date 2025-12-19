function initNavbar() {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");
  const header = document.getElementById("main-header");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      const isHidden = menu.classList.toggle("hidden");
      document.body.style.overflow = isHidden ? '' : 'hidden';
      
      btn.setAttribute("aria-expanded", (!isHidden).toString());
    });
  }

  const isTransparentMode = header?.dataset.transparentMode === "true";

  if (isTransparentMode) {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        header?.classList.remove("bg-transparent", "border-transparent");
        header?.classList.add("bg-slate-900/95", "backdrop-blur-md", "border-white/10", "shadow-sm");
      } else {
        header?.classList.add("bg-transparent", "border-transparent");
        header?.classList.remove("bg-slate-900/95", "backdrop-blur-md", "border-white/10", "shadow-sm");
      }
    };

    window.addEventListener("scroll", handleScroll);
  }
}

document.addEventListener('astro:page-load', initNavbar);
initNavbar();