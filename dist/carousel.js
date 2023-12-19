document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  const numImages = 9;
  const imageContainer = document.getElementById('image-container');

  function initializeCarousel() {
    const cloneImages = imageContainer.cloneNode(true);
    imageContainer.appendChild(cloneImages);
  }

  function showSlide(index) {
    const imageWidth = document.querySelector('.carousel-image').offsetWidth;
    const newPosition = -index * imageWidth;
    imageContainer.style.transition = 'transform 0.5s ease-in-out';
    imageContainer.style.transform = `translateX(${newPosition}px)`;
  }

  function updateIndex(direction) {
    currentIndex += direction;

    // Reset index if it goes beyond the boundaries
    if (currentIndex === numImages * 2 - 1 || currentIndex === numImages - 1) {
      imageContainer.style.transition = 'none';
      currentIndex = direction === 1 ? numImages : numImages * 2 - 2;
      showSlide(currentIndex);
      imageContainer.offsetHeight; // Trigger reflow
      imageContainer.style.transition = 'transform 0.5s ease-in-out';
      showSlide(currentIndex);
    } else {
      showSlide(currentIndex);
    }
  }

  // Initial setup
  initializeCarousel();

  // Automatic rotation
  setInterval(() => {
    updateIndex(1);
  }, 2000); // automatic rotate interval
});
