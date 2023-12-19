document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  const numImages = 7;
  const imageContainer = document.getElementById('image-container');
  const hoverPauseArea = document.getElementById('hover-pause-area');
  let isHovered = false;

  // Event listeners for hover
  hoverPauseArea.addEventListener('mouseenter', function () {
    isHovered = true;
  });

  hoverPauseArea.addEventListener('mouseleave', function () {
    isHovered = false;
  });

  function showSlide(index) {
    const imageWidth = document.querySelector('.carousel-image').offsetWidth;
    const newPosition = -index * imageWidth;
    imageContainer.style.transition = 'transform 0.5s ease-in-out';
    imageContainer.style.transform = `translateX(${newPosition}px)`;
  }

  function updateIndex(direction) {
    if (!isHovered) {
      currentIndex += direction;

      // Reset index if it goes beyond the boundaries
      if (currentIndex === numImages) {
        currentIndex = 0;
        imageContainer.style.transition = 'none';
        showSlide(currentIndex);
        imageContainer.offsetHeight; // Trigger reflow
      }

      imageContainer.style.transition = 'transform 0.5s ease-in-out';
      showSlide(currentIndex);
    }
  }

  // Automatic rotation
  setInterval(() => {
    updateIndex(1);
  }, 2000); // automatic rotate interval
});
