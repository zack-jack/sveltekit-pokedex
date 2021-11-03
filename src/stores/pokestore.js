import { writable } from 'svelte/store';
import Pokemon from '../api/pokemon';

const pokemonAPI = new Pokemon({
	api: import.meta.env.VITE_API,
	imagePath: import.meta.env.VITE_IMAGE_PATH
});

export const pokemonArr = writable([]);

/**
 * Fetch all pokemon numbered 1 to upperLimit from API and set it in store variable
 * @param {Number} upperLimit limit upper bounds
 */
export const pokemonGetAll = async (upperLimit = 150) => {
	const results = await pokemonAPI.pokemonGetAll(upperLimit);

	pokemonArr.set(results);
};
