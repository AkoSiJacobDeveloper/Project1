export default {
    mounted(el, binding) {
      const options = {
        root: null, // Uses the viewport as the root by default
        threshold: 0.1, // Trigger the callback when 10% of the element is visible
      };
  
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            binding.value(entry); // Call the provided method when the element is visible
          }
        });
      }, options);
  
      observer.observe(el);
    },
    unmounted(el) {
      // Ensure the observer is disconnected when the element is unmounted
      if (el._observer) {
        el._observer.disconnect();
      }
    },
  };
  