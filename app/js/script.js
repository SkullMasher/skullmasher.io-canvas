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
  var rectMainColor = '#ff0000'

  // Square Dimension
  var squareD = 6

  // spacing beetween squares
  var spacing = 3

  c.fillStyle = 'chartreuse'
  c.fillRect(spacing, 50, squareD, squareD)
  c.fillRect((spacing * 2) + squareD, 50, squareD, squareD)
  c.fillRect((spacing * 3) + (squareD * 2), 50, squareD, squareD)
  c.fillRect((spacing * 4) + (squareD * 3), 50, squareD, squareD)

  c.fillStyle = rectMainColor
  for (var i = 1; i < 50; i++) {
    var x = (spacing * i) + (squareD * (i - 1))
    var y = spacing
    c.fillRect(x, y, squareD, squareD)
  }
})
