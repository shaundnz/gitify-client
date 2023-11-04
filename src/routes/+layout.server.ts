import { PlaylistsApi } from '$lib/api';

export const prerender = true;
export const trailingSlash = 'always';

export const load = async () => {
	const playlists = await PlaylistsApi.getAllPlaylists();
	return {
		playlists: playlists
	};
};
