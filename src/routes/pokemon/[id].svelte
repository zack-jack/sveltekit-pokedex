<script context="module">
	import { pokemonGetById } from '../../api/pokemon';

	export async function load({ page }) {
		const { id } = page?.params;
		const pokemon = await pokemonGetById(id);

		return { props: { pokemon } };
	}
</script>

<script>
	export let pokemon;
	const { name, height, weight, types, sprites } = pokemon;
	const type = types[0]?.type?.name;
</script>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center uppercase">{name}</h1>
	<div class="mt-8">
		<p>Type: <span class="font-bold capitalize">{type}</span></p>
		<p>Height: <span class="font-bold">{height}</span></p>
		<p>Weight: <span class="font-bold">{weight}</span></p>
		<img src={sprites['front_default']} alt={name} class="card-image" />
	</div>
</div>
