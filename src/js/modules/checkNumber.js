const checkNumber = (selector) => {
  const numInputs = document.querySelectorAll(selector)

  numInputs.forEach(input => {
    input.addEventListener('input', () => {
      input.value = input.value.replace(/\D/, '')
    })
  })

}

export default checkNumber