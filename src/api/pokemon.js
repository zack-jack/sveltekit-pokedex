import { get } from '../utils/http';

export default class Pokemon {
	constructor({ api = null, imagePath = null }) {
		/**
		 * The fully qualified base url for the Pokemon API
		 * @type {String}
		 */
		this.api = api;

		/**
		 * The fully qualified base url for hosted images
		 * @type {String}
		 */
		this.imagePath = imagePath;
	}

	/**
	 * Fetch all pokemon numbered 1 to upperLimit
	 * @param {Number} upperLimit limit upper bounds
	 * @returns {Promise<Object>} - Array of pokemon objects
	 */
	async pokemonGetAll(upperLimit = 150) {
		const { results } = await get(`${this.api}/api/v2/pokemon?limit=${upperLimit}`, {}, {});

		if (!results?.length) {
			return Promise.resolve([]);
		}

		const loadedPokemon = results.map(({ name, url }, i) => ({
			id: i + 1,
			name,
			url,
			image: `${this.imagePath}/${i + 1}.png`
		}));

		return Promise.resolve(loadedPokemon);
	}
}
