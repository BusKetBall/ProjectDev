/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors
        'p-red': '#D32F2F',
        's-gold': '#FFD700',
        'a-orange': '#FF5722',
        'd-bg': '#212121',

        // Text Color
        't-light': '#F5F5F5',
        't-dark': '#212121',

        // Background Color
        'b-dark': '#212121',
      },
      fontFamily: {
        // Montserrat หัวข้อและข้อความหลัก
        'montserrat':['Montserrat', 'sans-serif'],
        // Roboto รอง 
        'roboto':['Roboto', 'sans-serif'],
        // เนื้อหาหรูหรา หมาเห่า
        'lora':['Lora', 'serif'],
        'merriweather':['Merriweather', 'serif'],
      },
      fontSize: {
        'h-lg': '36px', // หัวข้อหลัก
        'h-md': '28px', // ย่อย
        'body': '16px', // ปกติหลัก
        'small': '12px', // เล็กรอง

      }
    },
  },
  plugins: [],
}