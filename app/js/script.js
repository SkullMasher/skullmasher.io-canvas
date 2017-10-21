// Helper function
const random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}

const canvas = document.querySelector('#canvas')

// Canvas size
const canvasHeight = innerHeight - document.querySelector('header').clientHeight

// set context of the canvas 2d or webGL
const ctx = canvas.getContext('2d', {alpha: true})

// Colors
const rectColor = 'rgba(38,38,38,1)'
// const rectHighlight = 'rgba(68,163,64,1)'

// Square Dimension
const squareD = 6

// spacing beetween squares
const spacing = 2

function Square (x, y, opacity, opacityAccel) {
  this.x = x
  this.y = y
  this.color = rectColor
  this.opacity = opacity || 1
  this.opacityAccel = opacityAccel || 0.01
  this.squareIsBreathing = false
  this.delay = random(50, 200)
  this.count = 0
}

Square.prototype.draw = function () {
  ctx.fillStyle = this.color
  ctx.fillRect(this.x, this.y, squareD, squareD)
}

Square.prototype.breath = function () {
  // Make a rectangle breath
  this.count++
  if (this.count === this.delay) {
    this.squareIsBreathing = true
    this.delay = random(50, 200)
  }

  if (this.squareIsBreathing) {
    ctx.clearRect(this.x, this.y, squareD, squareD)
    ctx.fillStyle = `rgba(69,163,64,${this.opacity})`
    ctx.fillRect(this.x, this.y, squareD, squareD)
    this.opacity += this.opacityAccel // Make it glow !
  }

  if (this.opacity > 1) {
    this.opacityAccel = -this.opacityAccel // Fading away...
  } else if (this.opacity < 0.2) {
    // breathing cycle complete
    ctx.fillStyle = rectColor
    ctx.fillRect(this.x, this.y, squareD, squareD)
    this.squareIsBreathing = false
    this.opacityAccel = -this.opacityAccel // Get ready to glow again
    this.opacity = 0.2
    this.count = 0
  }
}

// Fill the canvas with squares
const squares = []

const getRandomSquare = () => {
  const squaresLength = squares.length
  return squares[random(0, squaresLength)]
}

let fillCanvas = () => {
  let i, j, x, y, square
  j = i = 1
  x = y = 0

  // Clear the canvas
  ctx.clearRect(x, y, canvas.width, canvas.height)
  // Default squares color
  ctx.fillStyle = rectColor

  while (y < canvas.height) {
    y = (spacing * i) + (squareD * (i - 1)) // Vertical line
    while (x < canvas.width) {
      x = (spacing * j) + (squareD * (j - 1)) // Horizontal line
      squares.push(new Square(x, y)) // Store all the squares coordinates
      j++
    }
    j = x = 0
    i++
  }
  y = i = 0

  // Draw all the rectangle from stores coordinates
  squares.forEach((sqr) => {
    sqr.draw()
  })
}

let init = () => {
  canvas.width = innerWidth
  canvas.height = canvasHeight

  fillCanvas()
}

// Animaiton
let animate = () => {
  // instenciate some squares
  // const randomSquare = getRandomSquare()
  // ask them to breath
  squares.forEach((sqr) => {
    sqr.breath()
  })
  requestAnimationFrame(animate)
}

addEventListener('DOMContentLoaded', (event) => {
  init()
  animate()
})
