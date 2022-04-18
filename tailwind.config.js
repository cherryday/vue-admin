module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '11px',
      sm: '12px',
      base: '13px',
      lg: '14px',
      xl: '15px',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'dark-400': '#192A3E',

        'blue-200': '#34AFF9',
        'blue-400': '#109CF1',
        'blue-600': '#098EDF',
        'blue-900': '#334D6E',

        'grey-200': '#E5E5E5',
        'grey-250': '#D5D5D5',
        'grey-300': '#C2CFE0',
        'grey-400': '#90A0B7',
        'grey-500': '#707683',
        'grey-900': '#323C47',
      },
    },
  },
  plugins: [],
};
