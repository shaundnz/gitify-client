import type { PlaylistSongStatus } from '$lib/constants';
import type { PlaylistTrack } from '$lib/contracts';
import type { Track } from '@spotify/web-api-ts-sdk';

export interface PlaylistedTrackWithStatus extends PlaylistTrack {
	status?: PlaylistSongStatus;
	track: Track;
}
