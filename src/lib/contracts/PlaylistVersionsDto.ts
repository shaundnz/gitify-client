import type { Playlist, PlaylistedTrack } from '@spotify/web-api-ts-sdk';

export interface PlaylistVersionsDto {
	playlist: Omit<Playlist, 'tracks'>[];
	playlistVersions: {
		versionDate: Date;
		tracks: PlaylistedTrack[];
	}[];
}
