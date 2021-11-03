<script>
	import Nav from '../components/nav.svelte';
</script>

<div class="max-w-6xl mx-auto">
	<Nav />
	<main class="p-8">
		<slot />
	</main>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
