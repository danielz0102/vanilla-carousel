import '@/index.css'
import '@/carousel.css'

document
  .querySelector('.carousel__btn--left')
  .addEventListener('click', () => previous())
document
  .querySelector('.carousel__btn--right')
  .addEventListener('click', () => next())

function next() {
  const currentSlide = document.querySelector('.carousel__slide:not([hidden])')
  const nextElement = currentSlide?.nextElementSibling
  const isSlide = nextElement?.classList.contains('carousel__slide')

  if (nextElement && isSlide) {
    currentSlide.hidden = true
    nextElement.hidden = false
  }
}

function previous() {
  const currentSlide = document.querySelector('.carousel__slide:not([hidden])')
  const previousElement = currentSlide?.previousElementSibling
  const isSlide = previousElement?.classList.contains('carousel__slide')

  if (previousElement && isSlide) {
    currentSlide.hidden = true
    previousElement.hidden = false
  }
}
