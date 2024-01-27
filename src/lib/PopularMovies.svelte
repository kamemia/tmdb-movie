<script lang="ts">
	import type { Movie } from '../models';
	import MovieCard from './MovieCard.svelte';
	// import  from './Carousel.svelte'
	import Carousel from './MovieCarrousel.svelte';
	export let movies: Movie[];
</script>

<Carousel autoplay="5000">
	{#each movies as movie}
	<div class="relative group">
		<a data-sveltekit-prefetch data-sveltekit-noscroll href={`/movie/${movie.id}`}>
		<div class="absolute flex flex-col justify-between  w-full h-full z-20 text-white">
			
			<div class="p-6 flex flex-col space-y-1">
				<div class="text-6xl font-secondary font-bold group-hover:text-6xl transition-all ">
					{movie.title}
				</div>
				
				<p class="font-light max-w-xl line-clamp-3 leading-snug">{movie.overview}</p>
			</div>
		</div>
		<div
			class="bg-gradient-to-tr from-dark to-transparent mix-blend-multiply absolute z-10 w-full h-full transition-all group-hover:opacity-50"
		/>
	
	<img
		  class="object-cover object-center bg-light w-full h-80 sm:h-[32rem] group-hover:scale-105 transition-all duration-200 rounded-[20px]"
		  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
		  alt={movie.title}
		/>
	</a>
	</div>
	{/each}

</Carousel>



<h3 class="text-lg mb-3 font-bold px-2 pt-4">Discover</h3>

<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
	{#each movies as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	
</style>
