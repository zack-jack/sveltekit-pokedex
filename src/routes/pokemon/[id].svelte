<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { pokemon, pokemonGetById } from '../../stores/pokestore';

	const { id } = $page?.params;

	onMount(async () => {
		await pokemonGetById(id);
	});
</script>

{#if !$pokemon?.name}
	<p class="text-4xl text-center uppercase">Loading...</p>
{:else}
	<div class="flex flex-col items-center">
		<h1 class="text-4xl text-center uppercase">{$pokemon?.name}</h1>
		<div class="mt-8">
			<p>Type: <span class="font-bold capitalize">{$pokemon?.types[0]?.type?.name}</span></p>
			<p>Height: <span class="font-bold">{$pokemon?.height}</span></p>
			<p>Weight: <span class="font-bold">{$pokemon?.weight}</span></p>
			<img src={$pokemon?.sprites['front_default']} alt={$pokemon?.name} class="card-image" />
		</div>
	</div>
{/if}
