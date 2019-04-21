export default {
  data: function() {
    return {
      windowWidth: 0,
      windowHeight: 0
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleWindowResize)
    this.handleWindowResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleWindowResize)
  },
  methods: {
    handleWindowResize() {
      this.windowWidth = window.innerWidth
      this.windowHeight = window.innerHeight
    }
  }
}
