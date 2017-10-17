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

  // Fill the canvas with squares
  const squares = []
  let fillCanvas = () => {
    let i, j, x, y
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
      ctx.fillRect(sqr.x, sqr.y, squareD, squareD)
    })
  }
  fillCanvas()

  // Make a rectangle breath
  let opacity = 0
  let opacityAccel = 0.01
  let breathAnimation = () => {
    requestAnimationFrame(breathAnimation)
    // Choose a random rectangle
    let x = squares[getRandomIntFromRange(0, squares.length)].x
    let y = squares[getRandomIntFromRange(0, squares.length)].y
    ctx.clearRect(x, y, squareD, squareD)
    ctx.fillStyle = 'rgba(68,163,64,' + opacity + ')'
    if (opacity > 1 || opacity < 0) {
      opacityAccel = -opacityAccel
    }
    opacity += opacityAccel
    ctx.fillRect(x, y, squareD, squareD)
  }
  breathAnimation()
})
