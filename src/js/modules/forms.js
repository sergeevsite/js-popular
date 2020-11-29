import checkNumber from "./checkNumber"

const forms  = (state) => {
  const form = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input')

  const messages = {
    loading: 'Загрузка...',
    success: 'Спасибо! С вами скоро свяжутся.',
    error: 'Что-то пошло не так ...'
  }

  checkNumber('input[name="user_phone"]')

  const sendPost = async (url, params) => {
    document.querySelector('.status').textContent = messages.loading
    let res = await fetch(url, {
      method: 'POST',
      body: params
    })

    return await res.text()
  }

  const clearInputs = () => {
    inputs.forEach(input => {
      input.value = ''
    })
  }

  form.forEach(item => {
    item.addEventListener('submit', evt => {
      evt.preventDefault()

      let statusMessage = document.createElement('div')
      statusMessage.classList.add('status')
      item.appendChild(statusMessage)

      const formData = new FormData(item)
      if(item.getAttribute('data-calc') === 'end') {
        for (let key in state) {
          formData.append(key, state[key])
        }
      }
      
      sendPost('assets/server.php', formData)
        .then(resp => {
            console.log(resp)
            statusMessage.textContent = messages.success
        })
        .catch(error => {
          statusMessage.textContent = messages.error
        })
        .finally(() => {
          clearInputs()
          setTimeout(() => {
            statusMessage.remove()
          }, 2000)
        })
    })
  })
}

export default forms