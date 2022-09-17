module.exports = {
  content: ["./src/**/*.{html,js,jsx}", './node_modules/flowbite-react/**/*.js'],
  theme: {
    extend: {
      maxWidth: {},
      height: {},
      width: {},
      minHeight: {},
      spacing: {},
      screens: {}
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
