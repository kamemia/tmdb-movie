<script lang="ts">
	import MovieCard from '$lib/MovieCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
	{#each data.searchMovies.results as movie}
		<MovieCard {movie} />
	{/each}
</section>

<style>
	.searched-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		column-gap: 1rem;
		row-gap: 2rem;
	}
</style>
