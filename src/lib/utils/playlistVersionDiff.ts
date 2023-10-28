import { PlaylistSongStatus } from '$lib/constants';
import type { PlaylistVersionDto } from '$lib/contracts';
import type { PlaylistedTrackWithStatus } from '$lib/types';
import type { PlaylistedTrack } from '@spotify/web-api-ts-sdk';

interface PlaylistVersionSongMap {
	[id: string]: PlaylistedTrack;
}

export const playlistVersionDiff = (
	versionBefore: PlaylistVersionDto,
	versionAfter: PlaylistVersionDto
): [PlaylistedTrackWithStatus[], PlaylistedTrackWithStatus[]] => {
	const versionBeforeMap: PlaylistVersionSongMap = {};

	versionBefore.tracks.forEach((track) => {
		versionBeforeMap[track.track.id] = track;
	});

	const versionAfterMap: PlaylistVersionSongMap = {};
	versionAfter.tracks.forEach((track) => {
		versionAfterMap[track.track.id] = track;
	});

	const versionBeforeCompared: PlaylistedTrackWithStatus[] = Object.keys(versionBeforeMap).map(
		(id) => {
			// Song exists in both before and after version
			if (id in versionAfterMap) {
				return { ...versionBeforeMap[id] };
			}
			// Song was in before version, but not in after version, was removed
			return { ...versionBeforeMap[id], status: PlaylistSongStatus.Removed };
		}
	);

	const versionAfterCompared: PlaylistedTrackWithStatus[] = Object.keys(versionAfterMap).map(
		(id) => {
			// Song exists in both before and after version
			if (id in versionBeforeMap) {
				return { ...versionAfterMap[id] };
			}
			// Song is in after version, but not in before version, was added
			return { ...versionAfterMap[id], status: PlaylistSongStatus.Added };
		}
	);

	return [versionBeforeCompared, versionAfterCompared];
};
