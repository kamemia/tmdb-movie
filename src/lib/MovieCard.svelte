<script lang="ts">
	import type { Movie } from '../models';

	export let movie: Movie;
	import { Tilt } from 'svelte-ux'
</script>

<div class="flex flex-col justify-around p-1 relative">
	<a data-sveltekit-prefetch data-sveltekit-noscroll href={`/movie/${movie.id}`}>
		<Tilt class="hover:scale-110 transition duration-500">
		<img
		  class="object-cover object-bottom w-full h-56 sm:h-48 group-hover:scale-105 transition-all duration-200 rounded-2xl"
		  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
		  alt={movie.title}
		/>
	  </Tilt>
	  <div class="description absolute bottom-0 left-0 right-0 text-white text-center">
			<div class=" transition-all ml-[40px] text-left pb-[40px] font-bold">{movie.title}</div>
			<!-- <div class="transition-all ml-[40px] text-left  font-bold">{movie.release_date}</div> -->
	  </div>
	</a>
  </div>

<style>
	img {
		/* height: 30vh; */
		width: 100%;
	}
	
</style>
