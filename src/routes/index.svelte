<script>
	import { onMount } from 'svelte';
	import { pokemonArr, pokemonGetAll } from '../stores/pokestore';
	import PokemonCard from '../components/pokemonCard.svelte';

	let searchTerm = '';
	let filteredPokemon = [];

	onMount(async () => {
		console.log("Gotta catch 'em all!");
		await pokemonGetAll();
	});

	$: {
		if (searchTerm) {
			filteredPokemon = [...$pokemonArr].filter(({ name }) =>
				name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemonArr];
		}
	}
</script>

<svelte:head>
	<title>Home | Sveltekit Pokedex</title>
</svelte:head>

<h1 class="text-4xl text-center uppercase">SvelteKit Pokedex</h1>
<input
	bind:value={searchTerm}
	type="text"
	placeholder="search..."
	class="
	  w-full mt-8 p-4
		border-2 border-gray-200 rounded-md
		text-lg
	"
/>
<div class="grid gap-4 grid-cols-1 mt-8 md:grid-cols-2">
	{#each filteredPokemon as { id, name, imageSrc }}
		<PokemonCard {id} {name} {imageSrc} />
	{/each}
</div>
