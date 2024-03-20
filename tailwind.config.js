const colors = require('./src/components/ui/theme/color');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
  colors: {
    ...colors,
  },
};
