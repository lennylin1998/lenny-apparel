// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: ['~/assets/css/tailwind.css'],
	postcss: {
		plugins: {
			// 'postcss-import': {},
			// 'postcss-nested': {},
			tailwindcss: {},
			autoprefixer: {},
		},
	},
})
