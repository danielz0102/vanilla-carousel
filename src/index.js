import '@/index.css'
import '@/carousel.css'

document.querySelectorAll('.carousel__slide').forEach((slide, i) => {
  slide.id = `slide${i + 1}`

  const slideBtn = document.createElement('button')
  slideBtn.classList.add('carousel__nav__btn')
  slideBtn.dataset.slide = slide.id

  document.querySelector('.carousel__nav').appendChild(slideBtn)
})

document
  .querySelector('.carousel__btn--left')
  .addEventListener('click', () => previous())
document
  .querySelector('.carousel__btn--right')
  .addEventListener('click', () => next())

document.querySelectorAll('.carousel__nav__btn').forEach((btn) => {
  btn.addEventListener('click', () => slideTo(btn.dataset.slide))
})

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

function slideTo(slideId) {
  const newSlide = document.querySelector(`#${slideId}`)
  const currentSlide = document.querySelector('.carousel__slide:not([hidden])')

  if (newSlide !== currentSlide) {
    newSlide.hidden = false
    currentSlide.hidden = true
  }
}
