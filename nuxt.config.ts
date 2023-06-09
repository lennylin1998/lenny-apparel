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
	nitro: {
		storage: {
		redis: {
			driver: 'redis',
			port: 6379, // Redis port
			host: "127.0.0.1", // Redis host
			username: "", // needs Redis >= 6
			password: "",
			db: 0, // Defaults to 0
			tls: {}
			/* redis connector options */
		},
		// db: {
		// 	driver: 'fs',
		// 	base: './.data/db'
		// }
		}
	}	  
})
