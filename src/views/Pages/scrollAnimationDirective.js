// Create a new file called scrollAnimationDirective.js
export const scrollAnimation = {
    mounted: (el) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            // Add the animation class only when the element enters the viewport
            if (entry.isIntersecting) {
              el.classList.add('animate-appear');
              // Optional: Stop observing after animation is triggered
              observer.unobserve(el);
            }
          });
        },
        {
          threshold: 0.1 // Element becomes visible at 10% visibility
        }
      );
  
      observer.observe(el);
    }
  };