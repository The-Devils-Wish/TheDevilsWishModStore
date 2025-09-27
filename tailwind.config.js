/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Devils Wish Black & Red Theme
        'devil-red': '#DC2626',
        'devil-darkred': '#991B1B',
        'devil-black': '#0A0A0A',
        'devil-gray': '#1A1A1A',
        'devil-white': '#FFFFFF',
      },
      fontFamily: {
        'metal': ['Orbitron', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'flame': 'flame 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        flame: {
          '0%': { textShadow: '0 0 5px #DC2626, 0 0 10px #DC2626, 0 0 15px #DC2626' },
          '100%': { textShadow: '0 0 10px #DC2626, 0 0 20px #DC2626, 0 0 30px #DC2626' },
        },
      },
    },
  },
  plugins: [],
}