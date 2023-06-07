<template>
	<div class="flex items-center justify-center min-h-screen bg-gray-100">
		<div class="w-full max-w-md">
			<form class="bg-white shadow-md rounded px-8 py-8 pt-8" @submit.prevent="submitForm">
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="email">
						Email
					</label>
					<input
						v-model="email"
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
					    placeholder="Email"
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
						type="text"
					/>
					<p class="text-red-500 text-xs italic">Please enter password.</p>
				</div>
				<div class="flex items-center justify-between">
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Sign In
					</button>
					<a
						class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
						href="#"
					>
						Forgot Password?
					</a>
				</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	data() {
		return {
			email: resData.email,
			password: resData.password,
		};
	},
	methods: {
		submitForm() {
			// Perform form submission logic here
			console.log('Form submitted');
            const serialized = JSON.stringify({email: this.email, password: this.password});
			const { data: resDataSuccess } = await useFetch('/api/test', {
				method: 'post',
				body: { email: this.email, password: this.password}
			});
            alert(resDataSuccess);
			const { data: resData } = await useFetch('/api/test');
		},
	},
});
</script>

<style scoped>
/* @import '@/assets/css/tailwind.css'; */
.container {
	max-width: 500px;
}
</style>
