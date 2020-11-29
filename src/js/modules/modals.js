const modals = () => {
    const bindModals = (triggerSelector, modalSelector, closeSelector) => {

        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = modal.querySelector(closeSelector)

        trigger.forEach(item => {
            item.addEventListener('click', (evt) => {
                if(evt.target) {
                    evt.preventDefault()
                }

                modal.style.display = 'block'
                document.body.style.overflow = 'hidden'
                // document.body.classList.add('modal-open')
            })
        })

        close.addEventListener('click', () => {
            modal.style.display = 'none'
            document.body.style.overflow = 'auto'
            // document.body.classList.remove('modal-open')
        })

        modal.addEventListener('click', (evt) => {
            if(evt.target === modal) {
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
    // showModalByTime('.popup', 3000)
}

export default modals