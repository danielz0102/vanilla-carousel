import '@/index.css'
import '@/carousel.css'

const ACTIVE_CLASS = 'carousel__nav__dot--active'

document.querySelectorAll('.carousel__slide').forEach((slide, i) => {
  slide.id = `slide${i + 1}`

  const dot = createDot(slide.id, i === 0)

  document.querySelector('.carousel__nav').appendChild(dot)
})

document
  .querySelector('.carousel__arrow--left')
  .addEventListener('click', () => previous())
document
  .querySelector('.carousel__arrow--right')
  .addEventListener('click', () => next())

document.querySelectorAll('.carousel__nav__dot').forEach((btn) => {
  btn.addEventListener('click', () => slideTo(btn.dataset.slide))
})

function next() {
  const currentSlide = document.querySelector('.carousel__slide:not([hidden])')
  const newSlide = currentSlide?.nextElementSibling
  const isSlide = newSlide?.classList.contains('carousel__slide')
  const nextId = newSlide && isSlide ? newSlide.id : 'slide1'

  slideTo(nextId)
}

function previous() {
  const currentSlide = document.querySelector('.carousel__slide:not([hidden])')
  const newSlide = currentSlide?.previousElementSibling
  const isSlide = newSlide?.classList.contains('carousel__slide')

  if (!newSlide || !isSlide) {
    const slides = document.querySelectorAll('.carousel__slide')
    const lastSlide = slides[slides.length - 1]

    slideTo(lastSlide.id)
    return
  }

  slideTo(newSlide.id)
}

function slideTo(slideId) {
  const newSlide = document.querySelector(`#${slideId}`)
  const currentSlide = document.querySelector('.carousel__slide:not([hidden])')

  if (newSlide !== currentSlide) {
    newSlide.hidden = false
    currentSlide.hidden = true
    setActiveDot(newSlide.id)
  }
}

function setActiveDot(slideId) {
  const currentDot = document.querySelector(`.${ACTIVE_CLASS}`)
  const newDot = document.querySelector(`[data-slide="${slideId}"]`)

  currentDot.classList.remove(ACTIVE_CLASS)
  newDot.classList.add(ACTIVE_CLASS)
}

function createDot(slideId, active = false) {
  const dot = document.createElement('button')
  dot.classList.add('carousel__nav__dot')

  if (active) dot.classList.add(ACTIVE_CLASS)

  dot.dataset.slide = slideId

  return dot
}
