addEventListener('DOMContentLoaded', (event) => {
  // Helper function
  const getRandomIntFromRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
  }

  const canvas = document.querySelector('#canvas')

  // Canvas size
  const canvasHeight = 300
  canvas.width = innerWidth
  canvas.height = canvasHeight

  // set context of the canvas 2d or webGL
  const ctx = canvas.getContext('2d', {alpha: true})

  // Colors
  const rectColor = '#262626'
  // const rectHighlight = 'rgba(68,163,64,1)'

  // Square Dimension
  const squareD = 6

  // spacing beetween squares
  const spacing = 2

  function Square (x, y) {
    this.x = x
    this.y = y
  }

  Square.prototype.draw = function () {
    ctx.fillRect(this.x, this.y, squareD, squareD)
  }

  Square.prototype.breath = function() {
    // Make a rectangle breath
    let opacity = 0
    let opacityAccel = 0.01
    // Get a random square
    let x = squares[getRandomIntFromRange(0, squares.length)].x
    let y = squares[getRandomIntFromRange(0, squares.length)].y
    ctx.clearRect(x, y, squareD, squareD)
    ctx.fillStyle = 'rgba(68,163,64,' + opacity + ')'
    if (opacity > 0.3 || opacity < 0) {
      opacityAccel = -opacityAccel
    }
    opacity += opacityAccel
    ctx.fillRect(x, y, squareD, squareD)
  }

  // Fill the canvas with squares
  const squares = []

  const getRandomSquare = () => {
    const squaresLength = squares.length
    return squares[getRandomIntFromRange(0, squaresLength)]
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
      // Vertical line
      y = (spacing * i) + (squareD * (i - 1))
      while (x < canvas.width) {
        // Horizontal line
        x = (spacing * j) + (squareD * (j - 1))
        squares.push({x: x, y: y})
        j++
      }
      j = x = 0
      i++
    }
    y = i = 0

    // Draw all the rectangle
    squares.forEach((sqr) => {
      square = new Square(sqr.x, sqr.y)
      square.draw()
    })
  }
  fillCanvas()

  // Animaiton
  let opacity = 0
  let opacityAccel = 0.01
  let squareIsBreathing = false
  let randomSquare = {}

  let animate = () => {
    requestAnimationFrame(animate)
    // Get a rectangle
    if (!squareIsBreathing) {
      randomSquare = getRandomSquare()
      ctx.clearRect(randomSquare.x, randomSquare.y, squareD, squareD)
      squareIsBreathing = true
      // console.log(randomSquare)
    }

    if (opacity >= 1) {
      opacityAccel = -opacityAccel
    } else if (opacity < 0) {
      // breathing cycle complete
      ctx.fillStyle = rectColor
      ctx.fillRect(randomSquare.x, randomSquare.y, squareD, squareD)
      squareIsBreathing = false
      opacityAccel = -opacityAccel
    }

    opacity += opacityAccel
    ctx.fillStyle = 'rgba(68,163,64,' + opacity + ')'
    ctx.fillRect(randomSquare.x, randomSquare.y, squareD, squareD)
    // console.log(opacity)
  }
  animate()
})
