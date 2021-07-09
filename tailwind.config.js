module.exports = {
	node: "jit",
	purge: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
	},
	variants: {
		extend: {
			borderColor: ["focus", "hover", "active"],
			borderWidth: ["focus", "hover", "active"],
		},
	},
	plugins: [],
};
