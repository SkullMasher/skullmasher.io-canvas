// Vanilla Javascript please
document.addEventListener('DOMContentLoaded', function (event) {
  var canvas = document.querySelector('#canvas')

  // Canvas size
  var canvasHeight = 300
  canvas.width = window.innerWidth
  canvas.height = canvasHeight

  // set context of the canvas 2d or webGL
  var c = canvas.getContext('2d', {alpha: true})

  // Colors
  var rectMainColor = '#262626'

  // Square Dimension
  var squareD = 6

  // spacing beetween squares
  var spacing = 2

  c.fillStyle = rectMainColor
  // Fill the canvas with squares
  var i, j, x, y
  i = j = 1
  x = y = 0

  while (y < canvas.height) {
    y = (spacing * i) + (squareD * (i - 1))
    while (x < canvas.width) {
      x = (spacing * j) + (squareD * (j - 1))
      c.fillRect(x, y, squareD, squareD)

      j++
    }
    j = x = 0
    i++
  }
})
