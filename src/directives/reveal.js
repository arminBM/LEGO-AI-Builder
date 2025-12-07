export default {
  mounted(el) {
    el.style.opacity = 0
    el.style.transform = 'translateY(20px)'
    el.style.transition = 'all 0.8s ease-out'

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = 1
          el.style.transform = 'translateY(0)'
          observer.unobserve(el)
        }
      },
      {
        threshold: 0.2,
      },
    )

    observer.observe(el)
  },
}
