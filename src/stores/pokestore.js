import { writable } from 'svelte/store';
import Pokemon from '../api/pokemon';

const pokemonAPI = new Pokemon({
	api: import.meta.env.VITE_API,
	imagePath: import.meta.env.VITE_IMAGE_PATH
});

export const pokemon = writable({});
export const pokemonArr = writable([]);

/**
 * Fetch all pokemon numbered 1 to upperLimit from API and set it in store variable
 * @param {Number} upperLimit limit upper bounds
 * @returns {Promise<Array>}
 */
export const pokemonGetAll = async (upperLimit = 150) => {
	const results = await pokemonAPI.pokemonGetAll(upperLimit);

	pokemonArr.set(results);
	return Promise.resolve(results);
};

/**
 * Fetch pokemon by id and set it in store variable
 * @param {String} id id of the pokemon to fetch
 * @returns {Promise<Object>}
 */
export const pokemonGetById = async (id) => {
	const result = await pokemonAPI.pokemonGetById(id);

	pokemon.set(result);

	return Promise.resolve(result);
};
