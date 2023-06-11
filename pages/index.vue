<template>
	<div class="flex items-center justify-center min-h-screen bg-gray-100">
		<div class="w-full max-w-md">
			<form class="bg-white shadow-md rounded px-8 py-8 pt-8">
				<div class="mb-4">
					<h1 class="block text-gray-700 text-sm font-bold mb-2">
						This is Index
					</h1>
					<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click.prevent="submitForm">{{ data.value }}</button>
				</div>
				<div class="flex items-center justify-between">
					<NuxtLink
                        to="/login"
						class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
					>
						Login
                    </NuxtLink>
                    <NuxtLink
                        to="/register"
						class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
					>
						Register
                    </NuxtLink>
				</div>
			</form>
		</div>
	</div>
</template>
<script lang="ts" setup>
	const { data } = useAuth()
	console.log(data.value)
</script>
<script lang="ts">

export default defineComponent({
	data() {
		return {

		};
	},
	methods: {
		submitForm() {
			console.log(data.value)
		},
	},
});
</script>
