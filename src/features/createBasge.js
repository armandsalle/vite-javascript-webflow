function createBadge() {
  // Create the badge
  const badge = document.createElement('div')
  badge.classList.add('js-badge')
  badge.innerText = 'It works!'

  // Add click envent to remove the badge from the DOM
  badge.addEventListener('click', (event) => {
    event.preventDefault()
    badge.remove()
  })

  // Add the badge to the page
  document.body.appendChild(badge)
}

export default createBadge
