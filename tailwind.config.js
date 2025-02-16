/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
  	extend: {
		fontFamily: {
			sans: ["Lato"],
		},
		screens: {
			'tn': {
				'max': '400px'
			},
		},
		fontSize: {
			md: "1.04rem",
			"1xl": "1.36rem",
		},
		keyframes: {
			scroll: {
				from: { transform: "translateX(0)" },
				to: { transform: "translateX(-50%)" },
			},
		},
		animation: {
			scroll: "scroll 45s linear infinite",
		},
		boxShadow: {
			'led-green': "0 -1px 7px 1px rgba(0, 0, 0, 0.2), inset 0 -1px 9px #304701, 0 2px 12px #89FF00",
			'led-red': "0 -1px 7px 1px rgba(0, 0, 0, 0.2), inset 0 -1px 9px #441313, 0 2px 12px rgba(255, 0, 0, 0.5)",
		},
		fontWeight: {
			'semi-minus': 550
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		gridTemplateColumns: {
			"16": "repeat(16, minmax(0, 1fr))",
			"18": "repeat(18, minmax(0, 1fr))",
		},
		gridColumnStart: {
			"13": "13",
			"14": "14",
			"15": "15",
			"16": "16",
			"17": "17",
		},
  		colors: {
  			background: 'hsl(var(--background))',
			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))',
				less: "hsl(var(--less-muted))"
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

