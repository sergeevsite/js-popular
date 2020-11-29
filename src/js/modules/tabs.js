const tabs = (headerSelector, tabSelector, contentSelector, activeClass) => {
  const header = document.querySelector(headerSelector),
        tabs = document.querySelectorAll(tabSelector),
        contents = document.querySelectorAll(contentSelector)

  const hideTabContent = () => {
    contents.forEach(content => {
      content.style.display = 'none'
    })

    tabs.forEach(tab => {
      tab.classList.remove(activeClass)
    })
  }

  const showTabContent = (ind = 0) => {
    contents[ind].style.display = 'block'
    tabs[ind].classList.add(activeClass)
  }

  hideTabContent()
  showTabContent()

  header.addEventListener('click', (evt) => {
    const target = evt.target

    if(target && target.classList.contains(tabSelector.replace(/\./, '')) || target.parentNode.classList.contains(tabSelector.replace(/\./, ''))) {
      tabs.forEach((tab, ind) => {
        if(target === tab || target.parentNode === tab) {
          hideTabContent()
          showTabContent(ind)
        }
      })
    }
  })
}

export default tabs