import checkNumber from "./checkNumber"

const changeModalState = (state) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
        windowWidth = document.querySelectorAll('#width'),
        windowHeight = document.querySelectorAll('#height'),
        windowType = document.querySelectorAll('#view_type'),
        windowProfile = document.querySelectorAll('.checkbox')

  checkNumber('#width')
  checkNumber('#height')

  const bindActionToElems = (evt, elem, prop) => {
    elem.forEach((item, ind) => {
      item.addEventListener(evt, () => {
        switch(item.nodeName) {
          case 'SPAN':
            state[prop] = ind
            break
          case 'INPUT':
            if(item.getAttribute('type') === 'checkbox') {
              state[prop] = ind === 0 ? 'Холодное' : 'Теплое'
              elem.forEach((check, jnd) => {
                check.checked = false;
                if(ind === jnd) {
                  check.checked = true;
                }
              })
            } else {
              state[prop] = item.value
            }
            break
          case 'SELECT':
            state[prop] = item.value
            break
        }
      })
    })
  }

  bindActionToElems('click', windowForm, 'form')
  bindActionToElems('input', windowWidth, 'width')
  bindActionToElems('input', windowHeight, 'height')
  bindActionToElems('change', windowType, 'type')
  bindActionToElems('change', windowProfile, 'profile')
}

export default changeModalState