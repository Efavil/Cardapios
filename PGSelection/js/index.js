  function calculateVisibleArea(el) {
    const rect = el.getBoundingClientRect();
    const visibleWidth = Math.min(rect.right, window.innerWidth) - Math.max(rect.left, 0);
    const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
    const visibleArea = Math.max(0, visibleWidth * visibleHeight);
    return visibleArea;
  }
  
  function updateDivEffects() {
    const divs = document.querySelectorAll('.foods');
    let maxVisibleArea = 0;
    let mostVisibleDiv = null;
  
    divs.forEach(div => {
      const visibleArea = calculateVisibleArea(div);
      
      if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        mostVisibleDiv = div;
      }
    });
  
    divs.forEach(div => {
      if (div === mostVisibleDiv) {
        div.classList.add('active');
        div.classList.remove('inactive');
      } else {
        div.classList.add('inactive');
        div.classList.remove('active');
      }
    });
  }
  
  window.addEventListener('scroll', updateDivEffects);
  window.addEventListener('resize', updateDivEffects);
  
  updateDivEffects();