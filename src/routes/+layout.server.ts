import { PlaylistsApi } from '$lib/api';

export const prerender = true;

export const load = async () => {
	const playlists = await PlaylistsApi.getAllPlaylists();
	return {
		playlists: playlists
	};
};
