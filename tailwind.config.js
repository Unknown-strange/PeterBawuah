/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
	theme: {
		extend: {
		  borderRadius: { // Keep this section as it is
			lg: 'var(--radius)',
			md: 'calc(var(--radius) - 2px)',
			sm: 'calc(var(--radius) - 4px)'
		  },
		  colors: { // Add the new colors inside this 'colors' object
			// --- Add these lines START ---
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			primary: {
			  DEFAULT: "hsl(var(--primary))",
			  foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
			  DEFAULT: "hsl(var(--secondary))",
			  foreground: "hsl(var(--secondary-foreground))",
			},
			destructive: {
			  DEFAULT: "hsl(var(--destructive))",
			  foreground: "hsl(var(--destructive-foreground))",
			},
			muted: {
			  DEFAULT: "hsl(var(--muted))",
			  foreground: "hsl(var(--muted-foreground))",
			},
			accent: {
			  DEFAULT: "hsl(var(--accent))",
			  foreground: "hsl(var(--accent-foreground))",
			},
			popover: {
			  DEFAULT: "hsl(var(--popover))",
			  foreground: "hsl(var(--popover-foreground))",
			},
			card: {
			  DEFAULT: "hsl(var(--card))",
			  foreground: "hsl(var(--card-foreground))",
			},
			// --- Add these lines END ---
	
			// --- Keep your existing sidebar colors --- 
			sidebar: {
			  DEFAULT: 'hsl(var(--sidebar-background))',
			  foreground: 'hsl(var(--sidebar-foreground))',
			  primary: 'hsl(var(--sidebar-primary))',
			  'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
			  accent: 'hsl(var(--sidebar-accent))',
			  'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
			  border: 'hsl(var(--sidebar-border))',
			  ring: 'hsl(var(--sidebar-ring))'
			}
			// --- End of existing sidebar colors ---
		  },
		  keyframes: { // Keep this section as it is
			'accordion-down': {
			  from: {
				height: '0'
			  },
			  to: {
				height: 'var(--radix-accordion-content-height)'
			  }
			},
			'accordion-up': {
			  from: {
				height: 'var(--radix-accordion-content-height)'
			  },
			  to: {
				height: '0'
			  }
			}
		  },
		  animation: { // Keep this section as it is
			'accordion-down': 'accordion-down 0.2s ease-out',
			'accordion-up': 'accordion-up 0.2s ease-out'
		  }
		}
	  },
	  // Keep the plugins section as it is
	  plugins: [require("tailwindcss-animate")],
	 
}

