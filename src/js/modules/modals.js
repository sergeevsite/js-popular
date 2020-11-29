const modals = () => {
    const bindModals = (triggerSelector, modalSelector, closeSelector, closeClickOverlay = true) => {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = modal.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]')

        trigger.forEach(item => {
            item.addEventListener('click', (evt) => {
                if(evt.target) {
                    evt.preventDefault()
                }

                windows.forEach(window => {
                    window.style.display = 'none'
                })

                modal.style.display = 'block'
                document.body.style.overflow = 'hidden'
                // document.body.classList.add('modal-open')
            })
        })

        close.addEventListener('click', () => {

            windows.forEach(window => {
                window.style.display = 'none'
            })

            modal.style.display = 'none'
            document.body.style.overflow = 'auto'
            // document.body.classList.remove('modal-open')
        })

        modal.addEventListener('click', (evt) => {
            if(evt.target === modal && closeClickOverlay) {

                windows.forEach(window => {
                    window.style.display = 'none'
                })

                modal.style.display = 'none'
                document.body.style.overflow = 'auto'
                // document.body.classList.remove('modal-open')
            }
        })
    }

    const showModalByTime = (selector, time) => {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block'
            document.body.style.overflow = 'hidden'
        }, time)
    }

    bindModals('.popup_engineer_btn', '.popup_engineer', '.popup_close')
    bindModals('.phone_link', '.popup', '.popup_close')
    bindModals('.popup_calc_btn', '.popup_calc', '.popup_calc_close')
    bindModals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false)
    bindModals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false)
    // showModalByTime('.popup', 3000)
}

export default modals