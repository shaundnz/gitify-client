import type { PlaylistSongStatus } from '$lib/constants';
import type { PlaylistedTrack } from '@spotify/web-api-ts-sdk';

export interface PlaylistedTrackWithStatus extends PlaylistedTrack {
	status?: PlaylistSongStatus;
}
