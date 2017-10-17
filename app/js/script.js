// Vanilla Javascript please
document.addEventListener('DOMContentLoaded', function (event) {
  const canvas = document.querySelector('#canvas')

  // Canvas size
  const canvasHeight = 300
  canvas.width = window.innerWidth
  canvas.height = canvasHeight

  // set context of the canvas 2d or webGL
  const c = canvas.getContext('2d', {alpha: true})

  // Colors
  const rectColor = '#262626'
  // const rectHighlight = 'rgba(68,163,64,1)'

  // Square Dimension
  const squareD = 6

  // spacing beetween squares
  const spacing = 2

  c.fillStyle = rectColor
  // Fill the canvas with squares
  let i, j, x, y
  j = i = 1
  x = y = 0

  // Fill the available space with rectangle
  while (y < canvas.height) {
    // Vertical line
    y = (spacing * i) + (squareD * (i - 1))
    while (x < canvas.width) {
      // Horizontal line
      x = (spacing * j) + (squareD * (j - 1))
      c.fillRect(x, y, squareD, squareD)

      j++
    }
    j = x = 0
    i++
  }
  y = i = 0

  // Make a rectangle breath
  let opacity = 0
  let opacityAccel = 0.01
  let breathAnimation = () => {
    requestAnimationFrame(breathAnimation)
    // Draw a glowing green rectangle
    x = y = 150
    c.clearRect(x, y, squareD, squareD)
    c.shadowColor = 'green'
    // c.shadowBlur = 5
    c.fillStyle = 'rgba(68,163,64,' + opacity + ')'
    if (opacity > 1 || opacity < 0) {
      opacityAccel = -opacityAccel
    }
    opacity += opacityAccel
    c.fillRect(x, y, squareD, squareD)
    console.log(opacity)
  }
  breathAnimation()
})
