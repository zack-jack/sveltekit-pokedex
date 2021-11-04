/**
 * Fetch all pokemon numbered 1 to upperLimit
 * @param {Number} upperLimit limit upper bounds
 * @returns {Promise<Array>} - Array of pokemon objects
 */
export const pokemonGetAll = async (upperLimit = 150) => {
	const res = await fetch(`${import.meta.env.VITE_API}/api/v2/pokemon?limit=${upperLimit}`);
	const { results } = await res.json();

	if (!results?.length) {
		return Promise.resolve([]);
	}

	const loadedPokemon = results.map(({ name, url }, i) => ({
		id: i + 1,
		name,
		url,
		imageSrc: `${import.meta.env.VITE_IMAGE_PATH}/${i + 1}.png`
	}));

	return Promise.resolve(loadedPokemon);
};

/**
 * Fetch pokemon by id
 * @param {String} id id of the pokemon to fetch
 * @returns {Promise<Object>} - Array of pokemon objects
 */
export const pokemonGetById = async (id) => {
	const res = await fetch(`${import.meta.env.VITE_API}/api/v2/pokemon/${id}`);
	const pokemon = await res.json();

	if (!pokemon) {
		return Promise.resolve({});
	}

	return Promise.resolve(pokemon);
};
