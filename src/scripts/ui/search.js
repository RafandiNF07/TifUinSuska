// src/scripts/ui/search.js

function initSearch() {
  const searchBtn = document.getElementById("search-btn");
  const closeSearch = document.getElementById("close-search");
  const searchOverlay = document.getElementById("search-overlay");
  const searchContainer = document.getElementById("search-container");
  const searchInput = document.getElementById("global-search-input");

  function toggleSearch() {
    if (!searchOverlay) return;
    
    const isHidden = searchOverlay.classList.contains("hidden");

    if (isHidden) {
      // BUKA SEARCH
      // 1. Hapus hidden
      searchOverlay.classList.remove("hidden");
      // 2. TAMBAHKAN FLEX (Penting agar justify-center jalan)
      searchOverlay.classList.add("flex"); 

      setTimeout(() => {
        searchOverlay.classList.remove("opacity-0");
        searchContainer?.classList.remove("scale-95");
        searchContainer?.classList.add("scale-100");
        searchInput?.focus();
      }, 10);
      document.body.style.overflow = 'hidden';
    } else {
      // TUTUP SEARCH
      searchOverlay.classList.add("opacity-0");
      searchContainer?.classList.remove("scale-100");
      searchContainer?.classList.add("scale-95");
      
      setTimeout(() => {
        // 1. Tambah hidden
        searchOverlay.classList.add("hidden");
        // 2. HAPUS FLEX (Kembalikan ke state awal)
        searchOverlay.classList.remove("flex");
        
        document.body.style.overflow = '';
      }, 300);
    }
  }

  // ... (Sisa kode event listener tetap sama) ...
  searchBtn?.addEventListener("click", toggleSearch);
  closeSearch?.addEventListener("click", toggleSearch);
  
  searchOverlay?.addEventListener("click", (e) => {
    if (e.target === searchOverlay) toggleSearch();
  });
  
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !searchOverlay?.classList.contains("hidden")) {
      toggleSearch();
    }
  });
}

document.addEventListener('astro:page-load', initSearch);
initSearch();