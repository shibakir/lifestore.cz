/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/common/**/*.{js,ts,jsx,tsx,mdx}",
  ],
	theme: {
  	fontSize: {
  		xs: '12px',
  		sm: '14px',
  		base: '16px',
  		lg: '18px',
  		xl: '25px',
  		'2xl': '28px',
  		'3xl': '34px',
  		'4xl': '44px',
  		'5xl': '54px',
  		'6xl': '66px'
  	},
  	extend: {
		fontFamily: {
			montserrat: ['Montserrat', 'sans-serif'],
		},
  		colors: {
  			background: {
  				primary: 'var(--color-background-primary)',
  				secondary: 'var(--color-background-secondary)',
  				tertiary: 'var(--color-background-tertiary)',
				quaternary: 'var(--color-background-quaternary)'
  			},
  			text: {
  				primary: 'var(--color-text-primary)',
  				secondary: 'var(--color-text-secondary)',
				tertiary: 'var(--color-text-tertiary)',
  			},
  			button: {
  				'button-1': 'var(--color-button-1)',
  				'button-2': 'var(--color-button-2)',
  				'button-3': 'var(--color-button-3)',
  				'button-4': 'var(--color-button-4)',
				'button-5': 'var(--color-button-5)',
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	},
	  screens: {
		  sm: '640px',
		  md: '768px',
		  lg: '1024px',
		  xl: '1280px',
		  '2xl': '1536px',
		  '3xl': '1736px'
	  }
  },
  plugins: [require("tailwindcss-animate")],
};
