/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        anek_kannada: ['Anek Kannada', 'sans-serif'],
        open_sans: ['Open Sans', 'sans-serif']
      }
    }
  },
  plugins: []
}
