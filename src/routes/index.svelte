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

<h1>SvelteKit Pokedex</h1>

{#each $pokemonArr as { name }}
	<p>{name}</p>
{/each}
