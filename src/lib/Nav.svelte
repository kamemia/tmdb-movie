<script>
	 import SearchMovie from "./SearchMovie.svelte";
</script>

<nav class="bg-slate-400 border-gray-200 py-2.5 rounded dark:bg-gray-900 ">
	<div class="container flex flex-wrap justify-between items-center mx-auto">
		<a href="/" class="flex items-center">
			<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
				>TMDB Movie</span
			></a
		>
		<SearchMovie/>
	</div>
</nav>
