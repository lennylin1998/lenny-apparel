<template>
	<div class="flex items-center justify-center min-h-screen bg-gray-100">
		<div class="w-full max-w-md">
			<form class="bg-white shadow-md rounded px-8 py-8 pt-8" @submit.prevent="login">
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="username">
						Username
					</label>
					<input
						v-model="username"
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="username"
						type="text"
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="password">
						Password
					</label>
					<input
						v-model="password"
						class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
						id="password"
						type="password"
					/>
					<p class="text-red-500 text-xs italic">Please enter password.</p>
				</div>

				<div class="flex items-center justify-between">
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						@click.prevent="handleSignIn"
					>
						Sign In
					</button>
					<a
						class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
						href="/register"
					>
						Register
					</a>
				</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts" setup>
	const { status, signIn } = useAuth()
	// definePageMeta({
	// 	auth: {
	// 		navigateAuthenticatedTo: 'http://ec2-44-203-149-17.compute-1.amazonaws.com/',
	// 	}
	// })
	async function handleSignIn() {
		await signIn({ callbackUrl: 'http://ec2-44-203-149-17.compute-1.amazonaws.com/' })
		console.log(status.value)
	}
</script>
<script lang="ts">
export default defineComponent({
	data() {
		return {
			username: '',
			password: '',
		};
	},
	methods: {
		// async login() {
		// 	// Perform form submission logic here
		// 	const res = await $fetch('/api/login', {
		// 		method: 'post',
		// 		body: {
		// 			username: this.username,
		// 			password: this.password,
		// 		}
        // 	})
		// 	console.log(res)
		// },
	},
})


</script>
