import { PUBLIC_TMBD_API_KEY } from '$env/static/public';
import type { PersonDetail } from '../../../models';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad<PersonDetail> = async ({ fetch, params }) => {
	const res = await fetch(
		`https://api.themoviedb.org/3/person/${params.id}?api_key=${PUBLIC_TMBD_API_KEY}&language=en-US`
	);

	const data = await (res.json() as Promise<PersonDetail>);

	if (res.ok) return data;

};
