import gsap from 'gsap'

function animateTitle() {
  // Get the element from the DOM
  const h1Inner = document.querySelector('span.h1-inner')

  // If it exists, play the aniamtion
  if (h1Inner) {
    gsap.to(h1Inner, {
      y: 0,
      duration: 0.6,
      ease: 'elastic.out(1, 0.6)',
    })
  }
}

export default animateTitle
