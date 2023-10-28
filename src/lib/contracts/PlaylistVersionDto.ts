import type { PlaylistedTrack } from '@spotify/web-api-ts-sdk';

export interface PlaylistVersionDto {
	versionDate: Date;
	tracks: PlaylistedTrack[];
}
