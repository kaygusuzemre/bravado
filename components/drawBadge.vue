<template>
  <div :id="id"></div>
</template>

<script>
export default {
  props: ['id', 'badge'],
  methods: {
    hexToRgb: function(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? {
            colorR: parseInt(result[1], 16),
            colorG: parseInt(result[2], 16),
            colorB: parseInt(result[3], 16)
          }
        : null
    }
  },
  mounted: function() {
    if (process.client) {
      const p5 = this.$parent.p5
      const self = this
      const p5sketch = document.getElementById(self.id)
      const p5setup = function(p) {
        p.setup = function() {
          p.createCanvas(150, 150)
        }

        p.polygon = function(x, y, radius, npoints) {
          let angle = p.TWO_PI / npoints
          p.beginShape()
          for (let a = 0; a < p.TWO_PI; a += angle) {
            let sx = x + p.cos(a) * radius
            let sy = y + p.sin(a) * radius
            p.vertex(sx, sy)
          }
          p.endShape(p.CLOSE)
        }

        p.preload = function() {
          self.image = p.loadImage(self.badge.imageURL)
        }

        p.draw = function() {
          const { colorR, colorG, colorB } = self.hexToRgb(self.badge.color)
          p.background(255)
          p.image(self.image, 0, 0, 150, 150)
          p.fill(colorR, colorG, colorB, 120)
          p.translate(75, 75)
          p.rotate(self.badge.rotate)
          p.stroke(0)
          p.polygon(0, 0, 65, self.badge.edge)
          p.noStroke()
          p.resetMatrix()
          p.textAlign(p.CENTER)
          p.textLeading(20)
          p.textStyle(p.BOLD)
          p.textFont('Arial')
          p.fill(0)
          p.stroke(255)
          p.text('125 P\n 300 A\n 60 D\n', 70, 60)
        }

        p.windowResized = function() {
          //p.resizeCanvas(p5sketch.clientWidth, p5sketch.clientHeight)
        }
      }

      self.p5 = new p5(p5setup, p5sketch)
    }
  }
}
</script>

<style>
</style>
