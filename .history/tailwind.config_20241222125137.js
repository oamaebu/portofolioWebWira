

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
          animation: {
            'fade-slide-loop': 'fadeSlideLoop 3s ease-in-out infinite',
          },
          fontFamily: {
            sans: ['Figtree', 'sans-serif'],
          },
          keyframes: {
            fadeSlideLoop: {
              '0%': { opacity: '0', transform: 'translateY(-50%)' },
              '50%': { opacity: '1', transform: 'translateY(0)' },
              '100%': { opacity: '0', transform: 'translateY(50%)' },
            },
          },
        },
        
      },
      plugins: [
        function ({ addUtilities }) {
          addUtilities({
            '.delay-0': { animationDelay: '0ms' },
            '.delay-200': { animationDelay: '200ms' },
            '.delay-300': { animationDelay: '300ms' },
            '.delay-400': { animationDelay: '400ms' },
          });
        },
      ],
    };
    