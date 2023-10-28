import { PlaylistsApi } from '$lib/api';

export const load = async ({ params }) => {
	const playlist = await PlaylistsApi.getPlaylist(params.id);

	return {
		playlist: playlist
	};
};
