<script>
	export let id;
	export let name;
	export let imageSrc;
</script>

<a
	href={`/pokemon/${id}`}
	class="
	  flex flex-col items-center
	  p-6 bg-gray-100 rounded-md
	  shadow-sm hover:shadow-md
	"
>
	<img src={imageSrc} alt={name} class="w-40 h-40" />
	<p class="text-xl text-gray-800 text-center uppercase">{id}. {name}</p>
</a>
