let currentIndex = 0;
  const slides = document.querySelectorAll('.carousel-images img');
  const totalSlides = slides.length;
  const lastSlideIndex = totalSlides - 1;
  
  function showSlide(index) {
      const carouselImages = document.getElementById('carousel-images');
      carouselImages.style.transition = 'transform 0.5s ease-in-out';
      carouselImages.style.transform = `translateX(-${index * 100}%)`;

      if (index === lastSlideIndex) {
          setTimeout(() => {
              carouselImages.style.transition = 'none';
              carouselImages.style.transform = 'translateX(0)';
              currentIndex = 0;
          }, 500); // Match with the CSS transition duration
      }
  }

  function nextSlide() {
      currentIndex++;
      if (currentIndex > lastSlideIndex) {
          currentIndex = 0;
      }
      showSlide(currentIndex);
  }

  function prevSlide() {
      currentIndex--;
      if (currentIndex < 0) {
          currentIndex = lastSlideIndex - 1;
          showSlide(lastSlideIndex);
          setTimeout(() => {
              const carouselImages = document.getElementById('carousel-images');
              carouselImages.style.transition = 'none';
              carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
          }, 500); // Match with the CSS transition duration
      } else {
          showSlide(currentIndex);
      }
  }

  // Auto-slide
  setInterval(() => {
      nextSlide();
  }, 4000);