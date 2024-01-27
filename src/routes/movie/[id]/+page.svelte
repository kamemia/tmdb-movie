<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
	import MdiAlarmClock from '~icons/mdi/alarm-clock';
	import MdiLink from '~icons/mdi/link';
	export let data: PageData;
</script>

<div class="sm:flex items-top sm:space-x-4 z-20 bg-dark py-6 px-2 sm:px-0 text-black">
	<img
		class="h-48 sm:h-56 mt-1"
		src="https://image.tmdb.org/t/p/w300{data.poster_path}"
		alt="poster"
		in:fly={{ y: 50, duration: 500, delay: 500 }}
	/>
	<div class="flex flex-col dark:text-light">
		<div class="text-sm mt-4 sm:mt-0">{data.tagline}</div>
		<div class="text-4xl font-secondary font-bold">
			{data.title}
		</div>
		<div
			class="text-xs flex items-center justify-between sm:justify-start space-x-6 mt-2 text-gray"
		>
			{#if data.genres}
				<div class="flex space-x-1 items-center">
					{#each data.genres as genre, index}
						<div>{genre.name}</div>
						{#if data.genres.length - 1 !== index}
							<div>|</div>
						{/if}
					{/each}
				</div>
			{/if}
			
		</div>
		<div class="text-xs flex items-center space-x-1 text-gray font-medium">
			
			{#if data.runtime}
				<div class="flex items-center ">
					<MdiAlarmClock/>
					
					<span>{data.runtime} min</span>
				</div>
			{/if}
		</div>
		<div class="max-w-2xl">
			<p class="mt-2">{data.overview}</p>
		</div>
		<div class="flex items-center space-x-4 text-xs text-gray mt-2">
			{#if data.homepage}
				<div class="flex items-center space-x-1">
					<MdiLink/>
					<a rel="external" href={data.homepage} target="_blank">{data.homepage}</a>
				</div>
			{/if}
		</div>
		
	</div>
</div>