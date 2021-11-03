<script>
	import { onMount } from 'svelte';
	import { pokemonArr, pokemonGetAll } from '../stores/pokestore';

	onMount(async () => {
		console.log("Gotta catch 'em all!");
		await pokemonGetAll();
	});
</script>

<svelte:head>
	<title>Home | Sveltekit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center uppercase">SvelteKit Pokedex</h1>
<div class="mt-8">
	{#each $pokemonArr as { name }}
		<p>{name}</p>
	{/each}
</div>
