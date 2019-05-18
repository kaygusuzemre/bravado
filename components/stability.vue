<template>
  <div id="p5sketch" class="w-100"></div>
</template>

<script>
Date.prototype.getWeekNumber = function() {
  var d = new Date(
    Date.UTC(this.getFullYear(), this.getMonth(), this.getDate())
  )
  var dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  var yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil(((d - yearStart) / 86400000 + 1) / 7)
}

export default {
  props: ['year'],
  data() {
    return {
      p5: null,
      date: new Date()
    }
  },
  mounted() {
    if (process.client) {
      const p5 = require('p5')
      const self = this
      const p5setup = function(p) {
        var p5sketch = document.getElementById('p5sketch')
        var x = 100
        var y = 100

        p.setup = function() {
          p.createCanvas(p5sketch.clientWidth, p5sketch.clientHeight)
        }

        p.draw = function() {
          let distance = 40
          p.textSize(14)
          for (var x = 0; x < 26 * distance; x += distance) {
            let number = x / distance + 1 // week of year number

            if (self.date.getWeekNumber() == number) p.stroke(255, 204, 0)
            else p.noStroke()
            p.text(number, x, 10)

            p.stroke(100)
            let pp = 0 // pixel perfection

            if (number < 10) pp = 3
            else pp = 7

            p.line(x + pp, distance / 2, x + pp, p5sketch.clientHeight / 2 - 20)

            if (self.date.getWeekNumber() >= number) {
              p.fill(63, 183, 119)
              p.rect.apply(
                p,
                self.centeredRectangle(
                  x + pp,
                  p5sketch.clientHeight / 4,
                  (x / distance) * 3,
                  50
                )
              )
              p.fill(0)
            }
          }

          let pp = 7
          for (var x = 0 * distance; x < 26 * distance; x += distance) {
            let number = x / distance + 27 // week of year number

            if (self.date.getWeekNumber() == number) p.stroke(255, 204, 0)
            else p.noStroke()

            p.text(number, x, p5sketch.clientHeight / 2 + 10)

            p.stroke(100)
            p.line(
              x + pp,
              p5sketch.clientHeight / 2 + distance / 2,
              x + pp,
              p5sketch.clientHeight
            )
            if (self.date.getWeekNumber() >= number) {
              p.fill(255)
              p.rect.apply(
                p,
                self.centeredRectangle(
                  x + pp,
                  p5sketch.clientHeight - distance,
                  (x / distance) * 3,
                  60
                )
              )
              p.fill(0)
            }
          }
        }

        p.windowResized = function() {
          p.resizeCanvas(p5sketch.clientWidth, p5sketch.clientHeight)
        }
      }

      new p5(p5setup, document.getElementById('p5sketch'))
    }
  },
  methods: {
    centeredRectangle: (x, y, h, max) => {
      x -= 5
      h = Math.min(h, max)
      y -= h / 2
      return [x, y, 10, h]
    }
  }
}
</script>

<style>
#p5sketch {
  height: 200px;
}
</style>
