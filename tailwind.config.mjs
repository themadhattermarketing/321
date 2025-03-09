/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A', // deep blue for trust
          light: '#3B82F6',
        },
        secondary: {
          DEFAULT: '#D97706', // amber for warmth and energy
          light: '#FBBF24',
        },
        neutral: {
          light: '#F3F4F6',
          DEFAULT: '#9CA3AF',
          dark: '#1F2937',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
