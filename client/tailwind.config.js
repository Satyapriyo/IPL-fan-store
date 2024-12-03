/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
      extend: {
        colors:{
          chennai: {
            primary: '#FFEB3B',
            secondary: '#1976D2',
          },
          delhi: {
            primary: '#F4511E',
            secondary: '#1976D2',
          },
          gujrat: {
            primary: '#4FC3F7',
            secondary: '#303F9F',
          },
          kolkata: {
            primary: '#FFEB3B',
            secondary: '#7B1FA2',
          },
          lucknow: {
            primary: '#ECEFF1',
            secondary: '#1976D2',
          },
          mumbai: {
            primary: '#42A5F5',
            secondary: '#1565C0',
          },
          punjab: {
            primary: '#F4511E',
            secondary: '#0288D1',
          },
          rajasthan: {
            primary: '#F48FB1',
            secondary: '#1976D2',
          },
          bangaluru: {
            primary: '##37474F',
            secondary: '#E64A19',
          },
          hydrabad: {
            primary: '#EF6C00',
            secondary: '#D84315',
          },
        },
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
  },
  safelist: [

    'chennai',
    'delhi',
    'gujrat',
    'kolkata',
    'lucknow',
    'mumbai',
    'punjab', 
    'rajasthan', 
    'bangaluru', 
    'hydrabad', 

    'bg-chennai-primary',
    'bg-delhi-primary',
    'bg-gujrat-primary',
    'bg-kolkata-primary',
    'bg-lucknow-primary',
    'bg-rajasthan-primary',
    'bg-bangaluru-primary',
    'bg-hydrabad-primary',

    'bg-chennai-secondary',
    'bg-delhi-secondary',
    'bg-gujrat-secondary',
    'bg-kolkata-secondary',
    'bg-lucknow-secondary',
    'bg-mumbai-secondary',
    'bg-punjab-secondary',
    'bg-rajasthan-secondary',
    'bg-bangaluru-secondary',
    'bg-hydrabad-secondary',

    'text-chennai-primary',
    'text-delhi-primary',
    'text-gujrat-primary',
    'text-kolkata-primary',
    'text-lucknow-primary',
    'text-mumbai-primary',
    'text-punjab-primary',
    'text-rajasthan-primary',
    'text-bangaluru-primary',
    'text-hydrabad-primary',

    'text-chennai-secondary',
    'text-delhi-secondary',
    'text-gujrat-secondary',
    'text-kolkata-secondary',
    'text-lucknow-secondary',
    'text-mumbai-secondary',
    'text-punjab-secondary',
    'text-rajasthan-secondary',
    'text-bangaluru-secondary',
    'text-hydrabad-secondary',

  ],
  plugins: [],
}