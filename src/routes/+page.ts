import { PUBLIC_TMBD_API_KEY } from '$env/static/public';
import type { Movie, Response } from '../models';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

type OutputProps = { popularMovies: Response<Movie> };



export const load: PageLoad<OutputProps> = async ({ fetch }) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/popular?api_key=${PUBLIC_TMBD_API_KEY}&language=en-US&page=1`
	);

	const data = await (res.json() as Promise<Response<Movie>>);

	if (res.ok) return { popularMovies: data };

	throw error(res.status, res.statusText);
};
