<script lang="ts">
	import { fly } from 'svelte/transition';
	import type { PageData } from './$types';
    let readMore = false;
	const getYear = (date) => {
		const d = new Date(date);
		return d.getFullYear();
	};

	// $: longBiography = data.overview.length > 400;

	export let data: PageData;
</script>

<div class="sm:flex items-top sm:space-x-4 z-20 bg-dark py-6 px-2 sm:px-0 text-black">
	<img
		class="h-48 sm:h-56 mt-1"
		src="https://image.tmdb.org/t/p/w300{data.profile_path}"
		alt="poster"
		
	/>
	<div class="flex flex-col dark:text-light">
		<div class="text-sm mt-4 sm:mt-0">{data.known_for_department}</div>
		<div class="text-4xl font-secondary font-bold">
			{data.name}
		</div>

		<div class="text-xs flex items-center space-x-1 text-gray font-medium">
			<div>*{getYear(data.birthday)} <span>in {data.place_of_birth}</span></div>
		</div>
		<div class="max-w-2xl relative select-none">
			<p class="mt-2 {readMore ? 'line-clamp-none' : 'line-clamp-6'}">
				{data.overview}
			</p>
		</div>
	</div>
</div>