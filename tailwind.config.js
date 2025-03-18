/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


// module.exports = {
//   theme: {
//     extend: {
//       animation: {
//         'fade-in-up': 'fadeInUp 1s ease-out forwards',
//       },
//       keyframes: {
//         fadeInUp: {
//           '0%': {
//             opacity: '0',
//             transform: 'translateY(3rem)',
//           },
//           '100%': {
//             opacity: '1',
//             transform: 'translateY(0)',
//           },
//         },
//       },
//     },
//   },
// }

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//        'fade-in-up': 'fadeInUp 1s ease-out forwards',
//       },
//     },
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'zoom-in': 'zoomIn 0.5s ease-out forwards',
//         'slide-in': 'slideIn 0.7s ease-out forwards',
//       },
//       keyframes: {
//         zoomIn: {
//           '0%': {
//             opacity: '0',
//             transform: 'scale(0.9)',
//           },
//           '100%': {
//             opacity: '1',
//             transform: 'scale(1)',
//           },
//         },
//         slideIn: {
//           '0%': {
//             opacity: '0',
//             transform: 'translateX(50px)',
//           },
//           '100%': {
//             opacity: '1',
//             transform: 'translateX(0)',
//           },
//         },
//       },
//     },
//   },
//   plugins: [],
// }
