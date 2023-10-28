import { PlaylistsApi } from '$lib/api';

export const load = async ({ params }) => {
	const playlist = await PlaylistsApi.getPlaylist(params.id);

	// Map the date string to an actual date object
	playlist.playlistVersions.forEach((playlistVersion) => {
		playlistVersion.versionDate = new Date(playlistVersion.versionDate);
	});

	return {
		playlist: playlist
	};
};
