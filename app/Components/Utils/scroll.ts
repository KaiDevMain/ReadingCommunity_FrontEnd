export const handleScroll = (id: string, offset: number = 50) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - offset,
        behavior: "smooth",
      });
    }
  };

// ナビゲーション遷移時のスクロール調整