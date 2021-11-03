<script>
	import { onMount } from 'svelte';
	import { pokemonArr, pokemonGetAll } from '../stores/pokestore';
	import PokemonCard from '../components/pokemonCard.svelte';

	onMount(async () => {
		console.log("Gotta catch 'em all!");
		await pokemonGetAll();
	});
</script>

<svelte:head>
	<title>Home | Sveltekit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center uppercase">SvelteKit Pokedex</h1>
<div class="grid gap-4 grid-cols-1 mt-8 md:grid-cols-2">
	{#each $pokemonArr as { id, name, imageSrc }}
		<PokemonCard {id} {name} {imageSrc} />
	{/each}
</div>
